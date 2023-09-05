"use client";

import { RecoilRoot, atom } from "recoil";
import { DocumentData } from "firebase/firestore";

export const userDataAtom = atom<{ id: string; data: DocumentData; } | undefined>({
  key: "userData",
  default: {
    id: "",
    data: {}
  },
});

export const projectDataAtom = atom<{
  id: string;
  data: DocumentData;
}[] | undefined>({
    key: "projectData",
    default: []
})

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}