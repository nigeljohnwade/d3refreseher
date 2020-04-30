import * as d3 from 'd3';

export function orderedList(data) {
    const orderedList = d3.create('ol');

    orderedList
        .selectAll('li')
        .data(data)
        .join('li')
        .text(d => `${d.key} - ${d.value}`);

    return orderedList.node();
}