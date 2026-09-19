import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { readBands } from '../audio/audioBus';
import { liveRefs, useDirectorStore } from '../director/directorStore';
import { decayBurst } from './sceneMath';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float time;
  uniform float zoom;
  uniform float bass;
  uniform float mids;
  uniform float treble;
  uniform vec3 color1;
  uniform vec3 color2;

  // Julia set
  vec3 palette(float d) {
    // mix between color1 and color2 based on iterations
    return mix(color1, color2, smoothstep(0.0, 1.0, d));
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= 1.6; // aspect
    // Center and zoom
    float z = 1.0 / zoom;
    vec2 c = vec2(-0.7 + sin(time * 0.05) * 0.1, 0.27 + cos(time * 0.07) * 0.1);
    vec2 p = uv * z;

    // Julia iteration
    int maxIter = 64;
    float iter = 0.0;
    vec2 zc = p;
    for(int i=0; i<64; i++) {
      if(i >= maxIter) break;
      float x = zc.x * zc.x - zc.y * zc.y + c.x;
      float y = 2.0 * zc.x * zc.y + c.y;
      zc = vec2(x, y);
      if(dot(zc,zc) > 4.0) { iter = float(i) / float(maxIter); break; }
      iter = float(i) / float(maxIter);
    }

    // Audio reactivity: bass pulses brightness, treble shifts hue
    float brightness = 0.5 + bass * 0.5 + mids * 0.2;
    vec3 col = palette(iter) * (0.6 + brightness * 0.8);
    // Treble tint
    col += vec3(treble * 0.2, 0.0, treble * 0.1);

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function FractalScene({
  color = '#7dd3fc',
  emissive = '#a21caf',
  gain = 1,
  speed = 1,
}: {
  color?: string;
  emissive?: string;
  gain?: number;
  speed?: number;
}) {
  const liteOn = useDirectorStore((s) => s.liteOn);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      zoom: { value: 1 },
      bass: { value: 0 },
      mids: { value: 0 },
      treble: { value: 0 },
      color1: { value: new THREE.Color(color) },
      color2: { value: new THREE.Color(emissive) },
    }),
    // Palette remounts via key in host
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useFrame(({ clock }, delta) => {
    const { bass, mids, treble } = readBands();
    liveRefs.boost = decayBurst(liveRefs.boost, delta);
    if (!materialRef.current) return;
    const u = materialRef.current.uniforms;
    u.time.value = clock.elapsedTime * speed * 0.5;
    // Bass drives zoom, with boost
    const targetZoom = 1 + bass * 0.8 * gain + liveRefs.boost * 0.6 + Math.sin(clock.elapsedTime * 0.1) * 0.1;
    u.zoom.value = THREE.MathUtils.lerp(u.zoom.value, targetZoom, 0.04);
    u.bass.value = bass;
    u.mids.value = mids;
    u.treble.value = treble;
    // Update colors if palette changed (via gain/speed remount, but keep live)
    // Lite mode could lower iterations via define, but keep simple
    void liteOn;
  });

  return (
    <mesh>
      <planeGeometry args={[4, 4]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
