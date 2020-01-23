describe('Validator Tests', () => {
  it('validation page should exist', () => {
    cy.visit('/')
  })

  it('should have an input field', () => {
    cy.get('#password-input').should('exist')
  })

  it('should have a show/hide password toggle switch', () => {
    cy.get('#password-toggle').should('exist')
  })

  it('should have toggle switch enabled', () => {
    cy.get('#password-toggle').click().then(() => {
      cy.get('#password-toggle').check().should('be.checked')
    })
  })
})