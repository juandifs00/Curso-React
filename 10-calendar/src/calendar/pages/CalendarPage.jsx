import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours, format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

import { NavBar } from "../";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Board Meeting",
    notes: "Discuss quarterly results and future strategies.",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "John Doe",
    },
  },
  {
    title: "Team Lunch",
    notes: "Lunch with the team at the new restaurant.",
    start: addHours(new Date(), 3),
    end: addHours(new Date(), 4),
    bgColor: "#fafafa",
    user: {
      _id: "456",
      name: "Jane Smith",
    },
  },
  {
    title: "Project Deadline",
    notes: "Final deadline for the project submission.",
    start: addHours(new Date(), 5),
    end: addHours(new Date(), 6),
    bgColor: "#fafafa",
    user: {
      _id: "789",
      name: "Alice Johnson",
    },
  },
];

export const CalendarPage = () => {
  return (
    <>
      <NavBar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
      />
    </>
  );
};
