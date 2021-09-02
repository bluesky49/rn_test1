import { createStore, combineReducers, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { usersReducer } from './reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['users']
};

const rootReducer = combineReducers({
    usersReducer: persistReducer(persistConfig, usersReducer)
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
