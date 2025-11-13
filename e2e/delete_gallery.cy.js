describe('Delete Gallery Album', function() {
  let albumName; 
  let photoName;

  
  const login = () => {
    cy.visit('https://demo.baasic.com/angular/starterkit-photo-gallery/login');
    cy.get('input[name="username"]').type('stefanbelic');
    cy.get('input[name="password"]').type('sifra123');
    cy.get('button[type="submit"]').click();
  };

  const createAlbum = () => {
    cy.contains('button', 'Create Album').click();
    cy.get('input[name="albumName"]').type(albumName);
    cy.get('input[name="albumDescription"], textarea[name="albumDescription"]', { timeout: 2000 })
      .should('be.visible')
      .type('test description');
    cy.get('button[type="submit"]').click();
    
  };
  const uploadPhoto = () => {
    cy.contains('Click to upload').click();
    cy.get('input[type="file"]').attachFile('forest.jpg');
    cy.get('input[id="photoName"]').type(photoName, { timeout: 1000 });
    cy.get('input[id="photoDescription"], textarea[name="photoDescription"]', { timeout: 2000 })
      .should('be.visible')
      .type('test description');
    cy.get('button[type="submit"]').click();
    cy.contains(albumName, { timeout: 15000 }).should('be.visible');
  };

  beforeEach(function() {
    albumName = `auto-album-${Date.now()}`;
    photoName = `photo-${Date.now()}`;
    login();
    createAlbum();
    uploadPhoto();

  });

  it('should delete gallery album (hover -> click)', function () {
  
    cy.contains('strong', albumName, { timeout: 10000 })
    .closest('div.w--33')
    .within(() => {
        cy.get('span.thumbnail.animation--from-bottom', { timeout: 10000 })
        .as('thumb');

        cy.get('@thumb')
        .find('div.thumbnail__delete', { timeout: 8000 })
        .invoke('css', 'visibility', 'visible')
        .invoke('css', 'opacity', '1');                                         

        cy.get('@thumb')
        .find('button.thumbnail__info__delete', { timeout: 8000 })
        .click({ force: true });                                                
    });


    cy.get('div.modal', { timeout: 10000 })                
    .should('be.visible');                               


    cy.get('div.modal__dialog--content')
    .should('contain.text', 'Are you sure you want to delete album'); 


    cy.get('div.modal__dialog--footer')
    .contains('button', 'Delete', { timeout: 8000 })
    .should('be.visible')
    .click({ force: true });                              


    cy.get('div.modal').should('not.exist');                


    cy.contains(albumName).should('not.exist');

    });
});
