import { create } from 'zustand';

interface State {
  timeEnd: number;
  timeStart: number;
  videoId: string;
  width: number;

  setTimeEnd: (timeEnd: number) => void;
  setTimeStart: (timeStart: number) => void;
  setVideoId: (videoId: string) => void;
  setWidth: (width: number) => void;
}

export const useStore = create<State>((set) => ({
  timeEnd: 0,
  timeStart: 0,
  videoId: '',
  width: 640,

  setTimeEnd: (timeEnd) => set(() => ({ timeEnd })),
  setTimeStart: (timeStart) => set(() => ({ timeStart })),
  setVideoId: (videoId) => set(() => ({ videoId })),
  setWidth: (width) => set(() => ({ width })),
}));
