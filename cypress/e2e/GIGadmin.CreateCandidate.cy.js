import 'cypress-file-upload'

describe('GIGadmin Create Candidate', () => {

    //Call the login function
    beforeEach(()=>{
      cy.login() // Login function is defined in cypress/support/commands.js
    })

    it('Create Candidate', () => {

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
      
      // Enter Candidate page
      cy.get('[style="opacity: 1; order: 2;"] > .ant-menu-submenu-title')
        .click()
        .wait(1000)
        cy.get('.ant-menu-title-content > .menu-sublabel')
        .contains('Candidate')
        .click()

      // Open Create Candidate form
      cy.get('.create-button > .ant-btn')
        .click()
      
      // Create some variables to generate the name/email randomly
      const randomPrefix = Math.random().toString(36).substring(2,15) /* Generate a random prefix for name and Email */
      const randomEmail = randomPrefix + "@mailinator.com"
      const randomFirstName =  randomPrefix + " Cypress"

      // Enter First Name
      cy.get('#firstname')
        .type(randomFirstName)
        .wait(500)

      // Enter Last Name
      cy.get('#lastname')
        .type('User')
        .wait(500)

      // Enter Email
      cy.get('#email')
        .type(randomEmail)
        .wait(500)

      // Enter Phone Number
      cy.get('#phone')
        .type('09878987553')
        .wait(500)

      // Enter Title
      cy.get(':nth-child(7) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
      cy.get('.ant-select-item-option-content')
        .contains('Mr.')
        .click()

      // Enter Marital Status
      cy.get('.seeker-basic-information > :nth-child(8) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
      cy.get('.ant-select-item-option-content')
        .contains('Single')
        .click()

      // Enter Date of Birth
      cy.get('#birth')
        .click()
        .wait(500)
        .type('01/01/2000')
        .wait(500)

      // Enter Gender at Birth (or on Documentation)
      cy.get('.gender-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
      cy.get('.ant-select-item-option-content')
        .contains('Male')
        .click()

      // Enter Address - Building
      cy.get('#address')
        .type('4, Foxholt Gardens')
        .wait(500)

      // Enter Street
      cy.get('#address2')
        .type('Croft Avenue')
        .wait(500)

      // Enter City
      cy.get('#city')
        .type('Croft Avenue')
        .wait(500)

      // Enter Post Code
      cy.get('#zip')
        .wait(1000)
        .type('SR34NP')
        .wait(1000)

      // Enter Next of Kin - First Name
      cy.get('#kinFirstname')
        .type('Uju Frances')
        .wait(500)

      // Enter Next of Kin - Relationship
      cy.get('#kinRelation')
        .type('family')
        .wait(500)

      // Enter Next of Kin - Building
      cy.get('#kinAddress')
        .type('Next of Address - Building 1')
        .wait(500)

      // Enter Next of Kin - Postcode
      cy.get('#kinZip')
        .wait(1000)
        .type('SR34NP')
        .wait(1000)

      // Enter Next of Kin - Phone
      cy.get('#kinPhone')
        .type('01236597342')
        .wait(500)

      // Add Language
      cy.get('.add-language > .ant-btn')
        .click()
        .wait(500)
      cy.get(':nth-child(2) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(500)
      cy.get('.ant-select-item-option-content')
        .contains('English abc')
        .click()
      cy.get('.modal-desc > :nth-child(3) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(500)
      cy.get('.ant-select-item-option-content')
        .contains('Native')
        .click()
      cy.get('.modal-footer > .ant-btn')
        .click()

      // Select Criminal Convictions
      cy.get('#hasConvict > label:nth-child(2) > span.ant-radio > span')
        .click()





      // OPEN PAST WORK DETAILS SECTION
      cy.get(':nth-child(2) > .ant-collapse-header')
        .click()

      // Select Industry Experience
      cy.get('#industryExperienceAttributes > label:nth-child(1) > span.ant-checkbox > span')
        .click()
      cy.get('#industryExperienceAttributes > label:nth-child(2) > span.ant-checkbox > span')
        .click()
      cy.get('#industryExperienceAttributes > label:nth-child(3) > span.ant-checkbox > span')
        .click()
      cy.get('#industryExperienceAttributes > label:nth-child(4) > span.ant-checkbox > span')
        .click()
      cy.get('#industryExperienceAttributes > label:nth-child(5) > span.ant-checkbox > span')
        .click()
      cy.get('#industryExperienceAttributes > label:nth-child(6) > span.ant-checkbox > span')
        .click()
      cy.get('#industryExperienceAttributes > label:nth-child(7) > span.ant-checkbox > span')
        .click()
      cy.get('#industryExperienceAttributes > label:nth-child(8) > span.ant-checkbox > span')
        .click()
      cy.get('#industryExperienceAttributes > label:nth-child(9) > span.ant-checkbox > span')
        .click()





      // OPEN LICENCES AND DOCS SECTION
      cy.get(':nth-child(3) > .ant-collapse-header')
        .click()

      // Enter Nationality
      cy.get('.left > :nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(500)
      cy.get('.ant-select-item-option-content')
        .contains('American')
        .click()
        .wait(500)

      // Upload Share Code documentation
      cy.get('.share-code-checkbox > :nth-child(2)')
        .click()
        .wait(1000)
      cy.get('.right > .ant-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > :nth-child(2) > .ant-upload-select > .ant-upload > .choose-file > .ant-btn')
        .attachFile({
            filePath: 'image.png',
        },{
            force: true,
            subjectType: 'drag-n-drop'
          }
        )
        .wait(500)

      // Enter expire date
      cy.get('.share-code > :nth-child(2) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ref-container > .ant-picker')
        .click()
        .wait(500)
        .type('01/01/2050')
        .wait(500)

      // Enter Share Code
      cy.get('#shareCode')
        .type('WGXART3XZ')
        .wait(500)

      // Check for not visa student
      cy.get('#limitVisa > :nth-child(2)')
        .click()

      // Upload contract
      cy.get(':nth-child(1) > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .item-checkbox > :nth-child(2)')
        .click()
        .wait(1000)
      cy.get(':nth-child(2) > .body-block > .right-block > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > :nth-child(2) > .ant-upload-select > .ant-upload > .choose-file > .ant-btn')
        .attachFile({
          filePath: 'image.png',
        },{
          force: true,
          subjectType: 'drag-n-drop'
          }
      )





      // OPEN WORKER PAYROLL AND AWR INFORMATION
      cy.get(':nth-child(4) > .ant-collapse-header')
        .click()
        .wait(500)

      // Select "This is my first job"
      cy.get('#p46s > :nth-child(1) > .ant-radio > .ant-radio-input')
        .wait(500)
        .click()
        
      // Enter Payment Method
      cy.get('.items > :nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(500)
      cy.get('.ant-select-item-option-content')
        .contains('BACS - Bank')
        .click()

      // Enter Account Number
      cy.get('#bankAcc')
        .type('96739738')
        .wait(500)

      // Enter Full Name of Bank
      cy.get('#bank')
        .type('Revolution')
        .wait(500)

      // Enter National Insurance No
      cy.get('#ni')
        .type('TJ541377B')
        .wait(500)

      // Enter Closest GIG Office
      cy.get(':nth-child(11) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(500)
      cy.get('.ant-select-item-option-content')
        .contains('Scotland')
        .click()
        .wait(500)

      // Enter Account Holder Name
      cy.get('#bankAccName')
        .type('Murtaza Mukadam')
        .wait(500)

      // Enter Sort Code
      cy.get('#bankSort')
        .type('040075')
        .wait(500)

      // Enter How did you hear about us?
      cy.get(':nth-child(12) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(500)
      cy.get('.ant-select-item-option-content')
        .contains('Google')
        .click()
      




      // OPEN COMMENTS AND STATUS UPDATES
      cy.get(':nth-child(6) > .ant-collapse-header')
        .click()

      // Add Comment
      cy.get('.comment-container > :nth-child(1) > :nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input')
        .type('123123123123123123')
        .wait(500)
      cy.get('.wrap-btn > .ant-btn')
        .click()

      // Set status to Approved
      cy.get('.status-fields > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(500)
      cy.get('.ant-select-item-option-content')
        .contains('Approved')
        .click()
        .wait(500)
      cy.get('.modal-wrapper > .modal-footer > .btn-save')
        .click()
        .wait(500)
      


      
  
      // SUBMIT CREATE CANDIDATE
      cy.get('.candidate-footer > .btn-save')
        .click()
        .wait(1000)

      // CONFIRM TO CREATE
      cy.get(':nth-child(20) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .modal-wrapper > .modal-footer > .btn-save')
        .click()
  })
})