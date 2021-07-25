describe('Online mode journey testing', () => {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page renders', function() {
    cy.contains('Play').should('be.visible')
    cy.contains('Profile').should('be.visible')
    cy.contains('About').should('be.visible')
  })

  it('able to join an existing room', function() {
    cy.contains('Play').click()
    cy.contains('Online').click()
    cy.contains('Join').click()
    cy.get('input').type('1234')
    cy.get('button').click()
    cy.contains('Welcome to the chat! Please be nice!')
    cy.contains('online question lv 1')
    cy.contains('back').click()
  })

  it('able to join a random room when there is a waiting player', function() {
    cy.contains('Play').click()
    cy.contains('Online').click()
    cy.contains('Random').click()
    cy.contains('Waiting for players')
    cy.contains('Welcome to the chat! Please be nice!')
    cy.contains('online question lv 1')
    cy.contains('back').click()
  })

  it('able to chat and click next', function() {
    cy.contains('Play').click()
    cy.contains('Online').click()
    cy.contains('Join').click()
    cy.get('input').type('1234')
    cy.get('button').click()
    cy.contains('Welcome to the chat! Please be nice!')
    cy.contains('online question lv 1')
    cy.get('input').type('Hello!')
    cy.get('button:last').click()
    cy.contains('Hello!')
    cy.contains('Next').click()
    cy.contains('Your request to move to next question has been sent to the other user. Please wait for them to click Next')
    cy.contains('back').click()
  })
})