import some from 'lodash/some';

describe('Factorial ', () => {
  it('Fill worked days', () => {
    cy.logIn()
      .get('a[href="/attendance/clock-in"]')
      .click()
      .url()
      .should('include', 'attendance/clock-in')
      .wait(500);

    cy.get('tbody > tr:not([class*="disabled"])').each($tr => {
      cy.wrap($tr).within($el => {
        if ($el.find('input:not([disabled])').length === 2) {
          cy.get('button').click();
        }

        const isSomeInputEmpty = some($el.find('input:not([disabled])'), input => !input.value);

        if ($el.find('input:not([disabled])').length > 0 && isSomeInputEmpty) {
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
});
