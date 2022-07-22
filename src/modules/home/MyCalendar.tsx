import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import eventsList from './eventsList';

const localizer = momentLocalizer(moment);

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
