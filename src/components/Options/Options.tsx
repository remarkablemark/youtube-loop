import { useOnInput, useState } from '../../hooks';

export default function Options() {
  const onInputTimeStart = useOnInput('timeStart');
  const onInputVideoId = useOnInput('videoId');
  const state = useState();

  if (!state.videoId) {
    return null;
  }

  return (
    <div class="flex justify-center mt-10">
      <form class="w-full max-w-sm">
        {/* Video ID */}
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="video-id"
            >
              Video ID
            </label>
          </div>

          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="video-id"
              onInput={onInputVideoId}
              placeholder="YouTube video ID"
              spellcheck={false}
              type="text"
              value={state.videoId}
            />
          </div>
        </div>

        {/* Time Start */}
        <div class="md:flex md:items-center mt-2">
          <div class="md:w-1/3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="time-start"
            >
              Time Start
            </label>
          </div>

          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="time-start"
              onInput={onInputTimeStart}
              placeholder="Seconds"
              type="number"
              value={state.timeStart}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
