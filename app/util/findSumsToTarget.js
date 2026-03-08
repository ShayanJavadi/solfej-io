export default (arr, target, count) => {
  let result = [];
  function recurse(start, leftOver, selection) {
    if (leftOver < 0) {return;} // failure
    if (leftOver === 0 && selection.length == count) {
      result.push(selection); // add solution
      return;
    }
    for (let i = start; i < arr.length; i++) {
      recurse(i, leftOver - arr[i], selection.concat(arr[i]));
    }
  }
  recurse(0, target, []);
  return result;
};