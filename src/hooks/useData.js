import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context';
import { setLoading } from '../actions';

const useData = (API_URL, START, END) => {
  const [state, dispatch] = useContext(ThemeContext);
  const [Data, setData] = useState([]);
  const blog_id = state.blog_id.code
 


  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASEURL}${API_URL}?${process.env.REACT_APP_USERTOKEN}&blogId=${blog_id}&start=${START}&end=${END}&${process.env.REACT_APP_USERID}&${process.env.REACT_APP_USUARIO}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
      
      dispatch(setLoading(false));

  }, [state.TimeStart, state.TimeEnd]);
  return Data;
};

export default useData;
