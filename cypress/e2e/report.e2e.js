describe('Factorial ', () => {
  it('Fill fields', () => {
    cy.visit('/');
    cy.fillFactorial();
  });
});
