Cypress.Commands.add('logIn', () => {
  const user = {
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
  };

  cy.visit('/')
    .get('input[id="user_email"]')
    .type(user.username)
    .get('input[id="user_password"]')
    .type(user.password)
    .get('input[type="submit"]')
    .click()
    .wait(1000)
    .url()
    .should('include', '/dashboard');
});
