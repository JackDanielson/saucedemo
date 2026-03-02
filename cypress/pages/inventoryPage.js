class InventoryPage{

    getWebPageTitle(){
        return cy.get('.title');
    }

    getBtnCheckoutCart(){
        return cy.get('[data-test="shopping-cart-link"]')
    }

    getBtnAddBackpack(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    getBtnAddBikeLight(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }

    getBtnAddBoltTShirt(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    getBtnAddFleeceJacket(){
        return cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    }

    getBtnAddOnesie(){
        return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
    }

    getBtnAddAllTheThingsTShirt(){
        return cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }

}

module.exports = new InventoryPage();