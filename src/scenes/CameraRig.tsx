import { useFrame } from '@react-three/fiber';
import { liveRefs } from '../director/directorStore';
import { CAMERA_POSITION } from '../stageConfig';

const RADIUS = CAMERA_POSITION[2];

export function CameraRig() {
  useFrame(({ camera }) => {
    const az = liveRefs.azimuth;
    const el = liveRefs.elevation;
    camera.position.set(
      RADIUS * Math.sin(az) * Math.cos(el),
      RADIUS * Math.sin(el),
      RADIUS * Math.cos(az) * Math.cos(el),
    );
    camera.lookAt(0, 0, 0);
  });
  return null;
}
