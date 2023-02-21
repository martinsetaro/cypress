/// <reference types="cypress"/>


describe('Verificacion APIs', () => {
  
it('Verificacion endpoint estatus 200',()=>{

   cy.request({
      url:'https://jsonplaceholder.typicode.com/posts'
  
       }).then( respuesta => {
      expect(respuesta.status).to.eq(200);
          })

           // validar status
})


it('validar post dentro del endpoint',()=>{

  cy.visit('https://jsonplaceholder.typicode.com/')
  cy.request( '/posts')
  .its('body')
  .should('have.length',100)

// validar cantidad de post

})

it('post tiene por titulo',()=>{

cy.visit('https://jsonplaceholder.typicode.com/')
cy.request('/posts/1')
.its('body')
.should('have.property','title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')

// validar la propiedad de un elemento

})


})