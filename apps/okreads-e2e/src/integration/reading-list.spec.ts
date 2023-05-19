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

  it('Then: I should mark book as finished', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('body').then(($body) => {
      if ($body.find('.remove-button').length > 0) {
        cy.get('.remove-button')
          .click({ multiple: true, force: true });
      }
    });
    cy.get('.mat-icon-button').contains('close').click();

    cy.get('input[type="search"]').type('javascript');
    cy.get('.mat-icon-button').contains('search').eq(0).click()
    cy.get('[data-testing="book-item"]')
      .eq(0)
      .within(() => {
        cy.get('button').eq(0).click();
      });

    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('.finish-button').eq(0).click();
    cy.get('.finished-icon').should('exist')
  });
});
