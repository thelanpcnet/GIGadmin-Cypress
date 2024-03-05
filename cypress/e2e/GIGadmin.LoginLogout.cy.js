describe('GIGadmin Login Logout', () => {
 
  beforeEach(()=>{
    cy.login() // Login function is defined in cypress/support/commands.js
  })

  it('Logout', () => {
    // Start Logout
    cy.wait(2000)
    cy.get('.ant-image-img').click()
    cy.wait(1000)
    cy.get('body > div:nth-child(7) > div > div > ul > li:nth-child(2) > span > li > span').click()
  })
})