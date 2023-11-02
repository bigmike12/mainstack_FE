import React, { useEffect, useRef, useState } from "react";
import SidebarWrapper from "../sidebarWrapper";
import "./sidebar.scss";
import { Period, TransactionStatusData, TransactionTypes } from "./sidebarData";
import Icon from "../../../../assets/Icon/icon";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import { formatDate, truncateMultilineText } from "../../../../helpers/utils";

const TransactionType = ({ handleChange }) => {
  return (
    <div className="transactionType">
      {TransactionTypes.map((data) => (
        <div className="transactionType__item">
          <input
            type="checkbox"
            id={data.type}
            name={data.type}
            value={data.type}
            onChange={handleChange}
          />
          <label for={data.type}> {data.type}</label>
        </div>
      ))}
    </div>
  );
};

const TransactionStatus = ({ handleChange }) => {
  return (
    <div className="transactionStatus">
      {TransactionStatusData.map((data) => (
        <div className="transactionStatus__item">
          <input
            type="checkbox"
            id={data.type}
            name={data.type}
            value={data.type}
            onChange={handleChange}
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

const CalendarSelectorTwo = ({ selectedDay, setSelectedDay }) => {
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

const FilterDate = ({
  handleToggle = () => {},
  full = false,
  input,
  open = false,
}) => {
  const { year, month, day } = input;
  const date = `${day},${month},${year}`;
  const formatedDate = formatDate(date);

  return (
    <div
      className={!open ? "filterInput" : "filterInput__open"}
      onClick={() => handleToggle()}
    >
      <p>{formatedDate}</p>
      <div>{!open ? <Icon name="dropdown" /> : <Icon name="open" />}</div>
    </div>
  );
};

const FilterInput = ({ handleToggle = () => {}, input, open = false }) => {
  const selectedInput = input.join(", ");
  console.log(selectedInput);

  return (
    <div
      className={!open ? "filterInputfull" : "filterInputfull__open"}
      onClick={() => handleToggle()}
    >
      <p>{truncateMultilineText(selectedInput, 52)}</p>
      <div className="filterInput__full-icon">
        {!open ? <Icon name="dropdown" /> : <Icon name="open" />}
      </div>
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
    month: 7,
    day: 17,
  };
  const defaultValueTwo = {
    year: 2023,
    month: 8,
    day: 17,
  };

  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [selectedDayTwo, setSelectedDaytwo] = useState(defaultValueTwo);
  const [calendar, setCalendar] = useState(false);
  const [calendarTwo, setCalendarTwo] = useState(false);
  const [transactionType, setTransactionType] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(false);
  const [allcheckedTypes, setAllCheckedTypes] = useState([]);
  const [allcheckedStatus, setAllCheckedStatus] = useState([]);

  function handleChange(e) {
    if (e.target.checked) {
      setAllCheckedTypes([...allcheckedTypes, e.target.value]);
    } else {
      setAllCheckedTypes(
        allcheckedTypes.filter((item) => item !== e.target.value)
      );
    }
  }

  function handleChangeStatus(e) {
    if (e.target.checked) {
      setAllCheckedStatus([...allcheckedStatus, e.target.value]);
    } else {
      setAllCheckedStatus(
        allcheckedStatus.filter((item) => item !== e.target.value)
      );
    }
  }

  const handleCalendarToggle = () => {
    setCalendar((prevState) => !prevState);
  };

  const handleCalendarToggleTwo = () => {
    setCalendarTwo((prevState) => !prevState);
  };

  const handleTransactionToggle = () => {
    setTransactionType((prevState) => !prevState);
  };

  const handleTransactionStatusToggle = () => {
    setTransactionStatus((prevState) => !prevState);
  };

  const handleReset = () => {
    setSelectedDay(defaultValue);
    setSelectedDaytwo(defaultValueTwo);
    setCalendar(false);
    setCalendarTwo(false);
    setTransactionType(false);
    setTransactionStatus(false);
    setAllCheckedTypes([]);
    setAllCheckedStatus([]);
  };

  return (
    <SidebarWrapper
      handleSidebarClose={handleSidebarClose}
      handleReset={handleReset}
    >
      <div className="sidebar">
        <div className="sidebar__period">
          {Period.map((data, index) => (
            <HandleSideBarButton date={data.name} key={index} />
          ))}
        </div>

        <div className="sidebar__date">
          <h2>Date Range</h2>
          <div className="sidebar__date-picker">
            <FilterDate
              handleToggle={handleCalendarToggle}
              input={selectedDay}
              open={calendar}
            />
            <FilterDate
              handleToggle={handleCalendarToggleTwo}
              input={selectedDayTwo}
              open={calendarTwo}
            />
          </div>
          {calendar && (
            <div>
              <CalendarSelector
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
              />
            </div>
          )}
          {calendarTwo && (
            <div>
              <CalendarSelectorTwo
                selectedDay={selectedDayTwo}
                setSelectedDay={setSelectedDaytwo}
              />
            </div>
          )}
        </div>

        <div className="sidebar__transaction">
          <h2>Transaction Type</h2>
          <div className="sidebar__transaction-picker">
            <FilterInput
              handleToggle={handleTransactionToggle}
              input={allcheckedTypes}
              open={transactionType}
            />
          </div>
          {transactionType ? (
            <TransactionType handleChange={handleChange} />
          ) : null}
        </div>

        <div className="sidebar__transaction">
          <h2>Transaction Type</h2>
          <div className="sidebar__transaction-picker">
            <FilterInput
              handleToggle={handleTransactionStatusToggle}
              input={allcheckedStatus}
              open={transactionStatus}
            />
          </div>
          {transactionStatus ? (
            <TransactionStatus handleChange={handleChangeStatus} />
          ) : null}
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
