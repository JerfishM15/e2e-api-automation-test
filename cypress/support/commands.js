import CheckOutPage from "../support/pageObjects/checkOutPage";
import LoginPage from "../support/pageObjects/loginPage";
import TabBar from "../support/pageObjects/tabBar";
import ProductsPage from "../support/pageObjects/productsPage";
const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const checkOutPage = new CheckOutPage();
const tabBar = new TabBar();

Cypress.Commands.add("openLoginPage", () => {
  cy.visit(Cypress.env("FRONTEND_URL"));
});

Cypress.Commands.add("userLogin", (username, password) => {
  loginPage.usernameField().type(username);
  loginPage.passwordField().type(password);
  loginPage.loginBtn().click();
});

Cypress.Commands.add("selectProduct", (productName) => {
  productsPage.itemName().each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      productsPage.addToCartBtn().eq(index).click();
    }
  });
});

Cypress.Commands.add("checkOut", (firstName, lastName, postalCode) => {
  productsPage.cartBtn().click();
  checkOutPage.checkOutBtn().click();
  checkOutPage.firstNameImput().type(firstName);
  checkOutPage.lastNameImput().type(lastName);
  checkOutPage.postalCodeImput().type(postalCode);
  checkOutPage.continueBtn().click();
  checkOutPage.finishBtn().click();
});

Cypress.Commands.add("logOut", () => {
  tabBar.tabBarBtn().click();
  tabBar.logOutBtn().click();
});
