import * as d3 from 'd3';

export function orderedList(data) {
    const orderedList = d3.create('ol');

    orderedList
        .selectAll('li')
        .data(data)
        .enter()
        .append('li')
        .text(d => d)
        .exit()
        .remove();

    return orderedList.node();
}