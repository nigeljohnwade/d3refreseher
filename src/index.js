import './styles/index.css';
import { columnChart } from './d3Visualisations/columnChart';
import { barChart } from './d3Visualisations/barChart';
import { randomiseData } from './utilities/dataUtilities';
import { lineChart } from './d3Visualisations/lineChart';
import { areaChart } from './d3Visualisations/areaChart';
import { pieChart } from './d3Visualisations/pieChart';

const scaleFactor = 10;
const dimensions = 1;

const data = randomiseData(
    scaleFactor,
    Math.round((Math.random() * 5) + 10),
    dimensions,
);

const columnChart1 = columnChart(data);
const barChart1 = barChart(data);
const lineChart1 = lineChart(data);
const areaChart1 = areaChart(data);
const pieChart1 = pieChart(data);

document.querySelector('#app-d3ColumnChartRoot').appendChild(columnChart1);
document.querySelector('#app-d3BarChartRoot').appendChild(barChart1);
document.querySelector('#app-d3LineChartRoot').appendChild(lineChart1);
document.querySelector('#app-d3AreaChartRoot').appendChild(areaChart1);
document.querySelector('#app-d3PieChartRoot').appendChild(pieChart1);

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