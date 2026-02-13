/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (price = 0)
 *   - International orders over $100 get FREE shipping (price = 0)
 *
 * Rules:
 *   - If weight is 0 or negative, price = -1
 *   - If orderTotal is negative, price = -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @param {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */
export function calculateShipping(weight, country, orderTotal) {
let price;
  if (orderTotal < 0 || weight <= 0) {
    return -1;
  } else {
    if (country === "US") {
      if (weight > 0 && weight <= 1) {
        price = 5;
      } else if (weight > 1 && weight <= 5) {
        price = 10;
      }
      else {
        price = 15;
      }
    } else {
      if (weight > 0 && weight <= 1) {
        price = 15;
      } else if (weight > 1 && weight <= 5) {
        price = 25;
      }
      else {
        price = 40;
      }

    }
  }

  if (country === "US") {
    if (orderTotal > 50) {
      return 0;
    }
  } else {
    if (orderTotal > 100) {
      return 0;
    }
  }

  return price;
}
