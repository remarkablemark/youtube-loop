import { VITE_BASE_URL } from '../../config';
import YouTube from '../YouTube';

export default function Logo() {
  return (
    <div class="flex justify-center">
      <h1 class="container">
        <a class="flex items-center justify-center px-4" href={VITE_BASE_URL}>
          <YouTube width={300} />
          <span class="ml-3 font-[sans-serif] text-[15vw] tracking-tighter text-neutral-800 min-[515px]:text-[5rem] dark:text-neutral-100">
            Loop
          </span>
        </a>
      </h1>
    </div>
  );
}
