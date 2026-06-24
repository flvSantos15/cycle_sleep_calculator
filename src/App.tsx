import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';
import { TimerProvider } from './context/time.context';

import './styles/main.css';

export function App() {
  return (
    <BrowserRouter>
      <TimerProvider>
        <Router />
      </TimerProvider>
    </BrowserRouter>
  )
}