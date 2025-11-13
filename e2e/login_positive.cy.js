describe('Login functionality', () => {

  it('should successfully log in with valid credentials', () => {
    
    cy.visit('https://demo.baasic.com/angular/starterkit-photo-gallery/login');
    cy.get('input[name="username"]').type('stefanbelic');
    cy.get('input[name="password"]').type('sifra123');
    cy.get('button[type="submit"]').click();
    cy.contains('Create Album', { timeout: 10000 }).should('be.visible');
  });

});
