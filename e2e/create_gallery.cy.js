describe('Create Gallery', () => {
  const timestamp = Date.now();
  const albumName = `auto-album-${timestamp}`;
  const photoName = `photo-${timestamp}`;

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
  };

  beforeEach(() => {
    login();
  });

  it('should allow user to create a gallery', () => {
    createAlbum();
    cy.contains(albumName, { timeout: 15000 }).should('be.visible');
    uploadPhoto();
    cy.contains(albumName, { timeout: 15000 }).should('be.visible');
  });
});
