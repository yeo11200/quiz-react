Object.prototype.isEmpty = function(param) {
  return Object.keys(param).length === 0;
}

function serializeObject(param) {
  const isEmpty = Object.isEmpty(param);
  if (isEmpty === false) {
    return {};
  } else {
    return JSON.parse(param);
  }
}