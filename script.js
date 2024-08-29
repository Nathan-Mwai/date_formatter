const currentDateParagraph = document.getElementById(`current-date`);
const dateOptionsSelectElement = document.getElementById(`date-options`);

const date = new Date(); // Creates the date of the day as well as the time
const day = date.getDate(); //This gives the date of that day only
const month = date.getMonth() + 1; // This gives month from 0-11. I add 1 so that it can give 1-12
const year = date.getFullYear(); // This returns which year we are in
const hours = date.getHours(); // Returns the time of day in 24hr clock system
const minutes = date.getMinutes(); //Returns minute

const formattedDate = `${day}-${month}-${year}`;
// .split() is used to split a string into an array but in the parameters using(``),(` `) or (`-`) have different effects. The first one makes all letters be surrounded in a string. The second one makes words be surrounded by a string. The third one acts adds commas to separate the words
// .reverse() interchanges the words where the last word comes first and the first word comes last
// .join() combines all strings to 1 . Adding (``) removes the arrays and strings and makes it be like a word
// const exampleSentence = `selur pmaCedoCeerf`.split(``).reverse().join(``)
// console.log(exampleSentence);
currentDateParagraph.textContent = formattedDate;
dateOptionsSelectElement.addEventListener(`change`, () => {
  // The `change` event listener detects when value of html element has changed and initializes the function
  switch (dateOptionsSelectElement.value) {
    case `yyyy-mm-dd`:
      currentDateParagraph.textContent = formattedDate
        .split(`-`)
        .reverse()
        .join(`-`);
      break;
    case `mm-dd-yyyy-h-mm`:
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
    default:
      currentDateParagraph.textContent = formattedDate;
  }
});
