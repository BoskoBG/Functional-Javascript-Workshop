// #15 Async Loops

function loadUsers(userIds, load, done) {
  var users = [];
  userIds.forEach((id) => {
    load(id, (user) => {
      users = [...users, user];
    });
  });
  done(users);
}

module.exports = loadUsers;
