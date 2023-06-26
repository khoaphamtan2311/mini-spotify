import React, { useState, createContext } from "react";
import Track1 from "../mp3/track_1.mp3";
import Track2 from "../mp3/track_2.mp3";
import Track3 from "../mp3/track_3.mp3";
import Track4 from "../mp3/track_4.mp3";
import Track5 from "../mp3/track_5.mp3";
import Track6 from "../mp3/track_6.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "A Call To The Soul - markotopa",
      file: Track1,
    },
    {
      name: "Leva - Eternity - lemonmusicstudio",
      file: Track2,
    },
    {
      name: "My Universe - Nesterouk",
      file: Track3,
    },
    {
      name: "Reflected Light - SergePavkinMusic",
      file: Track4,
    },
    {
      name: "Summer Walk - Olexy",
      file: Track5,
    },
    {
      name: "Unlock Me - prazkhanal",
      file: Track6,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
