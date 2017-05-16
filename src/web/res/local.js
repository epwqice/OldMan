import Data from '../../data/data';

const currentLocal = () => (window.sessionStorage && window.sessionStorage.local) ? window.sessionStorage.local : 'zh_CN';

export const getAppRes = (key) => {
  const curLocal = currentLocal();
  const resData = Data.app;

  return resData[key] ? resData[key][curLocal] : key;
}

export const getRes = (cKey, rgKey, rKey, fgKey, key) => {
  const curLocal = currentLocal();

  const resData = Data.data;

  if (resData[cKey]) {
    if (rgKey && resData[cKey][rgKey]) {
      if (rKey && resData[cKey][rgKey][rKey]) {
        if (fgKey && resData[cKey][rgKey][rKey][fgKey]) {
          if (key && resData[cKey][rgKey][rKey][fgKey][key]) {
            return resData[cKey][rgKey][rKey][fgKey][key][curLocal];
          }
          return resData[cKey][rgKey][rKey][fgKey][curLocal];
        } else {
          if (key && resData[cKey][rgKey][rKey][key]) {
            return resData[cKey][rgKey][rKey][key][curLocal];
          }
          return resData[cKey][rgKey][rKey][curLocal];
        }
      }
      return resData[cKey][rgKey][curLocal];
    }
    return resData[cKey][curLocal];
  }

  return cKey;
};

export const getEnum = (key) => {
  const resEnum = Data.enum[key];
  const curLocal = currentLocal();
  const enums = [];
  for (let [key, value] of Object.entries(resEnum)) {
    enums.push({id:key, name: value[curLocal]});
  }
  return enums;
};