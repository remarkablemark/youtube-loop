import { create } from 'zustand';

interface State {
  timeStart: number;
  videoId: string;

  setTimeStart: (timeStart: number) => void;
  setVideoId: (videoId: string) => void;
}

export const useStore = create<State>((set) => ({
  timeStart: 0,
  videoId: '',

  setTimeStart: (timeStart) => set(() => ({ timeStart })),
  setVideoId: (videoId) => set(() => ({ videoId })),
}));
