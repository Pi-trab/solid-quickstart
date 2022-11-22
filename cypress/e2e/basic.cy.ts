describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  })

  it('displays Click button', () => {
    cy.get('button')
    .contains('Clicks');
  })
})
