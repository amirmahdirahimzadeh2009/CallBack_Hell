function welcomeCustomer(customer, callback) {
  console.log(`Welcome, ${customer}`);
  setTimeout(() => {
    callback(customer);
  }, 2000);
}
function cookMeal(customer, callback) {
  console.log(`Cooking meal for ${customer}`);
  setTimeout(() => {
    callback(customer);
  }, 3000);
}
function relayOrderToKitchen(customer, callback) {
  console.log(`Relaying ${customer}'s order to the kitchen`);
  setTimeout(() => {
    callback(customer);
  }, 3000);
}
function prepareIngredients(customer, callback) {
  console.log(`Preparing ingredients for ${customer}`);
  setTimeout(() => {
    callback(customer);
  }, 2000);
}
function plateMeal(customer, callback) {
  console.log(`Plating meal for ${customer}`);
  setTimeout(() => {
    callback(customer);
  }, 2000);
}
function serveMeal(customer, callback) {
  console.log(`Serving meal to ${customer}`);
  setTimeout(() => {
    callback(customer);
  }, 2500);
}
function takeOrder(customer, callback) {
  console.log(`Taking order from ${customer}`);
  setTimeout(() => {
    callback(customer);
  }, 3000);
}
function processPayment(customer, callback) {
  console.log(`Processing payment for ${customer}`);
  setTimeout(() => {
    callback(customer);
  }, 4000);
}
function checkOnCustomer(customer, callback) {
  console.log(`Checking on ${customer}`);
  setTimeout(() => {
    callback(customer);
  }, 2000);
}
function clearTable(customer, callback) {
  console.log(`Clearing table for ${customer}`);
  setTimeout(() => {
    callback(customer);
  }, 2000);
}
function thankCustomer(customer, callback) {
  console.log(`Thank you for dining with us, ${customer}!`);
  setTimeout(() => {
    callback(customer);
  }, 2500);
}
function presentBill(customer, callback) {
  console.log(`Presenting bill to ${customer}`);
  setTimeout(() => {
    callback(customer);
  }, 5000);
}
welcomeCustomer("karim", function (customer) {
  takeOrder(customer, function (customer) {
    relayOrderToKitchen(customer, function (customer) {
      prepareIngredients(customer, function (customer) {
        cookMeal(customer, function (customer) {
          plateMeal(customer, function (customer) {
            serveMeal(customer, function (customer) {
              checkOnCustomer(customer, function (customer) {
                clearTable(customer, function (customer) {
                  presentBill(customer, function (customer) {
                    processPayment(customer, function (customer) {
                      thankCustomer(customer, function (customer) {
                        console.log(`All tasks are completed for ${customer}`);
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
