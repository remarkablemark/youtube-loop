import { useOnInput, useState } from '../../hooks';

export default function Input() {
  const onInput = useOnInput('videoId');
  const state = useState();

  if (state.videoId) {
    return null;
  }

  return (
    <div class="flex justify-center">
      <form class="container mx-4">
        <label
          for="youtubeUrl"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Paste YouTube URL
        </label>

        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              class="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            class="block w-full rounded-lg border border-2 border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 placeholder-gray-600 focus:border-red-600 focus:ring-red-600 focus:outline-hidden dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-300 dark:focus:border-red-600 dark:focus:ring-red-600"
            id="youtubeUrl"
            placeholder="Paste YouTube URL"
            required
            type="search"
            onInput={onInput}
          />
        </div>
      </form>
    </div>
  );
}
