export interface ScheduleEvent {
  name: string
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
      { name: "Swag Distribution Starts", time: "3:00 PM" },
      { name: "Swag Distribution Ends", time: "5:00 PM" },
      { name: "Event Begins", time: "5:00 PM" },
      { name: "Opening Ceremony", time: "7:00 PM" },
      { name: "Hacking Begins", time: "9:00 PM" },
      { name: "Resume/Cover Letter", time: "10:00 PM" },
      { name: "Equity In Tech", time: "10:30 PM" },
    ],
  },
  {
    date: "Saturday, January 15, 2022",
    events: [
      { name: "Pitching for Hackers", time: "9:00 AM" },
      { name: "Intro to Algorithm / Applications", time: "10:00 AM" },
      { name: "Tech Interviews", time: "" },
      { name: "Swag Distribution Starts", time: "11:00 AM" },
      { name: "Intro to Github", time: "11:00 AM" },
      { name: "What Could Go Wrong", time: "" },
      { name: "Basics of HTML", time: "12:00 PM" },
      { name: "Intro To UI Design → Intro to UI Design", time: "1:00 PM" },
      { name: "Swag Distribution Ends", time: "2:00 PM" },
      { name: "Android Development", time: "2:00 PM" },
      { name: "Intro to Python", time: "3:00 PM" },
      { name: "Intro to IOS development → Intro to React", time: "4:00 PM" },
      { name: "Environmental Innovation Guided Discussion", time: "" },
    ],
  },
  {
    date: "Sunday, January 16, 2022",
    events: [
      { name: "Project Submissions", time: "10:00 AM" },
      { name: "Judging Begins", time: "11:30 AM" },
      { name: "Closing Ceremony", time: "2:00 PM" },
      { name: "End of Event", time: "4:00 PM" },
    ],
  },
]
