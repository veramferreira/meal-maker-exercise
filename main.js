const menu = {    // The menu object will hold the meal and price of Today’s Special as properties and they shouldn’t be altered directly.
  _meal: '',
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') { 
    return this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {   // To safely reassign the two menu properties, we can add setters that type check the values being assigned.
    if (typeof priceToCheck === 'number') {
    return this._price = priceToCheck;
    }
  },

  get todaysSpecial() {   // Now it’s time to safely return the values of the _meal and _price properties in a readable form. Instead of directly accessing the properties, we can use a getter method that proactively checks if a meal and price have been properly set, before returning the values.
    if (this._meal && this._price) {
      return `Today’s Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

menu.meal = 'Pizza';
menu.price = 10;

console.log(menu.todaysSpecial)
