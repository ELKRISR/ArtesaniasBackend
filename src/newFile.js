fetch("https://checkout.bold.co/library/boldPaymentButton.js")
  .then(r => console.log(r.status))
  .catch(err => console.error(err));