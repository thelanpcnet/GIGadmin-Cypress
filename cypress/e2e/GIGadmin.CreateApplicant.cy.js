
import 'cypress-file-upload'

describe('GIGadmin Create Applicant', () => {

    //Call the login function
    beforeEach(()=>{
      cy.login() // Login function is defined in cypress/support/commands.js
    })

    it('Create Applicant', () => {
      
      // Enter Applicant page
      cy.get('[style="opacity: 1; order: 2;"] > .ant-menu-submenu-title > .ant-menu-title-content > .menu-label')
        .click()
        .wait(500)
      cy.get('.ant-menu-title-content > .menu-sublabel')
        .contains('Applicant')
        .click()
      
      // Open Create Applicant form
      cy.get('.create-button > .ant-btn')
        .click()
        .wait(500)
    
      // Use random function which defined in commands.js to fill in the FirstName and Email fields
      cy.random().then(({randomName, randomEmail}) => {
        cy.get('#firstname')
          .type(randomName)
          .wait(500)
        cy.get('#email')
          .type(randomEmail)
      })

      // Enter Last Name
      cy.get('#lastname')
        .type('User')
        .wait(500)

      // Enter Phone Number
      cy.get('#phone')
        .type('09878987553')
        .wait(500)

      // Enter Location
      cy.get(':nth-child(5) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
      cy.get('.ant-select-item-option-content')
        .contains('Scotland')
        .click()

      // Enter Post Code
      cy.get('#rc_select_9')
        .wait(500)
        .type('SR34NP')

      // Enter checkbox special roles
      cy.get('#awayInclude > :nth-child(1) > :nth-child(2)')
        .click()

      // Enter reason to join 
      cy.get('#tellUs')
        .type('zxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxc')

      // Select roles
      cy.get('#preferredRoles > :nth-child(1) > :nth-child(2)')
        .click()
      cy.get('#preferredRoles > :nth-child(2) > :nth-child(2)')
        .click()
      cy.get('#preferredRoles > :nth-child(3) > :nth-child(2)')
        .click()
      cy.get('#preferredRoles > :nth-child(4) > :nth-child(2)')
        .click()  
      cy.get('#preferredRoles > :nth-child(7) > :nth-child(2)')
        .click()
      cy.get('#preferredRoles > :nth-child(6) > :nth-child(2)')
        .click()
    
      // Select status
      cy.get('.status-roles > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .wait(500)
        .click()
      cy.get('.ant-select-item-option-content')
        .wait(500)
        .contains('Contacted')
        .wait(500)
        .click()
    
      // Enter Internal note
      cy.get('#internalNote')
        .type('zxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxc')

      // Upload CV
      cy.get('.ant-upload > .ant-btn')
        .attachFile({
            filePath: 'image.png',
        },{
            force: true,
            subjectType: 'drag-n-drop'
        })
        .wait(500)

      // Submit create Appicant
      cy.get('.btn-save')
        .click()
        .wait(500)
      cy.get('.modal-footer > .btn-save')
        .click()
    })
})