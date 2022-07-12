import React from 'react'

const useCount = (URL) => {
    const AllPost = URL.map(([key, value]) => {
        return +value;
      });
    const totalPost = AllPost.reduce((acc, curr) => acc + curr, 0);

    return totalPost;
}

export default useCount