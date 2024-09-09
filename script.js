//your JS code here. If required.
//let str = window.location.href;
//let n = str.length;

//alert("The length of the URL is:" + n);
cy.url().then((url) => {
  let n = url.length;
  cy.log("The length of the URL is: " + n);
});