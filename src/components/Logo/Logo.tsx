import YouTube from '../YouTube';

export default function Logo() {
  return (
    <div class="flex justify-center">
      <h1 class="flex items-center">
        <YouTube width={300} />
        <span class="ml-3 text-7xl tracking-tight dark:text-white">Loop</span>
      </h1>
    </div>
  );
}
