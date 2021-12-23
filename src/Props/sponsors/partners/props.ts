import axure from "images/sponsors/partners/axure.svg"
import balsamiq from "images/sponsors/partners/balsamiq.svg"
import earthhacks from "images/sponsors/partners/earthhacks.svg"
import echo3D from "images/sponsors/partners/echo-3D.svg"
import googleCloud from "images/sponsors/partners/google-cloud.svg"
import mlh from "images/sponsors/partners/mlh.svg"
import stickermule from "images/sponsors/partners/sticker-mule.svg"
import wolfram from "images/sponsors/partners/wolfram.svg"
import woodstocks from "images/sponsors/partners/woodstocks.svg"

export interface PartnerProps {
  image: any
  url: string
  key: string
}

export const row1: PartnerProps[] = [
  {
    image: mlh,
    url: "",
    key: "mlh",
  },
  {
    image: woodstocks,
    url: "",
    key: "woodstocks",
  },
  {
    image: googleCloud,
    url: "",
    key: "googleCloud",
  },
]

export const row2: PartnerProps[] = [
  {
    image: axure,
    url: "",
    key: "axure",
  },
  {
    image: balsamiq,
    url: "",
    key: "balsamiq",
  },
  {
    image: wolfram,
    url: "",
    key: "wolfram",
  },
]

export const row3: PartnerProps[] = [
  {
    image: echo3D,
    url: "",
    key: "echo3D",
  },
  {
    image: earthhacks,
    url: "",
    key: "earthhacks",
  },
  {
    image: stickermule,
    url: "",
    key: "stickermule",
  },
]
