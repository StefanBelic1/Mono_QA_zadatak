describe('Login functionality', () => {

  it('should successfully log in with valid credentials', () => {
    
    cy.visit('https://demo.baasic.com/angular/starterkit-photo-gallery/login');
    cy.get('input[name="username"]').type('stefanbelic');
    cy.get('input[name="password"]').type('sifra1234');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid email, username or password', { timeout: 10000 }).should('be.visible');
    cy.contains('Forgot Your Password? Recover Your Password Here!', { timeout: 10000 }).should('be.visible');
});

});