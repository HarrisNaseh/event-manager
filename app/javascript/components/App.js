import React from 'react';
import { Route } from 'react-router-dom';
import { Alert } from '../helpers/notifications';
import Editor from './Editor';
import './App.css';

function App() {
  return (
    <div>

      <Route path="/events/:id?" component={Editor} />
      <Alert stack={{ limit: 3 }} />

    </div>
  );
}

export default App;
