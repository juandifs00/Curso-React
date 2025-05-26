import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { NavBar } from "../";
import { localizer, getMessagesES } from "../../helpers";

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
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({ event, start, end, isSelected });

    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };

  return (
    <>
      <NavBar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};
