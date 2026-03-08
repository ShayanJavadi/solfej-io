export default (arrayOfPairs = []) => arrayOfPairs ? ({ 
  values: arrayOfPairs.map(pair => pair.value),
  labels: arrayOfPairs.map(pair => pair.label),
}) : {};
