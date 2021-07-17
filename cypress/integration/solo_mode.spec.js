describe('Solo Mode journey testing', () => {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page renders', () => {
    cy.contains('Play')
    cy.contains('Profile')
    cy.contains('About')
  })

  it('visit solo', () => {
    cy.contains('Profile').click()
    cy.contains('Nothing in Journey yet!')
    cy.contains('Your daily Solo Questions are ready')
    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Solo').click()
    cy.contains('Start').click()
    cy.contains('close').click()
    cy.contains('help').click()
    cy.contains('close').click()
    cy.contains('solo_lv1')
    cy.get('textarea').type('reflection_1st')
    cy.get('button').click()
    cy.contains('Response submitted!')
    cy.contains('back').click()
    cy.contains('Profile').click()
    cy.contains('solo_lv1').click()
    cy.contains('reflection_1st')
    cy.contains('back').click()
    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Solo').click()
    cy.contains('Start').click()
    cy.contains('solo_lv1')
    cy.get('textarea').type('reflection_2nd')
    cy.get('button').click()
    cy.contains('Loading')
    cy.contains('solo_pic')
    cy.get('.selectable').first().click()
    cy.get('button').scrollIntoView().click()
    cy.get('textarea').type('reflection_pic')
    cy.get('button').click()
    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Solo').click()
    cy.contains('Come back tomorrow')
    cy.get('.menu__linkbutton--back').click()
    cy.contains('Profile').click()
    cy.contains('reflection_pic').click()
    cy.contains('reflection_pic')
  })

  it('solo next day', () => {
    cy.contains('Profile').click()
    cy.contains('Nothing in Journey yet!')
    cy.contains('Your daily Solo Questions are ready')
    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Solo').click()
    cy.contains('Start').click()
    cy.contains('close').click()
    cy.contains('help').click()
    cy.contains('close').click()
    cy.contains('solo_lv1')
    cy.get('textarea').type('reflection_1st')
    cy.get('button').click()
    cy.contains('Response submitted!')
    cy.contains('back').click()
    cy.contains('Profile').click()
    cy.contains('solo_lv1').click()
    cy.contains('reflection_1st')
    cy.contains('back').click()
    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Solo').click()
    cy.contains('Start').click()
    cy.contains('solo_lv1')
    cy.get('textarea').type('reflection_2nd')
    cy.get('button').click()
    cy.contains('Loading')
    cy.contains('solo_pic')
    cy.get('.selectable').first().click()
    cy.get('button').scrollIntoView().click()
    cy.get('textarea').type('reflection_pic')
    cy.get('button').click()
    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Solo').click()
    cy.contains('Come back tomorrow')
    cy.get('.menu__linkbutton--back').click()
    cy.contains('Profile').click()
    cy.contains('reflection_pic').click()
    cy.contains('reflection_pic')
    cy.contains('back').click()
    cy.contains('reflection_1st')
    cy.contains('reflection_2nd')
    cy.get('Your daily Solo Questions are ready').should('not.exist')

    const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    cy.setLocalStorage('solo', JSON.stringify(yesterday))

    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Solo').click()
    cy.contains('Start').click()
    cy.contains('solo_lv1')
    cy.get('textarea').type('reflection_4th')
    cy.get('button').click()
    cy.contains('solo_lv1')
    cy.get('textarea').type('reflection_5th')
    cy.get('button').click()
    cy.contains('Loading')
    cy.contains('solo_pic')
    cy.get('.selectable').first().click()
    cy.get('button').scrollIntoView().click()
    cy.get('textarea').type('reflection_pic')
    cy.get('button').click()
    cy.contains('back').click()
    cy.contains('Play').click()
    cy.contains('Solo').click()
    cy.contains('Come back tomorrow')
    cy.get('.menu__linkbutton--back').click()
    cy.contains('Profile').click()
  })
})