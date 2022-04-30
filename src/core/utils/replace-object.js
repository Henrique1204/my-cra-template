const replaceKeybyKey = (primary = {}, secondary = {}) => {
  const primaryKeys = Object.keys(primary);
  const secondaryKeys = Object.keys(secondary);

  const keys = Array.from(new Set([...primaryKeys, ...secondaryKeys]));

  const newObject = keys.reduce((acc, key) => {
    const primaryValue = primary[key];
    const secondaryValue = secondary[key];

    const isArray =
      Array.isArray(primaryValue) || Array.isArray(secondaryValue);

    if (
      typeof primaryValue === "object" &&
      primaryValue !== undefined &&
      !isArray
    ) {
      return { ...acc, [key]: replaceKeybyKey(primaryValue, secondaryValue) };
    }

    return { ...acc, [key]: secondaryValue || primaryValue };
  }, {});

  return newObject;
};

const replaceObject = (primary, secondary, removeKeys = []) => {
  const primaryClean = Object.keys(primary)
    .filter((key) => !removeKeys.includes(key))
    .reduce((acc, key) => {
      return { ...acc, [key]: primary[key] };
    }, {});

  return { ...primaryClean, ...replaceKeybyKey(primaryClean, secondary) };
};

module.exports = replaceObject;
