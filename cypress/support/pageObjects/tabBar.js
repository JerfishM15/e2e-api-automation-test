class TabBar {
  tabBarBtn() {
    return cy.get(".bm-burger-button > button");
  }

  logOutBtn() {
    return cy.get("#logout_sidebar_link");
  }
}
export default TabBar;
