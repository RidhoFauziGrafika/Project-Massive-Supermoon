const urlPattern =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

function isUrl(url) {
  const checksUrl = urlPattern.test(url);
  return checksUrl;
}

module.exports = isUrl;
