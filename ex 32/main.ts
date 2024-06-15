//Array of current users
let current_users = ["Admin", "Kazim", "Bilal", "Ali", "Adil"];

//Array of new users
let new_users = ["Aamna",  "Kanwal", "Bilal", "Nabeel", "Ali"];

// Loop through new_users to check for usernames availability

new_users.forEach((new_one_user) => {
  let our_condition = current_users.some(
    (current_one_user) =>
      current_one_user.toLowerCase() === new_one_user.toLowerCase()
  );

  // If username is available, print a message
  // else print a message that the username is not available
  if (our_condition) {
    console.log(
      `\n Sorry, the username "${new_one_user}" is already taken. Please enter a new username.`
    );
  } else {
    console.log(`\n The username "${new_one_user}" is available.`);
  }
});