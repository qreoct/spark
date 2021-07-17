describe('Spark app menu navigation', () => {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page renders', () => {
    cy.contains('Play').should('be.visible')
    cy.contains('Profile').should('be.visible')
    cy.contains('About').should('be.visible')
  })

  it('navigate about', () => {
    cy.contains('About').click()
    cy.contains('About').should('be.visible')
    cy.contains('Privacy').should('be.visible')
    cy.contains('back').click()
  })

  it('navigate profile', () => {
    cy.contains('Profile').click()
    cy.contains('Profile').should('be.visible')
    cy.contains('My Profile').should('be.visible')
    cy.contains('back').click()
  })

  it('navigate menu', () => {
    cy.contains('Play').click()
    cy.contains('Group').click()
    cy.contains('Icebreakers').should('be.visible')
    cy.contains('back').click()
    cy.contains('Online').click()
    cy.contains('Random').click()
    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Solo').click()
    cy.contains('back').click()
  })
})