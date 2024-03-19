import { createRoot } from 'react-dom/client';

import App from './components/App';
import reportWebVitals from './utils/reportWebVitals';

import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);

reportWebVitals(({ name, delta, entries, id, value }) => {
    console.groupCollapsed(
        `%cVITALS::${name}`,
        'color: lightgray; font-size: 10px'
    );
    console.info('delta', delta);
    console.info('entries', entries);
    console.info('id', id);
    console.info('value', value);
    console.groupEnd();
});
