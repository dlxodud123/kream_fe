import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Main_form from './main/tsx/main_form';

const App: React.FC = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main_form></Main_form>}></Route>
      </Routes>
    </div>
  );
}

export default App;
