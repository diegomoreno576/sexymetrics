import React, { useContext, useEffect} from 'react';
import { DateRangePicker } from 'rsuite';
import { ThemeContext } from '../context';
import { setTimeStart } from '../actions';
import { setTimeEnd } from '../actions';
import { setTimeStartPast } from '../actions';
import { setTimeEndPast } from '../actions';
import { startOfDay, endOfDay, addDays, subDays } from 'date-fns';
import 'rsuite/dist/rsuite.min.css';
import "../assets/styles/components/MonthCalendar.css";

const MonthCalendar = () => {
  const [state, dispatch] = useContext(ThemeContext);

  let date = new Date();
  const startInitial = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-01');

  const [value, setValue] = React.useState([new Date(startInitial), new Date()]);

  const start = String(value[0].getFullYear() + String(value[0].getMonth() + 1).padStart(2, '0') + String(value[0].getDate()).padStart(2, '0'));
  const end = String(value[1].getFullYear() + String(value[1].getMonth() + 1).padStart(2, '0') + String(value[1].getDate()).padStart(2, '0'));

  const startPast = String(value[1].getFullYear() + String(value[1].getMonth()).padStart(2, '0') + String(value[1].getDate()).padStart(2, '0'));
  const endPast = String(value[0].getFullYear() + String(value[0].getMonth()).padStart(2, '0') + String(value[0].getDate()).padStart(2, '0'));

  useEffect( () => {
    dispatch(setTimeStart(start));
    dispatch(setTimeEnd(end));
    dispatch(setTimeStartPast(startPast));
    dispatch(setTimeEndPast(endPast));
  }, [value]); 

  const Ranges = [
  
    {
      label: 'Últimos 7 días',
      value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())]
    },
    {
      label: 'Últimos 14 días',
      value: [startOfDay(subDays(new Date(), 14)), endOfDay(new Date())]
    },
    {
      label: 'Últimos 30 días',
      value: [startOfDay(subDays(new Date(), 29)), endOfDay(new Date())]
    }
  ];


  return (
    <DateRangePicker ranges={Ranges} size="lg" format="dd-MM-yyyy" value={value} onChange={setValue} />
  )
}

export default MonthCalendar