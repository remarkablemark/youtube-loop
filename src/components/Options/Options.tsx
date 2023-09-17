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
    <div class="flex justify-center my-10">
      <form class="w-full max-w-sm">
        {/* videoId */}
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold md:text-right mb-1 md:mb-0 pr-4 dark:text-gray-300"
              for="videoId"
            >
              Video ID
            </label>
          </div>

          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
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
        <div class="md:flex md:items-center mt-2">
          <div class="md:w-1/3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold md:text-right mb-1 md:mb-0 pr-4 dark:text-gray-300"
              for="timeStart"
            >
              Time Start
            </label>
          </div>

          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
              id="timeStart"
              onInput={onInputTimeStart}
              placeholder="Seconds"
              type="number"
              value={state.timeStart}
            />
          </div>
        </div>

        {/* timeEnd */}
        <div class="md:flex md:items-center mt-2">
          <div class="md:w-1/3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold md:text-right mb-1 md:mb-0 pr-4 dark:text-gray-300"
              for="timeEnd"
            >
              Time End
            </label>
          </div>

          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
              id="timeEnd"
              onInput={onInputTimeEnd}
              placeholder="Seconds"
              type="number"
              value={state.timeEnd}
            />
          </div>
        </div>

        {/* width */}
        <div class="md:flex md:items-center mt-2">
          <div class="md:w-1/3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold md:text-right mb-1 md:mb-0 pr-4 dark:text-gray-300"
              for="width"
            >
              Width
            </label>
          </div>

          <div class="md:w-2/3">
            <select
              class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 p-2.5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
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
