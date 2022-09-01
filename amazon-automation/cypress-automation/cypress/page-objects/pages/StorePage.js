export default class StorePage{
    // TODO: ugly or not?
    static addToBasket(item){
       const p = cy.get('p').contains(item)
       const parent = p.parent()
       const button = parent.siblings().contains('Add to Basket')
       button.click()
    }
}