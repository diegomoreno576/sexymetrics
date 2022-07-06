import types from '../actions/types';

const setTheme = (payload) => ({
  type: types.SET_THEME,
  payload,
});
const setLoading = (payload) => ({
  type: types.SET_LOADING,
  payload,
});
const setFbDatos = (payload) => ({
  type: types.SET_FBDATOS,
  payload,
});
const setTimeStart = (payload) => ({
  type: types.SET_TIMESTART,
  payload,
});
const setTimeEnd = (payload) => ({
  type: types.SET_TIMEEND,
  payload,
});
const setTimeStartPast = (payload) => ({
  type: types.SET_TIMESTARTPAST,
  payload,
});
const setTimeEndPast = (payload) => ({
  type: types.SET_TIMEENDPAST,
  payload,
});


export { setTheme, setLoading, setFbDatos, setTimeStart, setTimeEnd, setTimeStartPast, setTimeEndPast};
