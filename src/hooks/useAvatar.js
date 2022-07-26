import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context';
import { setLoading } from '../actions';

const useData = (BLOG_ID) => {
  const [state, dispatch] = useContext(ThemeContext);
  const [Data, setData] = useState([]);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASEURL}/admin/profile?${process.env.REACT_APP_USERTOKEN}&blogId=${BLOG_ID}&${process.env.REACT_APP_USERID}&${process.env.REACT_APP_USUARIO}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
      
      dispatch(setLoading(false));

  }, []);
  return Data;
};

export default useData;
