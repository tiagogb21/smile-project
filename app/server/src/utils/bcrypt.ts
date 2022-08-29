import * as bcrypt from 'bcryptjs';

export default class Bcrypt {
  private generateSalt = 10;

  generatePassword = async (_pass: string) => {
    const salt = await bcrypt.genSalt(this.generateSalt);
  }

  comparePassword = async (pass: string, encrypted: string) => {
    const isPasswordEqual = await bcrypt.compare(pass, encrypted);
    return isPasswordEqual;
  }
}
