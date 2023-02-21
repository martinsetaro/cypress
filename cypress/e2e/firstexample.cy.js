/// <reference types="cypress-xpath"/>



describe("Group 1 testing",()=>{

 beforeEach(()=>{
   cy.visit('https://www.mercadolibre.com.ar');
 });
   
 

  it("Selección de vuelo de salida y llegada",()=>{
   
    cy.get('.nav-mobile-menu-selected > a > span').should('have.text','Inicio');
    cy.get(".nav-menu-list > li").should('have.length',8);
    cy.get(":nth-child(3) > .nav-menu-item-link").click({force:true});
    cy.get(':nth-child(1) > :nth-child(1) > .promotion-item__link-container > .promotion-item__container > .promotion-item__img-container > .promotion-item__img').click();
   
   })




 

});