const nameFormat = (name: string) => {
  return name
    .split(',')
    .reverse()
    .join(' ')
    .replaceAll(',', '')
    .replace(' ', '')
}

export default nameFormat
