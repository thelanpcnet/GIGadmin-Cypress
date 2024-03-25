
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
      
      // Enter Phone Number
      cy.randomPhoneNumber().then(phoneNumber => {
        cy.get('#contactPhone')
        .type(phoneNumber)
        .wait(500)
      })

      // Enter Building
      cy.get('#building')
        .type('Friendship')
        .wait(500)

      // Enter Street
      cy.get('#street')
        .type('Le Duan')
        .wait(500)

      // Enter Company Number
      cy.get('#companyNumber')
        .type('01234567')
        .wait(500)
      
      // Enter VAT number
      cy.get('#vatNumber')
        .type('123456789')
        .wait(500)
      
      // Enter City
      cy.get('#city')
        .type('Ho Chi Minh')
        .wait(500)

      // Enter Post Code
      cy.get('#rc_select_18')
        .type('SR34NP')
        .wait(500)
      
      // Enter SAGE number  
      cy.get('#customerSageCode')
        .type('100')
        .wait(500)
        
      // Use random function which defined in commands.js to fill in the all Name and Email fields
      cy.random().then(({randomName, randomEmail}) => {

        // Enter Provider Name
        cy.get('#providerName')          
          .type(randomName + ' Provider')
          .wait(500)

        // Enter Registered Provider Name 
        cy.get('#registeredCompanyName')
          .type(randomName + ' Provider')
          .wait(500)

        // Enter Name of Main Contact
        cy.get('.center-wrapper-center--left > :nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #contactName')
          .type(randomName + ' Main Contact')
          .wait(500)

        // Enter Email of Main Contact  
        cy.get('#contactEmail')
          .type(randomEmail)
        
        // Enter Name of Booking Contacts
        cy.get(':nth-child(4) > .item-checkbox > :nth-child(2)')
          .click()
        cy.get('.center-wrapper-center--left > :nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #contactForBookings_0_name')
          .type(randomName + ' Booking Contact')
          .wait(500) 
        
        // Enter Email of Booking Contacts
        cy.get('#contactForBookings_0_email')
          .type(randomEmail)
          .wait(500)

        // Enter Name of Timesheet Contacts
        cy.get(':nth-child(5) > .item-checkbox > :nth-child(2)')
          .click()
        cy.get('.center-wrapper-center--left > :nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #contactForTimesheets_0_name')
        .type(randomName + ' Timesheet Contact')
          .wait(500) 
        
        // Enter Email of Timesheet Contacts
        cy.get('#contactForTimesheets_0_email')
          .type(randomEmail)
          .wait(500)

        // Enter Name of Account Contacts
        cy.get(':nth-child(6) > .item-checkbox > :nth-child(2)')
          .click()
        cy.get('.center-wrapper-center--left > :nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #contactForAccounts_0_name')
        .type(randomName + ' Account Contact')
          .wait(500) 
        
        // Enter Email of Account Contacts
        cy.get('#contactForAccounts_0_email')
          .type(randomEmail)
          .wait(500)
        
        // Enter Name of Invoices Contacts
        cy.get(':nth-child(7) > .item-checkbox > :nth-child(2)')
          .click()
        cy.get('.center-wrapper-center--left > :nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #contactForInvoices_0_name')
        .type(randomName + ' Invoices Contact')
          .wait(500) 
        
        // Enter Email of Invoices Contacts
        cy.get('#contactForInvoices_0_email')
          .type(randomEmail)
          .wait(500)
      })

      // Open Locations and Industries section
      cy.get(':nth-child(4) > .ant-collapse-header')
        .click()

      // Enter Location Name
      cy.get('#locations_0_locationName')
        .type('Office A')
        .wait(500)
      
      // Enter Building Number
      cy.get('#locations_0_buildingNumber')
        .type('1A')
        .wait(500)

      // Enter Street
      cy.get('#locations_0_street')
        .type('Le Duan')
        .wait(500)
      
      // Enter City
      cy.get('#locations_0_city')
        .type('Ho Chi Minh')
        .wait(500)
      
      // Enter Post Code
      cy.get('#rc_select_23')
        .type('SR34NP')
        .wait(500)

      // Select Industry
      cy.get('#industries > :nth-child(1) > :nth-child(2)')
        .click()
      cy.get('#industries > :nth-child(2) > :nth-child(2)')
        .click()
      cy.get('#industries > :nth-child(3) > :nth-child(2)')
        .click()
      cy.get('#industries > :nth-child(4) > :nth-child(2)')
        .click()
      cy.get('#industries > :nth-child(5) > :nth-child(2)')
        .click()
      cy.get('#industries > :nth-child(6) > :nth-child(2)')
        .click()
      cy.get('#industries > :nth-child(7) > :nth-child(2)')
        .click()
      
      // Select Offices
      cy.get('#offices')
        .click()
        .wait(500)
      cy.get('.ant-select-item-option-content')
        .eq(1)
        .click()
      
      // Enter How did you hear about us?
      cy.get('#aboutUs')
        .click()
        .wait(500)
      cy.get('.ant-select-item-option-content')
        .contains('Google')
        .click()
      
      // Open the Comments and Status Updates section
      cy.get(':nth-child(5) > .ant-collapse-header')
        .click()
        .wait(500)
      
      // Select Account Manager
      cy.get('#accountManagerName')
        .click()
        .wait(500)
      cy.get('.ant-select-item-option-content')
        .contains('Adrian Ellis')
        .click()
        .wait(500)
      
      // Save the Provider
      cy.get('.footer-button-container > .yellow-button')
        .click()
    })
})