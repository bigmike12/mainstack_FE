import React, { useState } from "react";
import SidebarWrapper from "../sidebarWrapper";
import "./sidebar.scss";
import { Period } from "./sidebarData";
import Icon from "../../../../assets/Icon/icon";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import useClickOutside from "../../../../hooks/useClickOutside";

const CalendarSelector = ({ selectedDay, setSelectedDay, ref }) => {
  return (
    <div className="calendar" ref={ref}>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        colorPrimary="#131316"
        calendarClassName="custom-calendar"
        calendarSelectedDayClassName="custom-selected"
      />
    </div>
  );
};

const FilterInput = ({ handleToggle = () => {} }) => {
  return (
    <div className="filterInput" onClick={() => handleToggle()}>
      <p>17 Jul 2023</p>
      <Icon name="dropdown" />
    </div>
  );
};

const HandleSideBarButton = ({ date }) => {
  const active = date === "All time";
  return (
    <div
      className={active ? "handleSideBarButton-active" : "handleSideBarButton"}
    >
      <p>{date}</p>
    </div>
  );
};

const Sidebar = ({ handleSidebarClose }) => {
  const defaultValue = {
    year: 2023,
    month: 10,
    day: 14,
  };

  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [calendar, setCalendar] = useState(false);

  const node = useClickOutside(() => {
    setCalendar(false);
  });

  const handleCalendarToggle = () => {
    setCalendar((prevState) => !prevState); // Corrected the toggle logic
  };

  return (
    <SidebarWrapper handleSidebarClose={handleSidebarClose}>
      <div className="sidebar">
        <div className="sidebar__period">
          {Period.map((data, index) => (
            <HandleSideBarButton date={data.name} key={index} />
          ))}
        </div>

        <div className="sidebar__date">
          <h2>Date Range</h2>
          <div className="sidebar__date-picker">
            <FilterInput handleToggle={handleCalendarToggle} />
            {/* <FilterInput handleToggle={handleCalendarToggle} /> */}
          </div>
          {calendar ? (
            <CalendarSelector
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              ref={node}
            />
          ) : null}
        </div>

        <div className="sidebar__date">
          <h2>Transaction Type</h2>
          <div className="sidebar__date-picker">{/* <FilterInput /> */}</div>
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
