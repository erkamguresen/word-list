import { data } from '../data.js';
import { isWord } from '../logic/is-word.js';
import { sortStrings } from '../logic/sort-strings.js';
import { updateList } from '../procedures/update-list.js';

const warnings = document.getElementById('warnings');

/**
 * Entry point for users adding a word to the list.
 * It is called each time the user clicks the "add word" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const handleInputWord = (event) => {
  /* -- entry point for adding or removing a word -- */
  // debugger;
  console.log('-- handler: input word --');

  /* -- check the target -- */
  if (event.target.type !== 'button') {
    return;
  }

  /* -- gather user input from DOM -- */
  const text = event.target.form.text.value;
  const action = event.target.value;

  /* -- use the input and data to implement the user story --

    a user can add a new word to the list
      given the input contains non-letters,
        it will not be added
        a warning is displayed
      given the input contains only letters
        it will be added to the words list
        the list will be re-rendered
    a user can remove words from the list
      given the input is not in the list
        a warning is posted
      given the input is in the list
        it is removed
        the list is re-rendered
  */

  // ... write some code ...
  const warningElement = document.getElementById('warnings');
  switch (action) {
    case 'add':
      if (isWord(text)) {
        if (!data.words.includes(text)) {
          data.words.push(text);
        } else {
          warningElement.innerText = `"${text}" is aldready in the list`;
          setTimeout(() => {
            warningElement.innerText = '';
          }, 3000);
        }

        console.log('it is a word');
      } else {
        console.log('it is not a word');

        warningElement.innerText = `"${text}" is not a word`;
        setTimeout(() => {
          warningElement.innerText = '';
        }, 3000);
      }
      break;

    case 'remove':
      //TODO remove word from the list
      if (data.words.includes(text)) {
        //TODO remove the word & render
        console.log('it has the word');
      } else {
        console.log(` "${text}" is not in the list'`);

        warningElement.innerText = `"${text}" is not in the list`;
        setTimeout(() => {
          warningElement.innerText = '';
        }, 3000);
      }
      break;

    default:
      break;
  }

  /* -- render new words -- */
  const sorted = sortStrings(data.words, data.sort);
  updateList(sorted);
};
