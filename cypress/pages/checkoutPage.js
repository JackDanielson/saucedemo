class CheckoutPage{

    getTableListItems(){
        return cy.get('[data-test="cart-list"] .cart_item');
    }

    getTableItems(){
        return cy.get('.cart_list .cart_item');
    }
    getBtnRemoveItemBackpack(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }


}

module.exports = new CheckoutPage();