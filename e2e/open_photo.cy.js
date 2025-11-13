describe('Open any album from profile', () => {
  const login = () => {
    cy.visit('https://demo.baasic.com/angular/starterkit-photo-gallery/login');           
    cy.get('input[name="username"]').type('stefanbelic');                                 
    cy.get('input[name="password"]').type('sifra123');                                    
    cy.get('button[type="submit"]').click();                                              
  };
  const openAlbum = () =>{
     cy.get('span.thumbnail.animation--from-bottom', { timeout: 10000 })
      .should('have.length.greaterThan', 0);                                             

    
    cy.get('span.thumbnail.animation--from-bottom').first()
      .find('div.thumbnail__img')
      .click({ force: true });                                                          

    
    cy.location('pathname', { timeout: 10000 })
      .should('match', /\/album\//);                                                     
    cy.get('main', { timeout: 10000 })
      .should('contain.text', 'photos');
  }
   beforeEach(function() {
    login();
    openAlbum();
    
  });
  it('opens a photo inside the album', () => {
  
  cy.get('span.thumbnail.animation--from-bottom', { timeout: 10000 })
    .should('have.length.greaterThan', 0);                                               

  
  cy.get('span.thumbnail.animation--from-bottom').first()
    .find('div.thumbnail__img')
    .click({ force: true });                                                             

  
  cy.get('div.modal, div.lightbox, div[class*="modal__dialog"]', { timeout: 10000 })
    .should('be.visible');                                                               

  
});

});
