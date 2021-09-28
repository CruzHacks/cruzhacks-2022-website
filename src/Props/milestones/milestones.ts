import hackers from "assets/milestones/milestones_hackers.svg"
import attendees from "assets/milestones/milestones_attendees.svg"
import projects from "assets/milestones/milestones_projects.svg"
import schools from "assets/milestones/milestones_schools.svg"

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
  },
  {
    image: schools,
    milestoneName: "Schools and Universities",
    milestoneStat: "180+",
    id: "schools",
  },
]

export default milestoneResults
