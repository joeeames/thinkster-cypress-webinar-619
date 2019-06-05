describe('Initial page', () => {

  beforeEach(() => {
    

  })

  it(`has title 'Tour of Heroes'`, () => {
    
    // basic tests
    cy.visit('/')
    cy.title().should('eq', 'Tour of Heroes')






    // contains
    cy.get('h3').contains('Top Heroes');
    cy.get('h4').contains('Hero Search');











    // chained compound test
    cy.get('h1').contains('Tour of Heroes')
    .and('have.css', 'color', 'rgb(153, 153, 153)' )
















    // test count of items
    cy.get('app-dashboard a').should('have.length', 4);








    // interacting with an element
    cy.contains('clear').click();
    cy.get('app-messages div div').should('have.length', 0);







    







    // new elements
    cy.get('#search-box').type('Mr. Nice');
      cy.get('.search-result li').contains('Mr. Nice')
  });
  
});