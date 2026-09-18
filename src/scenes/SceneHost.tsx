import { useDirectorStore } from '../director/directorStore';
import { DeformableMeshScene } from './DeformableMeshScene';
import { ParticleFieldScene } from './ParticleFieldScene';
import { TunnelFieldScene } from './TunnelFieldScene';
import { getPreset } from './presets';

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
        {preset.instances.map((inst, idx) => (
          <group key={`${preset.id}-${inst.base}-${idx}`}>{renderBase(inst.base, preset)}</group>
        ))}
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
