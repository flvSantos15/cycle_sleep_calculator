import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';
import { TimesProvider } from './context/time.context';

import './styles/main.css';

export function App() {
  return (
    <BrowserRouter>
      <TimesProvider>
        <Router />
      </TimesProvider>
    </BrowserRouter>
  )
}