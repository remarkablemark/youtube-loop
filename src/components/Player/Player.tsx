import { useStore } from '../../hooks';

export default function Player() {
  const videoId = useStore((state) => state.videoId);

  if (!videoId) {
    return null;
  }

  return (
    <div class="flex justify-center">
      <p class="container flex items-center justify-center px-4">{videoId}</p>
    </div>
  );
}
