import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import MainNav from './src/navigation/mainNav';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNav />
      </PersistGate>
    </Provider>
  );
};

export default App;
