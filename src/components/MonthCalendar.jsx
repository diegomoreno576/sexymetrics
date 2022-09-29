import React, { useContext, useEffect} from 'react';
import { DateRangePicker } from 'rsuite';
import { ThemeContext } from '../context';
import { setLoading, setTimeStart } from '../actions';
import { setTimeEnd } from '../actions';
import { setTimeStartPast } from '../actions';
import { setTimeEndPast } from '../actions';
import { startOfDay, endOfDay, addDays, subDays } from 'date-fns';
import 'rsuite/dist/rsuite.min.css';
import "../assets/styles/components/MonthCalendar.css";
import { LayoutContext } from '../context/layoutContext';

const MonthCalendar = () => {
  const [stateLayout, dispatchLayout] = useContext(LayoutContext);
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
    dispatch(setLoading(true));
  }, [value]); 
  const Ranges = [
  
    {
      label: 'Últimos 7 días',
      value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())]
    },
    {
      label: 'Últimos 15 días',
      value: [startOfDay(subDays(new Date(), 15)), endOfDay(new Date())]
    },
    {
      label: 'Últimos 30 días',
      value: [startOfDay(subDays(new Date(), 29)), endOfDay(new Date())]
    }
  ];
  if(stateLayout.changeLayout == true){
  
    return (
     <div>
      <div className="monthpickerTime">
      <span>1 Sep 2022  -  29 Oct 2022</span>
      </div>
       <DateRangePicker
       className='MonthCalendar'  
       editable={false}
       cleanable={false}
       container={document.querySelector(".sidebarElements")}
       block={true}
        ranges={Ranges}
        format="dd-MM-yyyy" 
        value={value} 
       open={true}
        onChange={setValue} />
     </div>
    )
  }

  
}

export default MonthCalendar


