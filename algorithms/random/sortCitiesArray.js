/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */

function mysort(a, b) {
  if (a.country > b.country) return 1;
  if (a.country < b.country) return -1;
  if (a.city > b.city) return 1;
  if (a.city < b.city) return -1;
  return 0;
}

const sortCitiesArray = (arr, fn) => arr.sort(fn);

const arr = [
  { country: "Russia", city: "Moscow" },
  { country: "Belarus", city: "Minsk" },
  { country: "Poland", city: "Warsaw" },
  { country: "Russia", city: "Saint Petersburg" },
  { country: "Poland", city: "Krakow" },
  { country: "Belarus", city: "Brest" },
];

console.log(sortCitiesArray(arr, mysort));
