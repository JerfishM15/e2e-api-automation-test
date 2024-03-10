/// <reference types="Cypress" />

import FinishPage from "../../support/pageObjects/finishPage";

describe("Prueba E2E en SauceDemo", function () {
  const finishPage = new FinishPage();

  //Declarando la data
  let userdata;
  before(function () {
    cy.fixture("generalData").then(function (data) {
      userdata = data;
    });
    cy.openLoginPage();
  });

  //Haciendo LogOut
  after(function () {
    cy.logOut();
  });

  it("Comprar 2 productos en SauceDemo", () => {
    //Haciendo login valido
    cy.userLogin(userdata.user_name, userdata.user_password);

    //seleccionando productos
    cy.selectProduct(userdata.product1);
    cy.selectProduct(userdata.product2);

    //haciendo CheckOut
    cy.checkOut(userdata.firstName, userdata.lastName, userdata.postalCode);

    //verificando que se hizo el checkout
    finishPage.getCompleteMsg().then(function (element) {
      const txt = element.text();
      expect(txt.includes(userdata.completemsg)).to.be.true;
    });
  });
});

// import HomePage from "../../support/pageObjects/homePage";
// import CartPage from "../../support/pageObjects/cartPage";
// import ProductPage from "../../support/pageObjects/productPage";
// import NavBar from "../../support/pageObjects/navBar";
// import {
//   randFullName,
//   randCreditCardNumber,
//   randCountry,
//   randMonth,
//   randCity,
//   randNumber,
// } from "@ngneat/falso";

// const homePage = new HomePage();
// const productPage = new ProductPage();
// const navBar = new NavBar();
// const cartPage = new CartPage();
// const FRONTEND_URL = Cypress.env("FRONTEND_URL");

// describe("Buy Items", function () {
//   beforeEach(() => {
//     cy.visit(`${FRONTEND_URL}`);

//     cy.fixture("checkoutData").then(function (data) {
//       this.data = data;
//     });
//   });

//   it("TC-01: Buy Item", function () {
//     homePage.selectItem(this.data.firstTime).click();

//     //Assert product has been added
//     cy.on("window:alert", (text) => {
//       expect(text).to.contains("Product added");
//     });

//     productPage.addToCart().click();
//     navBar.homeBtn().click();
//     homePage.selectItem(this.data.secondTime).click();

//     //Assert product has been added
//     cy.on("window:alert", (text) => {
//       expect(text).to.contains("Product added");
//     });
//     productPage.addToCart().click();
//     navBar.cartBtn().click();

//     //Assert added Items are Present
//     cartPage.tableItemElement(1).should(($el) => {
//       const text = $el.text();
//       expect(text).to.satisfy(
//         (text) => text === this.data.firstTime || text === this.data.secondTime
//       );
//     });

//     cartPage.placeOrder().click();
//     cartPage.nameTxtbox().type(randFullName());
//     cartPage.countryTxtbox().click();
//     cartPage.countryTxtbox().type(randCountry());
//     cartPage.cityTxtbox().type(randCity());
//     cartPage.cardTxtbox().type(randCreditCardNumber());
//     cartPage.monthTxtbox().type(randMonth());
//     cartPage
//       .yearTxtbox()
//       .type(randNumber({ min: 1930, max: 2005, precision: 1 }));
//     cartPage.purchaseBtn().click();
//     cartPage.titleH2().contains("Thank you for your purchase");
//   });
// });
