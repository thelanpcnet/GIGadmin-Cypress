describe('GIGadmin Login Logout', () => {
 
  it('Login/Logout', () => {

    // Enter GIGadmin portal
    cy.viewport(1920,1080)
    cy.clearAllCookies()
    cy.visit(Cypress.env('URL'))
    cy.wait(1000)
    
    // Start Login
    cy.get('#login_email')
      .click()
      .type(Cypress.env('USERNAME'))
    cy.wait(1000)
    cy.get('#login_password')
      .click()
      .type(Cypress.env('PASSWORD'))
    cy.wait(1000)
    cy.get('.ant-btn')
      .click()
    
    // Start Logout
    cy.wait(2000)
    cy.get('.ant-image-img').click()
    cy.wait(1000)
    cy.get('body > div:nth-child(7) > div > div > ul > li:nth-child(2) > span > li > span').click()
  })
})