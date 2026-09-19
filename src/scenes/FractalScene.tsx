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

  // Star kaleidoscope — 10-point neon star as in Mute Vision reference
  vec3 palette(float d) {
    return mix(color1, color2, smoothstep(0.0, 1.0, d));
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= 1.78; // 16:9 aspect to fill screen
    float z = 1.0 / zoom;
    vec2 p = uv * z * 1.4;

    // Polar + kaleidoscope 10 segments
    float angle = atan(p.y, p.x);
    float radius = length(p);
    float segments = 10.0;
    angle = mod(angle, 6.28318 / segments);
    angle = abs(angle - 3.14159 / segments);
    vec2 kp = vec2(cos(angle), sin(angle)) * radius;
    // Add time rotation
    float rot = time * 0.15 + mids * 0.5;
    kp = vec2(kp.x * cos(rot) - kp.y * sin(rot), kp.x * sin(rot) + kp.y * cos(rot));

    // HD mandala: 3 layers sharp + dots — black background
    float outer = 0.0;
    float inner = 0.0;
    float dots = 0.0;
    for(int i=0; i<10; i++) {
      float a = float(i) / 10.0 * 6.28318;
      vec2 dir = vec2(cos(a), sin(a));
      // Outer star
      float d1 = abs(dot(kp, dir) - 0.42 / zoom);
      outer += smoothstep(0.008, 0.0, d1) * (1.0 + bass * 0.7);
      // Inner star (half radius)
      vec2 kp2 = kp * 1.9;
      float d2 = abs(dot(kp2, dir) - 0.42 / zoom);
      inner += smoothstep(0.008, 0.0, d2) * 0.7;
      // Dots at vertices
      vec2 tip = dir * (0.42 / zoom);
      float dDot = length(kp - tip);
      dots += smoothstep(0.025, 0.0, dDot) * 0.9;
      vec2 tip2 = dir * (0.22 / zoom);
      float dDot2 = length(kp2 - tip2);
      dots += smoothstep(0.018, 0.0, dDot2) * 0.6;
    }

    float brightness = 0.95 + bass * 0.6 + mids * 0.25;
    vec3 outerCol = mix(color1, color2, 0.0) * outer * brightness;
    vec3 innerCol = mix(color1, color2, 0.55) * inner * brightness * 0.9;
    vec3 dotCol = color2 * dots * (1.0 + treble * 0.5);
    // Filigree-like fine lines via secondary kaleidoscope
    float filigree = smoothstep(0.006, 0.0, abs(fract(angle * 3.14159) - 0.5) * radius * 0.5);
    vec3 col = outerCol + innerCol + dotCol + filigree * color1 * 0.15;
    // Sharp glow
    col += pow(outer + inner, 2.0) * color1 * 0.15;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function FractalScene({
  color = '#ff7aff',
  emissive = '#00ffff',
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
    <mesh scale={[1.9, 1.1, 1]}>
      <planeGeometry args={[16, 9]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
