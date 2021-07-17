/// <reference types= "cypress"/>
describe('test 1 Prueba', () => {
    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php")
    })

    it("Verificar busqueda correcta", () => {
        cy.get('#search_query_top').type('Blouse')
        cy.get('#searchbox > .btn').click()
        cy.get('.right-block > h5 > .product-name').should('contain.text','Blouse')
    })

    it("Verificar busqueda printed dress", () => {
        cy.get('#search_query_top').type('Printed Dress')
        cy.get('#searchbox > .btn').click()
        cy.get('.last-in-line > .product-container > .right-block > h5 > .product-name').should('contain.text','Printed Chiffon Dress')
    })
   
})




