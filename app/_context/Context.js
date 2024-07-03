import { createContext } from "react";

export const VisibleContext = createContext({
  visible: {
    nowPlaying: false,
    queue: false,
    devices: false,
  },
  setVisible: () => {},
});
