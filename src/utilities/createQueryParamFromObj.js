function isDate(string) {
  const timestamp = Date.parse(string);
  return isNaN(string) && !isNaN(timestamp);
}

const createQueryParamFromObj = (obj) => {
  let queryParam = '?';

  for (const param in obj) {
    if (obj[param]) {
      if (isDate(obj[param].toString())) {
        queryParam += `${param}=${encodeURIComponent(
          new Date(obj[param]).toISOString(),
        )}&`;
      } else {
        queryParam += `${param}=${encodeURIComponent(obj[param])}&`;
      }
    }
  }
  return queryParam.slice(0, -1);
};

export default createQueryParamFromObj;
