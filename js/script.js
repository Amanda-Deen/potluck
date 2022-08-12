// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign items button (appears after the guest list is full)
const assignButton = document.querySelector(".assign");
//popualtes guest's name and their assigned dish
const assignedItems = document.querySelector(".assigned-items");

// Guest List
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const guest = guestInput.value;
    if (guest !== "") {
      addToList(guest);
      updateGuestCount();
      clearInput();
    }
  }
});

const clearInput = function (e) {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 12) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//Dishes assignment
const assignItems = function () {
  const potluckItems = [
    "hotdogs",
    "hotdog buns",
    "Chips",
    "Veggie Tray",
    "Sweet & Unsweet Tea",
    "Watermellon",
    "Condiments",
    "Cutlery & Napkins",
    "Plates & Cups",
    "Potato Salad",
    "Taco Salad",
    "Dessert"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disavled = true;
});
