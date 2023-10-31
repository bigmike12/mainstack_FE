import React, { useEffect, useRef, useState } from "react";
import SidebarWrapper from "../sidebarWrapper";
import "./sidebar.scss";
import { Period, TransactionTypes } from "./sidebarData";
import Icon from "../../../../assets/Icon/icon";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";

const TransactionType = () => {
  return (
    <div className="transactionType">
      {TransactionTypes.map((data) => (
        <div className="transactionType__item">
          <input
            type="checkbox"
            id={data.type}
            name={data.type}
            value={data.type}
          />
          <label for={data.type}> {data.type}</label>
        </div>
      ))}
    </div>
  );
};

const CalendarSelector = ({ selectedDay, setSelectedDay }) => {
  return (
    <div className="calendar">
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

const FilterInput = ({ handleToggle = () => {}, full = false }) => {
  return (
    <div
      className={!full ? "filterInput" : "filterInput__full"}
      onClick={() => handleToggle()}
    >
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
  const [transactionType, setTransactionType] = useState(false);

  const handleCalendarToggle = () => {
    setCalendar((prevState) => !prevState);
  };

  const handleTransactionToggle = () => {
    setTransactionType((prevState) => !prevState);
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
            <FilterInput handleToggle={handleCalendarToggle} />
          </div>
          {calendar ? (
            <div>
              <CalendarSelector
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
              />
            </div>
          ) : null}
        </div>

        <div className="sidebar__transaction">
          <h2>Transaction Type</h2>
          <div className="sidebar__transaction-picker">
            <FilterInput full handleToggle={handleTransactionToggle} />
          </div>
          {transactionType ? <TransactionType /> : null}
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
