Cypress.Commands.add('login', () => {
// Enter GIGadmin portal
    cy.viewport(1920,1080) // Setting viewport size
    cy.clearAllCookies() // Clear cookies to ensure clean login state
    cy.visit(Cypress.env('URL')) // Visit the login page
    cy.wait(1000) // Add a wait to ensure elements are loaded

    // Start Login
    cy.get('#login_email')
      .click()
      .type(Cypress.env('USERNAME'))
      .wait(1000)
    cy.get('#login_password')
      .click()
      .type(Cypress.env('PASSWORD'))
      .wait(1000)
    cy.get('.ant-btn')
      .click()
})