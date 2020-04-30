export function logThis(thingToLog) {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Logging -');
        console.log(thingToLog);
    }
}

export function dirThis(thingToDir) {
    if (process.env.NODE_ENV !== 'production') {
        if (thingToDir instanceof HTMLElement) {
            console.log(`${typeof thingToDir} of type HTMLElement to dir - `);
        }else if (thingToDir instanceof NodeList) {
            console.log('Table of node attrs -');
            console.table(Array.from(thingToDir).map(node => {
                let classes = '';
                node.classList.forEach((value, index, obj) => {
                    classes += value;
                    if(index + 1 < obj.length){
                        classes += ', ';
                    }
                });
                return ({
                    tag: node.tagName,
                    id: node.id,
                    classes: classes,
                })
            }))
            console.log(`${typeof thingToDir} of type NodeList to dir - `);
        } else {
            console.log(`${typeof thingToDir} to dir - `);
        }
    }
    console.dir(thingToDir);
}