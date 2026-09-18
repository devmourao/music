import { useDirectorStore } from '../director/directorStore';
import { AvatarScene } from './AvatarScene';
import { DeformableMeshScene } from './DeformableMeshScene';
import { GridLedScene } from './GridLedScene';
import { ParticleFieldScene } from './ParticleFieldScene';
import { TunnelFieldScene } from './TunnelFieldScene';
import { getPreset } from './presets';

export function SceneHost() {
  const activePresetId = useDirectorStore((s) => s.activePresetId);
  const preset = getPreset(activePresetId);

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
  if (preset.scene === 3)
    return (
      <GridLedScene
        key={preset.id}
        color={preset.palette.primary}
        emissive={preset.palette.emissive}
        gain={preset.gain}
        speed={preset.speed}
      />
    );
  if (preset.scene === 4)
    return (
      <AvatarScene
        key={preset.id}
        color={preset.palette.primary}
        emissive={preset.palette.emissive}
        gain={preset.gain}
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
