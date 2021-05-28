/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {string[]} [toSort=''] - The array of strings to sort.
 * @param {string} [sortType='oldest'] - How to sort the strings, 6 options.
 * - oldest: from oldest to newest
 * - newest: from newest to oldest
 * - shortest: from shortest to longest
 * - longest: from longest to shortest
 * - a: alphabetical order
 * - z: reverse alphabetical order
 * if the sortType is not one of these 6 options, a copy of toSort is returned
 * @returns {string[]} a new sorted array containing the same strings as toSort
 */
export const sortStrings = (toSort = '', sortType = '') => {
  const returnArray = [...toSort];

  switch (sortType) {
    case 'oldest':
      // default squence
      break;

    case 'newest':
      returnArray.reverse();
      break;
    case 'a':
      returnArray.sort();
      break;

    case 'z':
      returnArray.sort();
      returnArray.reverse();
      break;

    case 'shortest':
      returnArray.sort((a, b) => {
        return a.length - b.length;
      });
      break;

    case 'longest':
      returnArray
        .sort((a, b) => {
          return a.length - b.length;
        })
        .reverse();
      break;

    default:
      break;
  }

  return returnArray;
};
