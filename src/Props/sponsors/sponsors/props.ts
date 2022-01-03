import cied from "images/sponsors/tera/cied.png"
import genomics from "images/sponsors/tera/genomics.png"

import baskin from "images/sponsors/giga/baskin.png"
import qb3 from "images/sponsors/giga/qb3.png"

import citris from "images/sponsors/mega/citris.png"
import arts from "images/sponsors/mega/arts.png"
import digitalNest from "images/sponsors/mega/digital-nest.png"
import progress from "images/sponsors/mega/progress.png"

import cross from "images/sponsors/kilo/cross.png"
import scWorks from "images/sponsors/kilo/santa-cruz-works.png"
import ssVentures from "images/sponsors/kilo/south-swell-ventures.png"

export interface SponsorProps {
  image: string
  url: string
  key: string
}

export const kiloSponsors: SponsorProps[] = [
  {
    image: scWorks,
    url: "https://www.santacruzworks.org/",
    key: "scWorks",
  },
  {
    image: ssVentures,
    url: "https://www.linkedin.com/in/bud-colligan-1793022/",
    key: "ssVentures",
  },
  {
    image: cross,
    url: "https://cross.ucsc.edu/2022-osre/osre2022apps.html",
    key: "cross",
  },
]

export const megaSponsors: SponsorProps[] = [
  {
    image: citris,
    url: "https://citris.sites.ucsc.edu/",
    key: "citris",
  },
  {
    image: arts,
    url: "https://arts.ucsc.edu/",
    key: "arts",
  },
  {
    image: digitalNest,
    url: "https://digitalnest.org/",
    key: "digitalNest",
  },
  {
    image: progress,
    url: "https://www.progress.com/",
    key: "progress",
  },
]

export const gigaSponsors: SponsorProps[] = [
  {
    image: qb3,
    url: "https://qb3.soe.ucsc.edu/",
    key: "qb3",
  },
  {
    image: baskin,
    url: "https://engineering.ucsc.edu/",
    key: "baskin",
  },
]

export const teraSponsors: SponsorProps[] = [
  {
    image: cied,
    url: "https://cied.ucsc.edu/",
    key: "cied",
  },
  {
    image: genomics,
    url: "https://genomics.ucsc.edu/",
    key: "genomics",
  },
]
