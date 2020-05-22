import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"


Given('Given I open basic mortgage calculator page', () => {

    cy.visit('https://www.moneysavingexpert.com/mortgages/mortgage-rate-calculator/')

});

   When('I enter the value for mortgage debt', datatable => {

    datatable.hashes().forEach [element => {
        cy.get('#amount').clear(element.amount) 
        cy.get('#amount').type(element.amount)
        cy.get('#term').clear(element.term) 
        cy.get('#term').type(element.term)
        
    }]

    When('I enter the values for interest rate and mortgage fees', datatable => {

           datatable.hashes().forEach[element => {
            cy.get('#rate').clear(element.rate) 
            cy.get('#rate').type(element.rate)
            cy.get('#fees-value').clear(element.fee) 
            cy.get('#fees-value').type(element.fee)
            
        }];
    
    Then('I submit the form')
        cy.get('.btn--default').click()
    
    
      })

   })