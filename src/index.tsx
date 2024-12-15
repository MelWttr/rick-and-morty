import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './style/index.scss';

const root = createRoot(document.getElementById('app'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
