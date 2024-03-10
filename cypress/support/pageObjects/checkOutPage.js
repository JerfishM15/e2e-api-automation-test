class CheckOutPage {
  firstNameImput() {
    return cy.get("#first-name");
  }

  lastNameImput() {
    return cy.get("#last-name");
  }

  postalCodeImput() {
    return cy.get("#postal-code");
  }

  continueBtn() {
    return cy.get('[value="CONTINUE"]');
  }

  finishBtn() {
    return cy.get(".btn_action.cart_button");
  }

  checkOutBtn() {
    return cy.get(".btn_action.checkout_button");
  }
}
export default CheckOutPage;
