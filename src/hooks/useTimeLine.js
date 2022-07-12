import React, { useContext } from "react";
import useData from './useData';
import { ThemeContext } from "../context";

const useTimeLine = (URL) => {
    const [state, dispatch] = useContext(ThemeContext);
    const start = state.TimeStart;
    const end = state.TimeEnd;

    const fbLikes = useData(`/stats/timeline/facebookLikes`, start, end);
    const TimeLine = fbLikes.map(([key, value]) => {
    
        return +key;
    
      });
  
  //Posts

  const fbPostss = URL.map(([key, value]) => {
    return  [+key, +value]
   });


// Count Posts
  const allFbPost = TimeLine.map(item => {
   let post = fbPostss.find(x => x[0] === item)
   let countPost = (post ? post : [ item, 0])
  return countPost
  }) 
  
  const data = allFbPost.map((d) => {
    return parseInt(+d[1]);
  });
  
  return data
}

export default useTimeLine