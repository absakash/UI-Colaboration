import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './components/share/router';

const App = () => {
  return (
    <div>
        <RouterProvider router={router}>

        </RouterProvider>
    </div>
  );
};

export default App;
