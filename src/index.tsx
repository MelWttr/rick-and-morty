import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './style/index.scss';

const root = createRoot(document.getElementById('app'));

root.render(<App />);
