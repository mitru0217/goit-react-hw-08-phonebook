import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './Contacts/sliceContacts';
import { authReducer } from 'redux/Auth/sliceAuth';
import { filterReducer } from './Filter/sliceFilter';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const persistedReducer = persistReducer(persistConfig, contactsReducer);
// const persistedReducer = persistReducer(authPersistConfig, authReducer);
const persistedReducer = persistReducer(authPersistConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
