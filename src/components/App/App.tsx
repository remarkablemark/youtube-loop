import YouTube from '../YouTube';

export default function App() {
  return (
    <main class="flex justify-center">
      <h1 class="flex items-center">
        <YouTube width={300} />
        <span class="ml-3 text-7xl tracking-tight">Loop</span>
      </h1>
    </main>
  );
}
