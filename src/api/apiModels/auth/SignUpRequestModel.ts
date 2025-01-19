export default class SignUpRequestModel {
  private readonly password: string;
  private readonly email: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
