import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './appStore/store';

function App() {
  return (
    <Provider store={store}>
      {/* <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<FormPage />} />
          <Route path="/update/:id" element={<FormPage />} />
        </Routes>
      </Router> */}

      <Outlet />
   </Provider>
  );
}

export default App;