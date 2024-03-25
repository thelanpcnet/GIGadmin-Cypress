describe('GIGadmin Create Job', () => {

  beforeEach(()=>{
    cy.login() // Login function is defined in cypress/support/commands.js
  })

  it('Create Job', () => {
  
      // Go to Jobs page
      cy.wait(1000) 
      cy.get('[style="opacity: 1; order: 5;"] > .ant-menu-title-content > .menu-label')
        .click()
        .wait(1000)

      // Open Create Job modal
      cy.get('.create-button > .ant-btn')
        .click()
        .wait(1000)

      // Select Provider
      cy.get('.provider-location-container > :nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')        .click()
        .wait(500)
      cy.get('.ant-select-item-option-content')
        .contains('Vaiya')
        .wait(500)
        .click()

      // Select Location
      cy.get('.provider-location-container > :nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(500)     
      cy.get('.ant-select-item-option-content')
        .contains('vaiya')
        .wait(500)
        .click()

      // Select Position
      cy.get(':nth-child(4) > .lg-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(1000)
      cy.get('.ant-select-item-option-content')
        .contains('Administrator')
        .click()
        .wait(2000)

      // Open the JD section
      cy.get(':nth-child(3) > .ant-collapse-header')
        .click()
      cy.get('#description')
        .type('abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc')
     
      // Submit to create the Job
      cy.wait(1000)
      cy.get(':nth-child(6) > .ant-collapse-header')
        .click()
      cy.get('.review-and-post > .ant-btn-default')
        .click()

      // Refresh the page the check the created job
      cy.wait(1000) 
      cy.get('[style="opacity: 1; order: 5;"] > .ant-menu-title-content > .menu-label')
        .click()
        .wait(1500)
      cy.get('.ant-select-selection-item-remove > .anticon')
        .click()
        .wait(1000)
      cy.get(':nth-child(1) > :nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(1000)
      cy.get('.ant-select-item-option-content')
        .contains('Vaiya')
        .click()
        .wait(1000)
      cy.get(':nth-child(1) > :nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
        .click()
        .wait(1000)
      cy.get('.ant-btn-primary')
        .click()
  })
})