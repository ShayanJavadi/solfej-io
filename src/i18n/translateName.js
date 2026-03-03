function translateName(displayName, name, rootNote, nameMap) {
  if (!nameMap || !nameMap[name]) return displayName
  return rootNote + " " + nameMap[name]
}

module.exports = { translateName }
