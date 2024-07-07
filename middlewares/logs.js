function userCredentials(req, res, next) {
  console.log("username: (alex)");
  console.log("email: (alex21@gamil.com");
  console.log("password: (alex222333)");
  console.log("age: (18)");
  next();
}

export default userCredentials;