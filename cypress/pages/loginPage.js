class LoginPage {

    // Solo getters — devuelven cy.get() directamente
    getTxtUsername(){
        return cy.get("#user-name");
    }

    getTxtPassword(){
        return cy.get("#password");
    }

    getBtnLogin(){
        return cy.get("#login-button");
    }

    getErrorMessageText(){
        return cy.get('[data-test="error"]');
    }

}

module.exports = new LoginPage()