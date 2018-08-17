import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  console.log('Active Reducer', action)
  switch(action.type) {
  case FETCH_WEATHER:
    //return state.concat([ action.payload.data ]) //concat isto kao push samo on ne brise stari array nego dodaje u isti nove
    // u novom ES6 mozemo pisati ovako
    return [ action.payload.data, ...state ] // [ city, city, city ]
  }
  return state
}
