import { useStore } from './useStore';

export function useState() {
  const videoId = useStore((state) => state.videoId);

  return {
    videoId,
  };
}
