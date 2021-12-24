export interface ScheduleEvent {
  event: string
  time: string
}

export interface ScheduleDate {
  date: string
  events: ScheduleEvent[]
}

export const schedule: ScheduleDate[] = [
  {
    date: "Friday, January 14, 2022",
    events: [
      { event: "Event Begins", time: "5:00 PM" },
      { event: "Opening Ceremony", time: "7:00 PM" },
      { event: "Hacking Begins", time: "9:00 PM" },
      { event: "Resume/Cover Letter", time: "10:00 PM" },
      { event: "Equity In Tech", time: "10:30 PM" },
    ],
  },
  {
    date: "Saturday, January 15, 2022",
    events: [
      { event: "Intro to Algorithm / Applications", time: "10:00 AM" },
      { event: "Tech Interviews", time: "" },
      { event: "Intro to Github", time: "11:00 AM" },
      { event: "What Could Go Wrong", time: "" },
      { event: "Basics of HTML", time: "12:00 PM" },
      { event: "Intro To UI Design", time: "1:00 PM" },
      { event: "Android Development", time: "2:00 PM" },
      { event: "Intro to Python", time: "3:00 PM" },
      { event: "iOS Development", time: "4:00 PM" },
      { event: "Environmental Innovation Guided Discussion", time: "" },
    ],
  },
  {
    date: "Sunday, January 16, 2022",
    events: [
      { event: "Project Submissions", time: "10:00 AM" },
      { event: "Judging Begins", time: "11:30 AM" },
      { event: "Closing Ceremony", time: "2:00 PM" },
      { event: "End of Event", time: "4:00 PM" },
    ],
  },
]
