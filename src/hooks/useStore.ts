import { create } from 'zustand';

interface State {
  videoId: string;
  setVideoId: (videoId: string) => void;
}

export const useStore = create<State>((set) => ({
  videoId: '',
  setVideoId: (videoId) => set(() => ({ videoId })),
}));
