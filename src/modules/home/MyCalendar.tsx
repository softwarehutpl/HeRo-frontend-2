import React from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import eventsList from "./eventsList";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = () => (
  <div className="myCustomHeight">
    <Calendar
      localizer={localizer}
      events={eventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 600 }}
    />
  </div>
);

export default MyCalendar;
