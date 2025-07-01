import { useEffect, useState } from 'preact/hooks';

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function setDarkMode(isEnabled: boolean) {
    if (isEnabled) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }

  useEffect(() => {
    const isEnabled =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    setDarkMode(isEnabled);
  }, []);

  function onClick() {
    setDarkMode(!isDarkMode);
  }

  return (
    <div class="flex justify-center">
      <label class="relative container my-4 inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value={String(isDarkMode)}
          class="peer sr-only"
        />

        <div
          class="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-gray-600 peer-focus:ring-4 peer-focus:ring-gray-300 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-gray-800"
          // @ts-expect-error Property 'type' does not exist on type
          type="button"
          onClick={onClick}
        />

        <span
          class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          // @ts-expect-error Property 'type' does not exist on type
          type="button"
          onClick={onClick}
        >
          Dark mode
        </span>
      </label>
    </div>
  );
}
