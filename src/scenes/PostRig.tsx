import {
  Bloom,
  EffectComposer,
  HueSaturation,
  Vignette,
} from '@react-three/postprocessing';
import { useDirectorStore } from '../director/directorStore';
import { applyMix } from '../director/fx';

const BLOOM_BASE = 0.6;
const VIGNETTE_BASE = 0.55;

export function PostRig() {
  const hueShift = useDirectorStore((s) => s.hueShift);
  const mixBloom = useDirectorStore((s) => s.mixBloom);
  const mixVignette = useDirectorStore((s) => s.mixVignette);
  const masterMix = useDirectorStore((s) => s.masterMix);

  return (
    <EffectComposer multisampling={0}>
      <HueSaturation hue={hueShift * Math.PI * 2} saturation={0.15} />
      <Bloom
        intensity={applyMix(BLOOM_BASE, mixBloom, masterMix)}
        luminanceThreshold={0.75}
        luminanceSmoothing={0.2}
        mipmapBlur
      />
      <Vignette
        darkness={applyMix(VIGNETTE_BASE, mixVignette, masterMix)}
        offset={0.25}
      />
    </EffectComposer>
  );
}
