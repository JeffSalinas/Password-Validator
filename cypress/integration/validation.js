describe('Validator Tests', () => {
  describe('Rendered Items', () => {

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

  describe('8-72 Characters', () => {
    it('should not accept password under 8 characters', () => {
      cy.visit('/')
      cy.get('#password-input').type('Hello').then(() => {
        cy.get('#test-character-count').should('have.css', 'text-decoration', 'none solid rgb(0, 0, 0)')
      })
    })
  
    it('should not accept password over 72 characters', () => {
      cy.visit('/')
      cy.get('#password-input')
        .type('The best thing about a Boolean is that even if you are wrong, you are only off by a bit')
        .then(() => {
          cy.get('#test-character-count').should('have.css', 'text-decoration', 'none solid rgb(0, 0, 0)')
        })
    })
  
    it('should accept password with a length of 10', () => {
      cy.visit('/')
      cy.get('#password-input').type('HelloWorld').then(() => {
        cy.get('#test-character-count').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)')
      })
    })
  })

  describe('1 Uppercase Character', () => {
    it('should accept password with 1 uppercase character', () => {
      cy.visit('/')
      cy.get('#password-input').type('helloWorld').then(() => {
        cy.get('#test-character-count').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)')
      })
    })
  
    it('should not accept password with all lowercase characters', () => {
      cy.visit('/')
      cy.get('#password-input').type('helloworld').then(() => {
        cy.get('#test-character-count').should('have.css', 'text-decoration', 'none solid rgb(0, 0, 0)')
      })
    })
  })
})