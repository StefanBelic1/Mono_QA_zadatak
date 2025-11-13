describe('Open any album from profile', () => {
  const login = () => {
    cy.visit('https://demo.baasic.com/angular/starterkit-photo-gallery/login');           
    cy.get('input[name="username"]').type('stefanbelic');                                 
    cy.get('input[name="password"]').type('sifra123');                                    
    cy.get('button[type="submit"]').click();                                              
  };
   beforeEach(function() {
    login();
    
  });
  it('navigates to profile and opens the first album', () => {
                                                                             
    
    cy.get('span.thumbnail.animation--from-bottom', { timeout: 10000 })
      .should('have.length.greaterThan', 0);                                             

    
    cy.get('span.thumbnail.animation--from-bottom').first()
      .find('div.thumbnail__img')
      .click({ force: true });                                                          

    
    cy.location('pathname', { timeout: 10000 })
      .should('match', /\/album\//);                                                     
    cy.get('main', { timeout: 10000 })
      .should('contain.text', 'photos');                                                 
  });
});
