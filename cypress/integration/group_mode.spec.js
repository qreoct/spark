describe('Group mode journey testing', () => {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page renders', () => {
    cy.contains('Play').should('be.visible')
    cy.contains('Profile').should('be.visible')
    cy.contains('About').should('be.visible')
  })

  it('visit icebreakers', () => {
    cy.contains('Profile').click()
    cy.contains('You have no favourited cards.').should('be.visible')
    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Group').click()
    cy.contains('Icebreakers').click()
    cy.contains('close').click()
    cy.contains('help').click()
    cy.contains('close').click()
    cy.contains('icebreaker').should('be.visible')
    cy.get('.fa-star').first().click()
    cy.contains('Added to favourites').should('be.visible')
    cy.contains('back').click()
    cy.contains('Profile').click()
    cy.contains('You have 1 favourited').click()
    cy.contains('close').click()
    cy.contains('icebreaker').should('be.visible')
    cy.get('.fa-star').click()
    cy.contains('Removed from favourites').should('be.visible')
    cy.contains('back').click()
    cy.contains('You have no favourited cards.').should('be.visible')
  })
})