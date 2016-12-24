import { DEFAULT_TEXT } from './../constants';

const initialState = {
  value: DEFAULT_TEXT,
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INPUT': {
      return { value: action.value }
    }
    default:
      return state
  }
}