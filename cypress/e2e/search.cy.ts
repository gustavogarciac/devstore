describe('Search products', () => {
  it('should be able to search for products', () => {
    cy.searchByQuery('Moletom')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=Moletom')

    cy.get('a[href^="/product/"]').should('exist')
  })

  it('should redict to home when not providing a query on the search input', () => {
    cy.visit('/')
    cy.get('input[name=q]').parent('form').submit()

    cy.location('pathname').should('not.include', '/search')
  })

  it('should redict to home when brute visiting search page', () => {
    cy.visit('/')
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
