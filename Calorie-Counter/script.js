// Calorie Counter
// Get references to HTML elements
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

// Remove unwanted characters from the input string
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

// Check if the input string is in scientific notation
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

// Add entry input fields dynamically based on the selected dropdown option
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

// Calculate and display the remaining calories based on user input
function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  // Get input fields for each meal and exercise
  const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
  const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
  const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
  const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
  const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

  // Calculate calories for each category
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  // Check for errors and display the result
  if (isError) {
    return;
  }

 // Calculate consumed, remaining calories, and determine surplus or deficit
const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
const surplusOrDeficit = remainingCalories >= 0 ? 'Surplus' : 'Deficit';

// Display the result in the output element
output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
`;

// Make the output element visible
output.classList.remove('hide');

}

// Sum up the calories from a list of input fields
function getCaloriesFromInputs(list) {
  let calories = 0;

  for (let i = 0; i < list.length; i++) {
    const currVal = cleanInputString(list[i].value);
    const invalidInputMatch = isInvalidInput(currVal);

    // Display an alert for invalid input and set error flag
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }

    calories += Number(currVal);
  }
  return calories;
}

// Clear all form inputs and output
function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  for (let i = 0; i < inputContainers.length; i++) {
    inputContainers[i].innerHTML = '';
  }

  budgetNumberInput.value = '';
  output.innerText = '';
  output.classList.add('hide');
}

// Event listeners for button clicks
addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener('click', clearForm);
