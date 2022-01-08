import hackers from "images/milestones/milestones_hackers.svg"
import attendees from "images/milestones/milestones_attendees.svg"
import projects from "images/milestones/milestones_projects.svg"
import schools from "images/milestones/milestones_schools.svg"

import { MilestoneProps } from "Props/props"

const milestoneResults: MilestoneProps[] = [
  {
    image: hackers,
    milestoneName: "first time hackers",
    milestoneStat: "77%",
    id: "hackers",
  },
  {
    image: attendees,
    milestoneName: "attendees",
    milestoneStat: "450+",
    id: "attendees",
  },
  {
    image: projects,
    milestoneName: "Projects",
    milestoneStat: "35+",
    id: "projects",
    hasModal: true,
  },
  {
    image: schools,
    milestoneName: "Schools and Universities",
    milestoneStat: "180+",
    id: "schools",
  },
]

export default milestoneResults
