const replaceKeybyKey = (primary = {}, secondary = {}) => {
    const keys = Object.keys(primary);

    const newObject = keys.reduce((acc, key) => {
        const value = primary[key]; 

        if (typeof value === 'object') {
            return { ...acc, [key]: replaceKeybyKey(primary[key], secondary[key]) };
        }
        
        return { ...acc, [key]: secondary[key] || primary[key] };
    }, {});

    return newObject;
};

const replaceObject = (primary, secondary) => {
    return { ...primary, ...replaceKeybyKey(primary, secondary) };
}

module.exports = replaceObject;