class InventoryPage{

    getWebPageTitle(){
        return cy.get('.title');
    }

    getBtnCheckoutCart(){
        return cy.get('[data-test="shopping-cart-link"]')
    }
}

module.exports = new InventoryPage();