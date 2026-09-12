import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing';

export function PostRig() {
  return (
    <EffectComposer multisampling={0}>
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
