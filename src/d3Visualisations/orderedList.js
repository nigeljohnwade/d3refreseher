import * as d3 from 'd3';

export function orderedList(data) {
    const orderedList = d3.create('ol');
    const _localData = [...data];

    orderedList
        .selectAll('li')
        .data(_localData.sort((a,b) => a.value < b.value ? 1 : -1))
        .join('li')
        .text(d => `${d.key} - ${d.value}`);

    return orderedList.node();
}