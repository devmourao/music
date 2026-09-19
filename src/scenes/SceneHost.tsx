import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { liveRefs, useDirectorStore } from '../director/directorStore';
import { DeformableMeshScene } from './DeformableMeshScene';
import { ParticleFieldScene } from './ParticleFieldScene';
import { TunnelFieldScene } from './TunnelFieldScene';
import { getPreset } from './presets';

function ParallaxGroup({
  sensitivity,
  children,
}: {
  sensitivity: number;
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    const g = ref.current;
    if (!g) return;
    g.rotation.y = liveRefs.azimuth * sensitivity;
    g.rotation.x = liveRefs.elevation * sensitivity;
  });
  return <group ref={ref}>{children}</group>;
}

function renderBase(base: string, preset: ReturnType<typeof getPreset>) {
  if (base === 'mesh')
    return (
      <DeformableMeshScene
        color={preset.palette.primary}
        emissive={preset.palette.emissive}
        gain={preset.gain}
      />
    );
  if (base === 'tunnel')
    return (
      <TunnelFieldScene
        color={preset.palette.primary}
        emissive={preset.palette.emissive}
        gain={preset.gain}
        speed={preset.speed}
      />
    );
  return (
    <ParticleFieldScene
      color={preset.palette.primary}
      emissive={preset.palette.emissive}
      gain={preset.gain}
      speed={preset.speed}
    />
  );
}

export function SceneHost() {
  const activePresetId = useDirectorStore((s) => s.activePresetId);
  const preset = getPreset(activePresetId);

  if (preset.instances && preset.instances.length > 0) {
    return (
      <group key={preset.id}>
        {preset.instances.map((inst, idx) => {
          const sens = (inst.params?.cameraSensitivity as number | undefined) ?? 1;
          return (
            <ParallaxGroup key={`${preset.id}-${inst.base}-${idx}`} sensitivity={sens}>
              {renderBase(inst.base, preset)}
            </ParallaxGroup>
          );
        })}
      </group>
    );
  }

  if (preset.scene === 1)
    return (
      <DeformableMeshScene
        key={preset.id}
        color={preset.palette.primary}
        emissive={preset.palette.emissive}
        gain={preset.gain}
      />
    );
  if (preset.scene === 2)
    return (
      <TunnelFieldScene
        key={preset.id}
        color={preset.palette.primary}
        emissive={preset.palette.emissive}
        gain={preset.gain}
        speed={preset.speed}
      />
    );
  return (
    <ParticleFieldScene
      key={preset.id}
      color={preset.palette.primary}
      emissive={preset.palette.emissive}
      gain={preset.gain}
      speed={preset.speed}
    />
  );
}
