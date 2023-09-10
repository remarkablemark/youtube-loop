import YouTube from '../YouTube';

export default function Logo() {
  return (
    <div class="flex justify-center">
      <h1 class="container flex items-center justify-center px-4">
        <YouTube width={300} />
        <span class="font-[sans-serif] ml-3 text-[15vw] min-[515px]:text-[5rem] tracking-tighter dark:text-white">
          Loop
        </span>
      </h1>
    </div>
  );
}
