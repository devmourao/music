import { useDirectorStore } from '../director/directorStore';
import { DeformableMeshScene } from './DeformableMeshScene';
import { ParticleFieldScene } from './ParticleFieldScene';
import { TunnelFieldScene } from './TunnelFieldScene';

export function SceneHost() {
  const activeSceneId = useDirectorStore((s) => s.activeSceneId);

  if (activeSceneId === 1) return <DeformableMeshScene />;
  if (activeSceneId === 2) return <TunnelFieldScene />;
  return <ParticleFieldScene />;
}
