import {
  Bloom,
  EffectComposer,
  HueSaturation,
  Vignette,
} from '@react-three/postprocessing';
import { useDirectorStore } from '../director/directorStore';

export function PostRig() {
  const hueShift = useDirectorStore((s) => s.hueShift);

  return (
    <EffectComposer multisampling={0}>
      <HueSaturation hue={hueShift * Math.PI * 2} saturation={0.15} />
      <Bloom
        intensity={0.6}
        luminanceThreshold={0.75}
        luminanceSmoothing={0.2}
        mipmapBlur
      />
      <Vignette darkness={0.55} offset={0.25} />
    </EffectComposer>
  );
}
