//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// **** Test Structure ****
//
// Cypress has adopted Mocha's bdd syntax.
// https://on.cypress.io/guides/bundled-tools#section-mocha
//

describe('Broken Sink', function(){
  before(() => {
    cy.visit('/');
  });

  it('Should scroll in cli', () => {
    cy.get('.selector').click();
    cy.get('.item-2').click();

    cy.get('#footer').then(function($btn){
      $btn.get(0).scrollIntoView();
    }).get('.selector').click()
      .get('.item-3').click();
  });
})
