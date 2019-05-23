describe('Our First Test', () => {

  it('should be on the front page', () => {
    cy.visit('/');
    cy.get('h1').contains('Tour of Heroes');
    cy.get('.module.hero').contains('Mr. Nice');
  })
})