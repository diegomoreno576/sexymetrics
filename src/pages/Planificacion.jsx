import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CustomTuiCalendar from "../components/calendar/CustomTuiCalendar";
import useData from "../hooks/useData";
import Spinner from 'react-bootstrap/Spinner';

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 60));


const colors = [
  {
    id: "1",
    color: "#ffffff",
    bgColor: "#1dbc61",
    dragBgColor: "#1dbc61",
    borderColor: "#1dbc61"
  },
  {
    id: "2",
    color: "#ffffff",
    bgColor: "#cf0000",
    dragBgColor: "#cf0000",
    borderColor: "#cf0000"
  },
 
];



const starte = '2022-01-01T23:59:59';
const ende = '2022-12-30T23:59:59';
export default function Planificacion() {

  const schedules2 = useData(
    `/v2/scheduler/posts`,
    starte , ende
   );

   const calendars = [
    {
      id: "1",
      name: "Publicado"
    },
    {
      id: "2",
      name: "Borrador"
    },

  ];
  

  let schedules = schedules2.data?.map(item => (
    {
    id: item.id,
    borderColor: (item.providers[0].status == 'PUBLISHED' ? '#1dbc61' : '#cf0000'),
    title: item.text,
    body: "<p>"+ item.text +"</p>",
    calendarId: (item.providers[0].status == 'PUBLISHED' ? '1' : '2'),
    category: "time",
    isVisible: true,
    start: item.publicationDate.dateTime,
    raw: [{mediaUrl:item.media?.[0],redes: item.providers}]
   }));
  
  const childRef = useRef();


  const formatCalendars = calendars.map((element) => ({
    ...colors.find((element2) => element2.id === element.id),
    ...element
  }));

  if(schedules){

 
  return (
    <div className="container">
     
      <CustomTuiCalendar
        ref={childRef}
        {...{
          isReadOnly: true,
          showSlidebar: true,
          showMenu: true,
          useCreationPopup: false,
          calendars: formatCalendars,
          schedules,
        }}
      />
    </div>
  );
}else{
  return (
    <div
    className="Calendar loading loadingButton"
  >
        <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
    </div>
  )
}
} 