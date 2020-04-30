export const randomiseData = (scaleFactor, count, dimensions) => {
    const returnData = [];
    for (let i = 0; i < count; i++) {
        if (dimensions > 1) {
            const _tmp = [];
            for (let j = 0; j < dimensions; j++) {
                _tmp.push(Math.round(Math.random() * scaleFactor));
            }
            returnData.push(_tmp);
        } else {
            returnData.push(Math.round(Math.random() * scaleFactor));
        }
    }
    ;
    return returnData;
};