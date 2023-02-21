/// <reference types="cypress"/>



describe('template spec', () => {
  

 


  // it("Login",()=>{

  //    cy.session('Tom',()=>{
  //     cy.visit("https://the-internet.herokuapp.com/login");
  //     cy.get('#username').type('tomsmith')
  //   cy.get('#password').type('SuperSecretPassword!');
  //   cy.get('.fa').click()
  //   cy.url().should('contains','/secure');
  //   cy.getCookies().should('have.length',6).then( cookies => {
  //     expect(cookies[0]).to.have.property('name','optimizelyPendingLogEvents')
  //   })
  //    // trae todas las cookies y averigua en sus propiedades los valores
    
  // })


  // it('otra validacion de cookies',()=>{

  //   cy.session('smith',()=>{
  //       cy.visit("https://the-internet.herokuapp.com/login");
  //       cy.get('#username').type('tomsmith')
  //     cy.get('#password').type('SuperSecretPassword!');
  //     cy.get('.fa').click()
  //     cy.url().should('contains','/secure');
  //     cy.getCookie('optimizelyPendingLogEvents').should('exist');
  //     cy.getCookie('optimizelyPendingLogEvents').should('not.have.property','value','aiiufh4if498hv5ifnlkb');
  //    // para eliminar las cookies basta con poner al final del codigo cy.clearCookies()
  //    // para eliminar una sola cookie se usa cy.clearCookie('nombre de la cookie')

  //   })
  // })


  it('otra validacion de cookies',()=>{

    cy.session('rom',()=>{
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.get('#username').type('tomsmith')
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('.fa').click()
      cy.url().should('contains','/secure');
      // crear cookie
      cy.getCookie('CookieRanch').should('not.exist')
      cy.setCookie('CookieRanch','Oreo');
      cy.getCookie('CookieRanch').should('have.property','value','Oreo');
      

    })
  })


})


