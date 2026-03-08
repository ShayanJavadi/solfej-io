
export default (first, second, key) => {
  if (first, second, key) {
    let merged = [];
    for (let i = 0; i < first.length; i++) {
      merged.push({
        ...first[i],
        ...(second.find(item => item[key] === first[i][key]))
      });
    }

    return merged;
  }
};