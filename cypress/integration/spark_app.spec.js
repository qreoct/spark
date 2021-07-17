describe('Spark app menu navigation', () => {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page renders', () => {
    cy.contains('Play')
    cy.contains('Profile')
    cy.contains('About')
  })

  it('navigate about', () => {
    cy.contains('About').click()
    cy.contains('About')
    cy.contains('Privacy')
    cy.contains('back').click()
  })

  it('navigate profile', () => {
    cy.contains('Profile').click()
    cy.contains('Profile')
    cy.contains('My Profile')
    cy.contains('back').click()
  })

  it('navigate menu', () => {
    cy.contains('Play').click()
    cy.contains('Group').click()
    cy.contains('Icebreakers')
    cy.contains('back').click()
    cy.contains('Online').click()
    cy.contains('Random').click()
    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Solo').click()
    cy.contains('close').click()
    cy.contains('back').click()
  })
})