import hackers from "images/milestones/milestones_hackers.svg"
import attendees from "images/milestones/milestones_attendees.svg"
import projects from "images/milestones/milestones_projects.svg"
import schools from "images/milestones/milestones_schools.svg"

import { MilestoneProps } from "Props/props"

const milestoneResults: MilestoneProps[] = [
  {
    image: hackers,
    milestoneName: "countries",
    milestoneStat: "15+",
    id: "countries",
  },
  {
    image: attendees,
    milestoneName: "attendees",
    milestoneStat: "400+",
    id: "attendees",
  },
  {
    image: projects,
    milestoneName: "prizes",
    milestoneStat: "$35k+",
    id: "prizes",
  },
  {
    image: schools,
    milestoneName: "schools",
    milestoneStat: "90+",
    id: "schools",
  },
]

export default milestoneResults
