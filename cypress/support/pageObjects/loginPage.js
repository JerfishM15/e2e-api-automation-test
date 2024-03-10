class LoginPage {
  getLoginLogo() {
    return cy.get(".bot_column");
  }

  usernameField() {
    return cy.get("#user-name");
  }

  passwordField() {
    return cy.get("#password");
  }

  loginBtn() {
    return cy.get("#login-button");
  }
}

export default LoginPage;
