export const randomiseData = (
    scaleFactor,
    count,
    dimensions,
) => {
    const returnData = [];

    const getDatum = (key) => {
        return {
            value: Math.round(Math.random() * scaleFactor),
            key: key,
        };
    };

    for (let i = 0; i < count; i++) {
        if (dimensions > 1) {
            const _tmp = [];
            for (let j = 0; j < dimensions; j++) {
                _tmp.push(getDatum(`${i}-${j}`));
            }
            returnData.push(_tmp);
        } else {
            returnData.push(getDatum(`${i}`));
        }
    }
    ;
    return returnData;
};