class fillInput{
    round1(){
        cy.get('[ng-reflect-name="labelFirstName"]').type('John')
        cy.get('[ng-reflect-name="labelLastName"]').type('Smith')
        cy.get('[ng-reflect-name="labelCompanyName"]').type('IT Solutions')
        cy.get('[ng-reflect-name="labelRole"]').type('Analyst')
        cy.get('[ng-reflect-name="labelAddress"]').type('98 North Road')
        cy.get('[ng-reflect-name="labelEmail"]').type('jsmith@itsolutions.co.uk')
        cy.get('[ng-reflect-name="labelPhone"]').type('40716543298')
        cy.get('form.ng-dirty > .btn').click()
    }
    round2(){
        cy.get('[ng-reflect-name="labelFirstName"]').type('Jane')
        cy.get('[ng-reflect-name="labelLastName"]').type('Dorsey')
        cy.get('[ng-reflect-name="labelCompanyName"]').type('MediCare')
        cy.get('[ng-reflect-name="labelRole"]').type('Medical Engineer')
        cy.get('[ng-reflect-name="labelAddress"]').type('11 Crown Street')
        cy.get('[ng-reflect-name="labelEmail"]').type('jdorsey@mc.com')
        cy.get('[ng-reflect-name="labelPhone"]').type('40791345621')
        cy.get('form.ng-dirty > .btn').click()
    }
    round3(){
        cy.get('[ng-reflect-name="labelFirstName"]').type('Albert')
        cy.get('[ng-reflect-name="labelLastName"]').type('Kipling')
        cy.get('[ng-reflect-name="labelCompanyName"]').type('Waterfront')
        cy.get('[ng-reflect-name="labelRole"]').type('Accountant')
        cy.get('[ng-reflect-name="labelAddress"]').type('22 Guild Street')
        cy.get('[ng-reflect-name="labelEmail"]').type('kipling@waterfront.com')
        cy.get('[ng-reflect-name="labelPhone"]').type('40735416854')
        cy.get('form.ng-dirty > .btn').click()
    }
    round4(){
        cy.get('[ng-reflect-name="labelFirstName"]').type('Michael')
        cy.get('[ng-reflect-name="labelLastName"]').type('Robertson')
        cy.get('[ng-reflect-name="labelCompanyName"]').type('MediCare')
        cy.get('[ng-reflect-name="labelRole"]').type('IT Specialist')
        cy.get('[ng-reflect-name="labelAddress"]').type('17 Farburn Terrace')
        cy.get('[ng-reflect-name="labelEmail"]').type('mrobertson@mc.com')
        cy.get('[ng-reflect-name="labelPhone"]').type('40733652145')
        cy.get('form.ng-dirty > .btn').click()
    }
    round5(){
        cy.get('[ng-reflect-name="labelFirstName"]').type('Doug')
        cy.get('[ng-reflect-name="labelLastName"]').type('Derrick')
        cy.get('[ng-reflect-name="labelCompanyName"]').type('Timepath Inc.')
        cy.get('[ng-reflect-name="labelRole"]').type('Analyst')
        cy.get('[ng-reflect-name="labelAddress"]').type('99 Shire Oak Road')
        cy.get('[ng-reflect-name="labelEmail"]').type('dderrick@timepath.co.uk')
        cy.get('[ng-reflect-name="labelPhone"]').type('40799885412')
        cy.get('form.ng-dirty > .btn').click()
    }
    round6(){
        cy.get('[ng-reflect-name="labelFirstName"]').type('Jessie')
        cy.get('[ng-reflect-name="labelLastName"]').type('Marlowe')
        cy.get('[ng-reflect-name="labelCompanyName"]').type('Aperture Inc.')
        cy.get('[ng-reflect-name="labelRole"]').type('Scientist')
        cy.get('[ng-reflect-name="labelAddress"]').type('27 Cheshire Street')
        cy.get('[ng-reflect-name="labelEmail"]').type('jmarlowe@aperture.us')
        cy.get('[ng-reflect-name="labelPhone"]').type('40733154268')
        cy.get('form.ng-dirty > .btn').click()
    }
    round7(){
        cy.get('[ng-reflect-name="labelFirstName"]').type('Stan')
        cy.get('[ng-reflect-name="labelLastName"]').type('Hamm')
        cy.get('[ng-reflect-name="labelCompanyName"]').type('Sugarwell')
        cy.get('[ng-reflect-name="labelRole"]').type('Advisor')
        cy.get('[ng-reflect-name="labelAddress"]').type('10 Dam Road')
        cy.get('[ng-reflect-name="labelEmail"]').type('shamm@sugarwell.org')
        cy.get('[ng-reflect-name="labelPhone"]').type('40712462257')
        cy.get('form.ng-dirty > .btn').click()
    }
    round8(){
        cy.get('[ng-reflect-name="labelFirstName"]').type('Michelle')
        cy.get('[ng-reflect-name="labelLastName"]').type('Norton')
        cy.get('[ng-reflect-name="labelCompanyName"]').type('Aperture Inc.')
        cy.get('[ng-reflect-name="labelRole"]').type('Scientist')
        cy.get('[ng-reflect-name="labelAddress"]').type('13 White Rabbit Street')
        cy.get('[ng-reflect-name="labelEmail"]').type('mnorton@aperture.us')
        cy.get('[ng-reflect-name="labelPhone"]').type('40731254562')
        cy.get('form.ng-dirty > .btn').click()
    }
    round9(){
        cy.get('[ng-reflect-name="labelFirstName"]').type('Stacy')
        cy.get('[ng-reflect-name="labelLastName"]').type('Shelby')
        cy.get('[ng-reflect-name="labelCompanyName"]').type('TechDev')
        cy.get('[ng-reflect-name="labelRole"]').type('HR Manager')
        cy.get('[ng-reflect-name="labelAddress"]').type('19 Pineapple Boulevard')
        cy.get('[ng-reflect-name="labelEmail"]').type('sshelby@techdev.com')
        cy.get('[ng-reflect-name="labelPhone"]').type('40741785214')
        cy.get('form.ng-dirty > .btn').click()
    }
    round10(){
        cy.get('[ng-reflect-name="labelFirstName"]').type('Lara')
        cy.get('[ng-reflect-name="labelLastName"]').type('Palmer')
        cy.get('[ng-reflect-name="labelCompanyName"]').type('Timepath Inc.')
        cy.get('[ng-reflect-name="labelRole"]').type('Programmer')
        cy.get('[ng-reflect-name="labelAddress"]').type('87 Orange Street')
        cy.get('[ng-reflect-name="labelEmail"]').type('lpalmer@timepath.co.uk')
        cy.get('[ng-reflect-name="labelPhone"]').type('40731653845')
        cy.get('form.ng-dirty > .btn').click()
    }
}

export const onFillInput = new fillInput()