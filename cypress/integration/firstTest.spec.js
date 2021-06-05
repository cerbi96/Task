import { onFillInput } from "../support/pageObjects/test"

describe('Click and fill inputs',()=>{
it('Fill all inputs with value',()=>{
cy.visit('http://www.rpachallenge.com/')
cy.get('.btn-large').click()
onFillInput.round1()
onFillInput.round2()
onFillInput.round3()
onFillInput.round4()
onFillInput.round5()
onFillInput.round6()
onFillInput.round7()
onFillInput.round8()
onFillInput.round9()
onFillInput.round10()
})

})