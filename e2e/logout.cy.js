const login = () => {
    cy.visit('https://demo.baasic.com/angular/starterkit-photo-gallery/login');           
    cy.get('input[name="username"]').type('stefanbelic');                                 
    cy.get('input[name="password"]').type('sifra123');                                    
    cy.get('button[type="submit"]').click();                                              
  };
 
   beforeEach(function() {
    login();
   })
   it('opens header menu and logs out', () => {
  
  cy.location('pathname').should('not.include', '/login');                            

 
  cy.get('div.menu, a.menu__title', { timeout: 10000 })
    .contains(/menu/i)
    .click({ force: true });                                                        

  
  cy.contains('li, a, span, button', /^log out$/i, { timeout: 8000 })
    .click({ force: true });                                                          

  
  cy.location('pathname', { timeout: 10000 }).should('include', '/login');          
});
     

  
  





