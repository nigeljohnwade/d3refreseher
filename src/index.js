import './styles/index.css';
import { chart } from './d3Visualisations/columnChart';
import { orderedList } from './d3Visualisations/orderedList';
import { randomiseData } from './utilities/dataUtilities';

const scaleFactor = 10;
const dimensions = 1;

const data = randomiseData(
    scaleFactor,
    Math.round((Math.random() * 5) + 10),
    dimensions,
);

const listVis = orderedList(data);
const columnChart = chart(data);

document.querySelector('#app-d3ChartRoot').appendChild(columnChart);
document.querySelector('#app-d3ListRoot').appendChild(listVis);

function getListener(e) {
    const data = randomiseData(
        scaleFactor,
        Math.round((Math.random() * 5) + 10),
        dimensions,
    );
    listVis
        .selectAll('li')
        .data(data)
        .text(d => d);
}

document.querySelector('#app-randomiseData').addEventListener('click', getListener);

// only register service worker in production build
if (process.env.NODE_ENV === 'production') {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
}