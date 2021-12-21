const normalize = name => {
  if (typeof name !== 'string') {
    return ''
  }

  return name
    .normalize('NFKD')
    .toLowerCase()
    .replace(/\p{Diacritic}/gu, '')
}

module.exports = normalize
