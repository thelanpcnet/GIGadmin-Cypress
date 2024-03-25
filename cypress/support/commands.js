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

// Define the generate credentials randomly function
Cypress.Commands.add('random', () => {
  const randomPrefix = Math.random().toString(36).substring(2,15) /* Generate a random prefix for name and Email */
  const randomEmail = randomPrefix + "@mailinator.com"
  const randomName =  randomPrefix + " Cypress"
  return {randomName: randomName, randomEmail: randomEmail}
})

// Define the generate random phone number function
Cypress.Commands.add('randomPhoneNumber', () => {
  const randomNumber = Math.floor(Math.random() * 90000000000) + 10000000000 // Generates a 11-digit random number
  const phoneNumber = '0' + randomNumber.toString().substring(1) // Ensures the number starts with '0'
  return phoneNumber
})