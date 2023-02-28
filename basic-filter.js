// #4 Basic: Filter

function getShortMessages(messages) {
  return messages
    .map((messages) => messages.message)
    .filter((msg) => msg.length < 50);
}

module.exports = getShortMessages;
