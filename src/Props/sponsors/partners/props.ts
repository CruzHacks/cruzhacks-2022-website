import axure from "images/sponsors/partners/axure.png"
import balsamiq from "images/sponsors/partners/balsamiq.png"
import earthhacks from "images/sponsors/partners/earthhacks.png"
import echo3D from "images/sponsors/partners/echo-3D.png"
import googleCloud from "images/sponsors/partners/google-cloud.png"
import mlh from "images/sponsors/partners/mlh.png"
import stickermule from "images/sponsors/partners/sticker-mule.png"
import wolfram from "images/sponsors/partners/wolfram.png"
import woodstocks from "images/sponsors/partners/woodstocks.png"

export interface PartnerProps {
  image: string
  url: string
  key: string
}

export const row1: PartnerProps[] = [
  {
    image: mlh,
    url: "https://mlh.io/",
    key: "mlh",
  },
  {
    image: woodstocks,
    url: "https://woodstockscruz.com/",
    key: "woodstocks",
  },
  {
    image: googleCloud,
    url: "https://cloud.google.com/",
    key: "googleCloud",
  },
]

export const row2: PartnerProps[] = [
  {
    image: axure,
    url: "https://www.axure.com/",
    key: "axure",
  },
  {
    image: balsamiq,
    url: "https://balsamiq.com/",
    key: "balsamiq",
  },
  {
    image: wolfram,
    url: "https://www.wolfram.com/",
    key: "wolfram",
  },
]

export const row3: PartnerProps[] = [
  {
    image: echo3D,
    url: "https://www.echo3d.co/",
    key: "echo3D",
  },
  {
    image: earthhacks,
    url: "https://earthhacks.io/",
    key: "earthhacks",
  },
  {
    image: stickermule,
    url: "http://hackp.ac/mlh-stickermule-hackathons",
    key: "stickermule",
  },
]
