function camelize(str) {
  return str.split('-').map((text, index) => index ? text[0].toUpperCase() + text.slice(1) : text).join('');
}
