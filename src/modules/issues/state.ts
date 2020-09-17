import { atom } from "recoil";

export enum Lanes {
  "upcoming" = "upcoming",
  "ideation" = "ideation",
  "proposals" = "proposals",
  "decissions" = "decissions",
}

export const issues = atom({
  key: "issues", // unique ID (with respect to other atoms/selectors)
  default: [], //
});

export const activeIssueLane = atom({
  key: "activeIssueLane",
  default: Lanes.upcoming,
});
