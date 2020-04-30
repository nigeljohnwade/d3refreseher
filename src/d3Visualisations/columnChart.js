import * as d3 from 'd3';

export function chart(data, width, height, color) {
    const margin = {top: 30, right: 0, bottom: 30, left: 40};

    const x = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.right])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d)]).nice()
        .range([height - margin.bottom, margin.top]);

    const svg = d3.create('svg')
        .attr('viewBox', [0, 0, width, height]);

    svg.append('g')
        .attr('fill', color)
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('x', (d, i) => x(i))
        .attr('y', d => y(d))
        .attr('height', d => y(0) - y(d))
        .attr('width', x.bandwidth());

    // svg.append("g")
    //     .call(xAxis);
    //
    // svg.append("g")
    //     .call(yAxis);

    return svg.node();
}