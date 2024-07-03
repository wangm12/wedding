import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "wedding-ui",
  storage: localStorage,
});

export const themeAtom = atom({
  key: "theme",
  default: "light",
  effects_UNSTABLE: [persistAtom],
});
