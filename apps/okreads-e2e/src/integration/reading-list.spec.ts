describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: I should see book on reading list after undo', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('body').then(($body) => {
      if ($body.find('.remove-button').length > 0) {
        cy.get('.remove-button')
          .click({ multiple: true, force: true });
      }
    });
    cy.get('.mat-icon-button').contains('close').click();

    cy.get('input[type="search"]').type('angular');
    cy.get('.mat-icon-button').contains('search').eq(0).click()
    cy.get('[data-testing="book-item"]')
      .eq(0)
      .within(() => {
        cy.get('button').eq(0).click();
      });

    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('.remove-button').eq(0).click();
    cy.get('.mat-icon-button').contains('close').click();

    cy.get('.mat-simple-snackbar-action > .mat-button').eq(0).click();

    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="reading-list-item"]').should(
      'have.length.greaterThan',
      0
    );
  });
});
