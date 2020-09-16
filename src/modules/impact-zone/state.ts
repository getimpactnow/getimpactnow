import { atom, selector } from "recoil";

enum Zones {
  region = "region",
  state = "state",
  nation = "nation",
  union = "union",
}

const HEADER_SPACING = 3;

export const impactZones = [
  {
    zone: Zones.union,
    size: 500,
    color: "sky.900",
    top: `${1 + HEADER_SPACING}rem`,
    title: "EU",
  },
  {
    zone: Zones.nation,
    size: 400,
    color: "pink.900",
    top: `${2 + HEADER_SPACING}rem`,
    title: "Germany",
  },
  {
    zone: Zones.state,
    size: 300,
    color: "cobalt.900",
    top: `${3 + HEADER_SPACING}rem`,
    title: "Hamburg",
  },
  {
    zone: Zones.region,
    size: 200,
    color: "lilac.900",
    top: `${4 + HEADER_SPACING}rem`,
    title: "St.Georg",
  },
];

export const activeZoneId = atom({
  key: "activeZoneId", // unique ID (with respect to other atoms/selectors)
  default: "", //
});

export const activeZone = selector({
  key: "activeZone", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const id = get(activeZoneId);
    return impactZones.find((zone) => zone.zone === id);
  },
});
