import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  Glitch,
  HueSaturation,
  Scanline,
  Vignette,
} from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';
import { useDirectorStore } from '../director/directorStore';
import { applyMix } from '../director/fx';

const BLOOM_BASE = 0.6;
const VIGNETTE_BASE = 0.55;

export function PostRig() {
  const hueShift = useDirectorStore((s) => s.hueShift);
  const mixBloom = useDirectorStore((s) => s.mixBloom);
  const mixVignette = useDirectorStore((s) => s.mixVignette);
  const masterMix = useDirectorStore((s) => s.masterMix);
  const vhsOn = useDirectorStore((s) => s.vhsOn);
  const rgbOn = useDirectorStore((s) => s.rgbOn);

  return (
    <EffectComposer multisampling={0}>
      <HueSaturation hue={hueShift * Math.PI * 2} saturation={0.15} />
      {rgbOn && (
        <ChromaticAberration offset={[0.004, 0.002]} radialModulation modulationOffset={0.4} />
      )}
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
      {vhsOn && (
        <Glitch
          delay={[1.5, 3.5]}
          duration={[0.2, 0.6]}
          strength={[0.2, 0.5]}
          mode={GlitchMode.SPORADIC}
          active
        />
      )}
      {vhsOn && <Scanline density={1.25} />}
    </EffectComposer>
  );
}
