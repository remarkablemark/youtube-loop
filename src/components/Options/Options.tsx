import { useOnInput, useState } from '../../hooks';

export default function Options() {
  const onInputTimeEnd = useOnInput('timeEnd');
  const onInputTimeStart = useOnInput('timeStart');
  const onInputVideoId = useOnInput('videoId');
  const onInputWidth = useOnInput('width');
  const state = useState();

  if (!state.videoId) {
    return null;
  }

  return (
    <div class="my-10 flex justify-center">
      <form class="w-full max-w-sm">
        {/* videoId */}
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <label
              class="mb-1 block pr-4 text-xs font-bold uppercase tracking-wide text-gray-700 md:mb-0 md:text-right dark:text-gray-300"
              for="videoId"
            >
              Video ID
            </label>
          </div>

          <div class="md:w-2/3">
            <input
              class="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-red-600 focus:bg-white focus:outline-none"
              id="videoId"
              onInput={onInputVideoId}
              placeholder="YouTube video ID"
              spellcheck={false}
              type="text"
              value={state.videoId}
            />
          </div>
        </div>

        {/* timeStart */}
        <div class="mt-2 md:flex md:items-center">
          <div class="md:w-1/3">
            <label
              class="mb-1 block pr-4 text-xs font-bold uppercase tracking-wide text-gray-700 md:mb-0 md:text-right dark:text-gray-300"
              for="timeStart"
            >
              Time Start
            </label>
          </div>

          <div class="md:w-2/3">
            <input
              class="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-red-600 focus:bg-white focus:outline-none"
              id="timeStart"
              onInput={onInputTimeStart}
              placeholder="Seconds"
              type="number"
              value={state.timeStart}
            />
          </div>
        </div>

        {/* timeEnd */}
        <div class="mt-2 md:flex md:items-center">
          <div class="md:w-1/3">
            <label
              class="mb-1 block pr-4 text-xs font-bold uppercase tracking-wide text-gray-700 md:mb-0 md:text-right dark:text-gray-300"
              for="timeEnd"
            >
              Time End
            </label>
          </div>

          <div class="md:w-2/3">
            <input
              class="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-red-600 focus:bg-white focus:outline-none"
              id="timeEnd"
              onInput={onInputTimeEnd}
              placeholder="Seconds"
              type="number"
              value={state.timeEnd}
            />
          </div>
        </div>

        {/* width */}
        <div class="mt-2 md:flex md:items-center">
          <div class="md:w-1/3">
            <label
              class="mb-1 block pr-4 text-xs font-bold uppercase tracking-wide text-gray-700 md:mb-0 md:text-right dark:text-gray-300"
              for="width"
            >
              Width
            </label>
          </div>

          <div class="md:w-2/3">
            <select
              class="w-full rounded border-2 border-gray-200 bg-gray-200 p-2.5 py-2 leading-tight text-gray-700 focus:border-red-600 focus:bg-white focus:outline-none"
              id="width"
              onInput={onInputWidth}
            >
              {[360, 480, 640, 720, 1080].map((value) => (
                <option value={value} selected={state.width === value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
