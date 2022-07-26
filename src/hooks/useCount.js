
const useCount = (URL) => {
    const AllPost = URL.map(([key, value]) => {
        return +value;
      });
    const totalPost = AllPost.reduce((acc, curr) => acc + curr, 0);

    return parseInt(totalPost);
}

export default useCount