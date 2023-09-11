import { create } from 'zustand';

interface State {
  timeEnd: number;
  timeStart: number;
  videoId: string;

  setTimeEnd: (timeEnd: number) => void;
  setTimeStart: (timeStart: number) => void;
  setVideoId: (videoId: string) => void;
}

export const useStore = create<State>((set) => ({
  timeEnd: 0,
  timeStart: 0,
  videoId: '',

  setTimeEnd: (timeEnd) => set(() => ({ timeEnd })),
  setTimeStart: (timeStart) => set(() => ({ timeStart })),
  setVideoId: (videoId) => set(() => ({ videoId })),
}));
