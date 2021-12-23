import cied from "images/sponsors/tera/cied.svg"
import genomics from "images/sponsors/tera/genomics.svg"

import baskin from "images/sponsors/giga/baskin.svg"
import qb3 from "images/sponsors/giga/qb3.svg"

import citris from "images/sponsors/mega/citris.svg"
import arts from "images/sponsors/mega/arts.svg"
import digitalNest from "images/sponsors/mega/digital-nest.svg"
import progress from "images/sponsors/mega/progress.svg"

import cross from "images/sponsors/kilo/cross.svg"
import scWorks from "images/sponsors/kilo/santa-cruz-works.svg"
import ssVentures from "images/sponsors/kilo/south-swell-ventures.svg"

export interface SponsorProps {
  image: string
  url: string
  key: string
}

export const kiloSponsors: SponsorProps[] = [
  {
    image: scWorks,
    url: "",
    key: "scWorks",
  },
  {
    image: ssVentures,
    url: "",
    key: "ssVentures",
  },
  {
    image: cross,
    url: "",
    key: "cross",
  },
]

export const megaSponsors: SponsorProps[] = [
  {
    image: citris,
    url: "",
    key: "citris",
  },
  {
    image: arts,
    url: "",
    key: "arts",
  },
  {
    image: digitalNest,
    url: "",
    key: "digitalNest",
  },
  {
    image: progress,
    url: "",
    key: "progress",
  },
]

export const gigaSponsors: SponsorProps[] = [
  {
    image: qb3,
    url: "",
    key: "qb3",
  },
  {
    image: baskin,
    url: "",
    key: "baskin",
  },
]

export const teraSponsors: SponsorProps[] = [
  {
    image: cied,
    url: "",
    key: "cied",
  },
  {
    image: genomics,
    url: "",
    key: "genomics",
  },
]
