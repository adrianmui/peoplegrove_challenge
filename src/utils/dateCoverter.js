function DateConverter() {
  let stub = {};

  stub.isDayOld = function(date) {
    let curr = new Date(date);
    let yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));

    /** true if it is less than a day */
    return (curr.getTime() > yesterday.getTime())
  }

  stub.prettyPrint = function(date) {
    let dt = new Date(date);
    // return `${dt.getDate()}.${dt.getMonth()+1}.${dt.getFullYear()}`
    return (stub.isDayOld(date)) ? `TODAY` : `BEFORE TODAY`;
  }
  
  return stub;
}

module.exports = DateConverter;