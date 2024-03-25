
import 'cypress-file-upload'

describe('GIGadmin Create Provider', () => {

    //Call the login function
    beforeEach(()=>{
      cy.login() // Login function is defined in cypress/support/commands.js
    })

    it('Create Applicant', () => {
      
      // Enter Provider page
      cy.get('[style="opacity: 1; order: 4;"] > .ant-menu-submenu-title > .ant-menu-title-content > .menu-label')
        .click()
        .wait(500)
      cy.get('.ant-menu-title-content > .menu-sublabel')
        .contains('Providers')
        .click()
        .wait(500)
      
      // Open Create Provider form
      cy.get('.create-button > .ant-btn')
        .click()
        .wait(500)
      
      // Open Contact Information section
      cy.get(':nth-child(2) > .ant-collapse-header')
        .click()
        .wait(500)
    
      // Use random function which defined in commands.js to fill in the FirstName and Email fields
      cy.random().then(({randomName, randomEmail}) => {
        cy.get('#providerName')          
          .type(randomName + ' Provider')
          .wait(500)
        cy.get('#contactName')
          .type(randomName + ' Provider')
          .wait(500)
        cy.get('#contactEmail')
          .type(randomEmail)
      })

    })
})