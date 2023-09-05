"use client";

import { RecoilRoot, atom } from "recoil";
export const userData = atom({
  key: "userData",
  default: {},
});

export const projectData = atom({
    key: "projectData",
    default: []
})

export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}