describe('My First Test', function(){
    it('Does not do much',function(){
cy.visit('https://builderx.io/')
cy.contains('Login').click()


cy.contains('Login with email').click()
cy.get('.action-email')
  .type('fake@email.com').should('have.value', 'fake@email.com')

})
})