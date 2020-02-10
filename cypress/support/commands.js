import '@testing-library/cypress/add-commands';

Cypress.Commands.add('fillFactorial', () => {
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
    .should('include', '/dashboard')
    .get('a[href="/attendance/clock-in"]')
    .click()
    .url()
    .should('include', 'attendance/clock-in')
    .wait(500);

  cy.get('tr:not([class*="disabled"])').each($tr => {
    cy.wrap($tr).within($el => {
      if ($el.find('input:not([disabled])').length > 0) {
        cy.get('button').click();

        cy.get('input:not([disabled])').each(($input, index) => {
          const input = cy.wrap($input);
          switch (index) {
            case 1: {
              input.type('1400');
              break;
            }
            case 2: {
              input.type('1500');
              break;
            }
            case 3: {
              input.type('1730');
              break;
            }
            default: {
              input.type('0830');
              break;
            }
          }
        });

        cy.get('div[class*="submit"] > button').each($button => $button.click());
      }
    });
  });
});
