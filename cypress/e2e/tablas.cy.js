/// <reference types="cypress" />

describe('template spec', () =>{

   beforeEach(()=>{
     
    cy.visit('http://127.0.0.1:5500/index.html')

   });

   it('verificando tabla',()=>{
  
     cy.get('tbody > :nth-child(1) > :nth-child(2)')
     .should('have.text','Facebook')
     .prev()
     .find('input')
     .check()


   })
    
  
})