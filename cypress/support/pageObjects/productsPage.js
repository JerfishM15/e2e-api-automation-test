class ProductsPage {
  itemName() {
    return cy.get(".inventory_item_name");
  }

  cartBtn() {
    return cy.get("[data-icon='shopping-cart']");
  }

  addToCartBtn() {
    return cy.get(".btn_primary.btn_inventory");
  }
}

export default ProductsPage;
