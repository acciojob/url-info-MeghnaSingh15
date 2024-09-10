//your JS code here. If required.
() => { 
    cy.visit(baseUrl); 
    cy.on("window:alert", str => { 
        const expectedAlerts = ["The length of the URL is: 12"]; // update this line
        expect(expectedAlerts).to.include(str); 
    }); 
}
let str = location.href;
let n = str.length;

alert("The length of the URL is:" + n);
