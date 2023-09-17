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
      <label class="container relative inline-flex items-center my-4 cursor-pointer">
        <input
          type="checkbox"
          value={String(isDarkMode)}
          class="sr-only peer"
        />

        <div
          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"
          type="button"
          onClick={onClick}
        />

        <span
          class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          onClick={onClick}
        >
          Dark mode
        </span>
      </label>
    </div>
  );
}
