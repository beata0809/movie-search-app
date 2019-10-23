import { combineReducers} from 'redux';
import { reducer as formReducer}  from 'redux-form';
import selectedMovieReducer from "./reducers/selectedMovie";
const rootReducer = combineReducers({
    form: formReducer,
    selectedMovieReducer
});

export default rootReducer;