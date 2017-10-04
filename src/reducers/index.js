import {combineReducers} from 'redux';
import taskList from './task-list';

const reducers = combineReducers({
    taskList
});

export default reducers;
