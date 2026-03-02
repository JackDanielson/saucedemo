const { should } = require('chai');
const LoginPage = require('../../pages/loginPage')
const InventoryPage = require('../../pages/inventoryPage.js')
const CheckoutPage = require('../../pages/checkoutPage.js')

describe('Checkeo de Checkout', () =>{

    beforeEach(() =>{
        cy.visit('');
    });

    it('TC-CHE001 - Checkout - Agregar un Item del Checkout - Correcto', ()=>{
        cy.fixture('dataLoginPageOK').as('data');
        cy.get('@data').then((data) => {
            const user = data.username;
            const pwd = data.password;
            LoginPage.getTxtUsername().type(user);
            LoginPage.getTxtPassword().type(pwd);
            LoginPage.getBtnLogin().click({force:true});
            InventoryPage.getBtnAddBackpack().click({force:true});
            InventoryPage.getBtnCheckoutCart().click({force:true});
            CheckoutPage.getTableListItems().its('length').should('be.eq', 1);

        })
    });

    it('TC-CHE002 - Checkout - Remover un Item del Checkout - Correcto', ()=>{
cy.fixture('dataLoginPageOK').as('data');
        cy.get('@data').then((data) => {
            const user = data.username;
            const pwd = data.password;
            LoginPage.getTxtUsername().type(user);
            LoginPage.getTxtPassword().type(pwd);
            LoginPage.getBtnLogin().click({force:true});
            InventoryPage.getBtnAddBackpack().click({force:true});
            InventoryPage.getBtnCheckoutCart().click({force:true});
            CheckoutPage.getTableItems().should('have.length', 1);
            CheckoutPage.getBtnRemoveItemBackpack().click({force:true});
            CheckoutPage.getTableItems().should('have.length', 0);
        })
    });


});