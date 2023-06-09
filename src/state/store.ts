import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

//these 4 calls below to dispatch just generate 4 cells in the cell list
store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id: null,
      type: 'code',
    },
  });
  
  store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id: null,
      type: 'text',
    },
  });
  
  store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id: null,
      type: 'code',
    },
  });
  
  store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id: null,
      type: 'text',
    },
  });
  