import * as bcrypt from "bcryptjs";

export default class Bcrypt {
  private generateSalt = 10;

  generatePassword = async (pass: string) => {
    const saltRounds = 10;
    const generateHash = await bcrypt
      .genSalt(saltRounds)
      .then((salt) => {
        return bcrypt.hash(pass, salt);
      })
      .then((hash) => hash)
      .catch((err) => console.error(err.message));
    return generateHash;
  };

  comparePassword = async (pass: string, encrypted: string) => {
    const isPasswordEqual = await bcrypt.compare(pass, encrypted);
    return isPasswordEqual;
  };
}
