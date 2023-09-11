import { VITE_BASE_URL } from '../../config';
import YouTube from '../YouTube';

export default function Logo() {
  return (
    <div class="flex justify-center">
      <h1 class="container">
        <a class="flex items-center justify-center px-4" href={VITE_BASE_URL}>
          <YouTube width={300} />
          <span class="font-[sans-serif] ml-3 text-[15vw] min-[515px]:text-[5rem] tracking-tighter dark:text-white">
            Loop
          </span>
        </a>
      </h1>
    </div>
  );
}
