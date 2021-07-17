describe('Group mode journey testing', () => {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page renders', () => {
    cy.contains('Play')
    cy.contains('Profile')
    cy.contains('About')
  })

  it('visit icebreakers', () => {
    cy.contains('Profile').click()
    cy.contains('You have no favourited cards.')
    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Group').click()
    cy.contains('Icebreakers').click()
    cy.contains('close').click()
    cy.contains('help').click()
    cy.contains('close').click()
    cy.contains('icebreakers')
    cy.get('.fa-star').click()
    cy.contains('Added to favourites')
    cy.contains('back').click()
    cy.contains('Profile').click()
    cy.contains('You have 1 favourited').click()
    cy.contains('close').click()
    cy.contains('icebreakers')
    cy.get('.fa-star').click()
    cy.contains('Removed from favourites')
    cy.contains('back').click()
    cy.contains('You have no favourited cards.')
  })
})