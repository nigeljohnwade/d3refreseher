import * as d3 from 'd3';

export function areaChart(
    data,
    width = 500,
    height = 300,
    color = 'cadetblue',
    margin = {top: 30, right: 0, bottom: 30, left: 40},
    curve = 'curveLinear'
) {
    const x = d3.scaleLinear()
        .domain([0, data.length])
        .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

    const xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(null, data.format));

    const yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(null, data.format))
        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(data.y));

    const area = d3.area()
        .curve(d3[curve])
        .x(d => x(d.key))
        .y0(y(0))
        .y1(d => y(d.value))

    const svg = d3.create('svg')
        .attr('viewBox', [0, 0, width, height]);

    svg.append("path")
        .datum(data)
        .attr("fill", color)
        .attr("d", area);

    svg.append("g")
        .call(xAxis);

    svg.append("g")
        .call(yAxis);

    return svg.node();
}