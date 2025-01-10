import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import './app/style/index.scss';

const root = createRoot(document.getElementById('app'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
