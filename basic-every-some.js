// #5 Basic: Every Some

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((usr) =>
      goodUsers.some((user) => user.id === usr.id)
    );
  };
}

module.exports = checkUsersValid;
