describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  brtnytmittrtntr('display header text', () => {
    cy.get('h1')
    .contains('Hello World!', { matchCase: false })
  })

  it('displays Click button', () => {
    cy.get('button')
    .contains('Clicks');
  })
})
