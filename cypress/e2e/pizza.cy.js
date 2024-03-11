describe('Sipariş Formu', () => {
  it('ad soyad alanına metin girmelidir', () => {
    cy.visit('http://localhost:5173/order');

    cy.get('[data-cy="fullName"]')
      .type('Atilla Koz')
      .should('have.value', 'Atilla Koz');
  });
});
describe('Sipariş Formu', () => {
  it('birden fazla malzeme seçilmelidir', () => {
    cy.visit('http://localhost:5173/order');

    cy.get('[data-cy="material-checkbox-Pepperoni"]').check();

    cy.get('[data-cy="material-checkbox-Biber"]').check();
    cy.get('[data-cy="material-checkbox-Biber"]').should('be.checked');

    cy.get('[data-cy="material-checkbox-Sosis"]').uncheck();
    cy.get('[data-cy="material-checkbox-Sosis"]').should('not.be.checked');
  });
});

describe('Sipariş Formu', () => {
  it('formu göndermelidir', () => {
    cy.visit('http://localhost:5173/order');

    cy.get('[data-cy="fullName"]').type('Atilla Koz');
    cy.get('[data-cy="textarea"]').type('bolllllll acıııııı');
    cy.get('[data-cy="size-small"]').check();
    cy.get('[data-cy="thickness"]').select('Ince');
    cy.get('[data-cy="material-checkbox-Pepperoni"]').check();
    cy.get('[data-cy="material-checkbox-Domates"]').check();
    cy.get('[data-cy="material-checkbox-Biber"]').check();
    cy.get('[data-cy="material-checkbox-Ananas"]').check();

    cy.get('form').submit();

    cy.url().should('include', '/success');
  });
});
