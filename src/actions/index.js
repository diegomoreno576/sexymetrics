import types from '../actions/types';

const setTheme = (payload) => ({
  type: types.SET_THEME,
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


export { setTheme, setFbDatos, setTimeStart, setTimeEnd };
