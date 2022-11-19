import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context';
import { setLoading } from '../actions';
import { APP_URL } from '../constants';
import { useParams } from 'react-router-dom';



const useData = (API_URL, START, END) => {
  let { brand_id } = useParams();

  const [state, dispatch] = useContext(ThemeContext);
  const { start } = state;
  const { end } = state;
  const [data, setData] = useState([]);
  useEffect(() => {
   dispatch(setLoading(true));
    fetch(`${APP_URL}/api/v1/${API_URL}?brand_id=${brand_id}&from=${START}&to=${END}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        dispatch(setLoading(false));
      }
      )
      .catch((err) => {
        console.log(err);
        dispatch(setLoading(false));
      }
      );

   
  
  }, [START, END, state.brand_id]);
  return data;
};

export default useData;


