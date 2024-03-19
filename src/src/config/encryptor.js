const { createHash } = require("crypto");

class Encrypter {
  static hash(password) {
    return createHash("sha256").update(password).digest("hex");
  }

  static compare(password, hashed) {
    const enteredPasswordHash = Encrypter.hash(password);
    return enteredPasswordHash === hashed;
  }
}

module.exports = Encrypter;
