class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }
  hasAccess() {
    return this.username === "mmarin";
  }
}

const users = [new User("1", "mmarin"), new User("2", "alecs")];

/* 
  Search User in DB to log in. We have to check...
  1. If the user do exist or not.
  2. In case it exists, check if the user has access.

  If the user doesn't exist, we would want to give it a name like 'Guest' 
  and check in so many parts of the code if the user is a guest.

*/
const getUserById = (id) => users.find((user) => user.id === id);
const printUser = (id) => {
  const user = getUserById(id);

  let name = "Guest";
  if (user != null && user.username != null) name = user.username;
  console.log(`Checking ${name} ... Please wait.`);

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log(`Welcome ${user.username}`);
  } else {
    console.log("You don't have access!");
  }
};

printUser("1");
printUser("2");
printUser("3");

/* 
  With the NullObject pattern we can create a Default 'Guest' UserObject
  to be used across the code, saving a lot of if statements.

  If the user does not exist, we create a new NullUser with a default data.
  So we have an actual object to play with, even if it is not in the DB.
  Just need to check if the user has access or not
*/

class NullUser {
  constructor() {
    this.id = -1;
    this.username = "Guest";
  }
  hasAccess() {
    return false;
  }
}

const getUserByIdFix = (id) => {
  const user = users.find((user) => user.id === id);
  if (!user) return new NullUser();
  return user;
};

const printUserFix = (id) => {
  const user = getUserByIdFix(id);

  console.log(`Checking ${user.username} ... Please wait.`);

  if (user.hasAccess()) {
    console.log(`Welcome ${user.username}`);
  } else {
    console.log("You don't have access!");
  }
};

printUserFix("1");
printUserFix("2");
printUserFix("3");
