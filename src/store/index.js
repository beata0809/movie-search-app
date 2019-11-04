import { combineReducers} from 'redux';
import { reducer as formReducer}  from 'redux-form';
import selectedMoviesReducer from "./reducers/selectedMovies";
import singleMovieReducer from './reducers/singleMovie';

const rootReducer = combineReducers({
    form: formReducer,
    searchMovie: selectedMoviesReducer,
    singleMovie: singleMovieReducer
});

export default rootReducer;