const { should } = require('chai');
const LoginPage = require('../../pages/loginPage')
const InventoryPage = require('../../pages/inventoryPage.js')

describe('Testeo de Login', () =>{


    beforeEach(() =>{
        cy.visit('');
    });

    it('TC-LOG001 - Login - Credenciales Correctas  - Inicio Correcto',()=>{
        cy.fixture('dataLoginPageOK').as('data');
        cy.get('@data').then((data) => {
            const user = data.username;
            const pwd = data.password;
            LoginPage.getTxtUsername().type(user);
            LoginPage.getTxtPassword().type(pwd);
            LoginPage.getBtnLogin().click({force:true});
            InventoryPage.getBtnCheckoutCart().should('exist');
        })

    });

it('TC-LOG001 - Login - Credenciales Correctas  - Inicio Correcto - Fallado a Proposito',()=>{
        cy.fixture('dataLoginPageNOK').as('data');
        cy.get('@data').then((data) => {
            const user = data.username;
            const pwd = data.password;
            LoginPage.getTxtUsername().type(user);
            LoginPage.getTxtPassword().type(pwd);
            LoginPage.getBtnLogin().click({force:true});
            InventoryPage.getBtnCheckoutCart().should('exist');
        })

    });


    it('TC-LOG005 - Login - Credenciales Incorrectas  - Sin Password',()=>{
        cy.fixture('dataLoginPageNOK').as('data');
        cy.get('@data').then((data) => {
            const user = data.username;
            LoginPage.getTxtUsername().type(user);
            LoginPage.getBtnLogin().click({force:true});
            LoginPage.getErrorMessageText().should('contain.text', 'Epic sadface: Password is required');
        })

    });


});