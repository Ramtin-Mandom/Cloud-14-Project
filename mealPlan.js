const apiKey = "1d3658f299d5432c910aad2df2ca8f71";

// function allowDrop(event) {
//     event.preventDefault();
// }

// function drag(event) {
//     event.dataTransfer.setData("text", event.target.id);
// }

// function handleDrop(event) {
//     event.preventDefault();
//     const data = event.dataTransfer.getData("text");
//     const draggedItem = document.getElementById(data);

//     if (draggedItem) {
//         const targetDay = event.target.closest(".day");
//         if (targetDay) {
//             const targetUl = targetDay.querySelector("ul");
//             if (targetUl) {
//                 // Avoid duplicating remove buttons
//                 const existingRemoveBtn = draggedItem.querySelector(".remove-btn");
//                 if (!existingRemoveBtn) {
//                     const removeBtn = document.createElement("button");
//                     removeBtn.textContent = "Remove";
//                     removeBtn.classList.add("remove-btn");
//                     removeBtn.addEventListener("click", () => removeMeal(draggedItem, draggedItem.id));
//                     draggedItem.appendChild(removeBtn);
//                 }

//                 targetUl.appendChild(draggedItem);
//             }
//         }
//     }
// }

// function removeMeal(mealItem, mealId) {
//     mealItem.remove();

//     const savedPlan = JSON.parse(localStorage.getItem("mealPlan")) || {};
//     Object.keys(savedPlan).forEach((day) => {
//         savedPlan[day] = savedPlan[day].filter((meal) => meal.id !== mealId);
//     });

//     localStorage.setItem("mealPlan", JSON.stringify(savedPlan));
//     addMealBackToSearch(mealItem);
// }

// function addMealBackToSearch(mealItem) {
//     const resultsList = document.getElementById("search-results");

//     if (!resultsList) {
//         console.error("Search results container not found!");
//         return;
//     }

//     const image = mealItem.querySelector("img")?.src;
//     const title = mealItem.querySelector("span")?.textContent;

//     if (!image || !title) {
//         console.error("Meal item is missing required data (image or title)");
//         return;
//     }

//     const listItem = document.createElement("li");
//     listItem.id = mealItem.id;
//     listItem.setAttribute("draggable", "true");
//     listItem.addEventListener("dragstart", drag);

//     const mealImage = document.createElement("img");
//     mealImage.src = image;
//     mealImage.alt = title;

//     const mealTitle = document.createElement("span");
//     mealTitle.textContent = title;

//     listItem.appendChild(mealImage);
//     listItem.appendChild(mealTitle);
//     resultsList.appendChild(listItem);
// }

// function searchMeals(e) {
//     e.preventDefault();

//     const query = document.getElementById("meal-search")?.value.trim();
//     if (!query) return;

//     const resultsList = document.getElementById("search-results");
//     if (!resultsList) {
//         console.error("Search results container not found!");
//         return;
//     }

//     resultsList.innerHTML = "<li>Loading...</li>";

//     const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${apiKey}`;

//     fetch(apiUrl)
//         .then((response) => {
//             if (!response.ok) throw new Error("API request failed");
//             return response.json();
//         })
//         .then((data) => {
//             resultsList.innerHTML = "";

//             if (data.results && data.results.length > 0) {
//                 data.results.forEach((recipe) => {
//                     const listItem = document.createElement("li");
//                     listItem.id = `recipe-${recipe.id}`;
//                     listItem.setAttribute("draggable", "true");
//                     listItem.addEventListener("dragstart", drag);

//                     const image = document.createElement("img");
//                     image.src = recipe.image;
//                     image.alt = recipe.title;

//                     const title = document.createElement("span");
//                     title.textContent = recipe.title;

//                     listItem.appendChild(image);
//                     listItem.appendChild(title);
//                     resultsList.appendChild(listItem);
//                 });
//             } else {
//                 resultsList.innerHTML = "<li>No results found. Try a different query.</li>";
//             }
//         })
//         .catch((error) => {
//             resultsList.innerHTML = "<li>Error fetching recipes. Please try again.</li>";
//             console.error("Error fetching recipes:", error);
//         });
// }

// function initializeMealPlanEvents() {
//     document.querySelectorAll(".day").forEach((day) => {
//         day.addEventListener("dragover", allowDrop);
//         day.addEventListener("drop", handleDrop);
//     });

//     const mealForm = document.getElementById("meal-form");
//     if (mealForm) {
//         mealForm.addEventListener("submit", searchMeals);
//     }

//     const savePlanButton = document.getElementById("save-plan");
//     if (savePlanButton) {
//         savePlanButton.addEventListener("click", () => {
//             const plan = {};

//             document.querySelectorAll(".day").forEach((day) => {
//                 const dayName = day.id;
//                 const meals = Array.from(day.querySelectorAll("li")).map((li) => ({
//                     id: li.id,
//                     title: li.querySelector("span").textContent,
//                     image: li.querySelector("img").src,
//                 }));
//                 plan[dayName] = meals;
//             });

//             localStorage.setItem("mealPlan", JSON.stringify(plan));
//             alert("Meal plan saved!");
//         });
//     }
// }

// if (typeof document !== "undefined") {
//     document.addEventListener("DOMContentLoaded", () => {
//         initializeMealPlanEvents();

//         const savedPlan = JSON.parse(localStorage.getItem("mealPlan"));
//         if (savedPlan) {
//             Object.keys(savedPlan).forEach((day) => {
//                 const dayUl = document.getElementById(day)?.querySelector("ul");
//                 if (dayUl) {
//                     savedPlan[day].forEach((meal) => {
//                         const listItem = document.createElement("li");
//                         listItem.id = meal.id;
//                         listItem.setAttribute("draggable", "true");
//                         listItem.addEventListener("dragstart", drag);

//                         const image = document.createElement("img");
//                         image.src = meal.image;
//                         image.alt = meal.title;

//                         const title = document.createElement("span");
//                         title.textContent = meal.title;

//                         const removeBtn = document.createElement("button");
//                         removeBtn.textContent = "Remove";
//                         removeBtn.classList.add("remove-btn");
//                         removeBtn.addEventListener("click", () => removeMeal(listItem, meal.id));

//                         listItem.appendChild(image);
//                         listItem.appendChild(title);
//                         listItem.appendChild(removeBtn);
//                         dayUl.appendChild(listItem);
//                     });
//                 }
//             });
//         }
//     });
// }









// Drag-and-Drop Functions
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// // Modify the drop function to append the button in a structured way
// function drop(event) {
//   event.preventDefault();
//   const data = event.dataTransfer.getData("text");
//   const draggedItem = document.getElementById(data);

//   if (draggedItem) {
//     const targetUl = event.target.closest(".day").querySelector("ul");
//     targetUl.appendChild(draggedItem);

//     // Add remove button inside a wrapper to control layout
//     const removeBtnWrapper = document.createElement("div");
//     removeBtnWrapper.classList.add("remove-btn-wrapper"); // Add a wrapper div

//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     removeBtn.classList.add("remove-btn");
//     removeBtn.addEventListener("click", () => removeMeal(draggedItem, draggedItem.id));

//     removeBtnWrapper.appendChild(removeBtn);
//     draggedItem.appendChild(removeBtnWrapper);
//   }
// }


function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedItem = document.getElementById(data);

  if (draggedItem) {
    const targetUl = event.target.closest(".day").querySelector("ul");
    targetUl.appendChild(draggedItem);

    // Create a wrapper for the "Remove" button and append it at the bottom
    const removeBtnWrapper = document.createElement("div");
    removeBtnWrapper.classList.add("remove-btn-wrapper");

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => removeMeal(draggedItem, draggedItem.id));

    // Append the button wrapper inside the draggedItem
    removeBtnWrapper.appendChild(removeBtn);
    draggedItem.appendChild(removeBtnWrapper);  // Move the button to the bottom
  }
}


// Add visual feedback for drag-and-drop
document.querySelectorAll(".day").forEach((day) => {
  day.addEventListener("dragover", (e) => day.classList.add("drag-over"));
  day.addEventListener("dragleave", (e) => day.classList.remove("drag-over"));
  day.addEventListener("drop", (e) => day.classList.remove("drag-over"));
});

// Search Meals
document.getElementById("meal-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const query = document.getElementById("meal-search").value.trim();
  if (!query) return;

  const resultsList = document.getElementById("search-results");
  resultsList.innerHTML = "<li>Loading...</li>"; // Show loading message

  // const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${apiKey}&_=${new Date().getTime()}`; // Cache-busting
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&addRecipeNutrition=true&apiKey=${apiKey}&_=${new Date().getTime()}`; // Include nutritional info
  
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error("API request failed");
      return response.json();
    })
    .then((data) => {
      resultsList.innerHTML = ""; // Clear loading message

      if (data.results && data.results.length > 0) {
        data.results.forEach((recipe) => {
          const listItem = document.createElement("li");
          listItem.id = `recipe-${recipe.id}`;
          listItem.setAttribute("draggable", "true");
          listItem.addEventListener("dragstart", drag);

          const image = document.createElement("img");
          image.src = recipe.image;
          image.alt = recipe.title;

          const title = document.createElement("span");
          title.textContent = recipe.title;

          const calories = document.createElement("span");
          calories.textContent = `Calories: ${recipe.nutrition.nutrients[0].amount} kcal`;
          calories.classList.add("calories-info");

          listItem.appendChild(image);
          listItem.appendChild(title);
          listItem.appendChild(calories);
          resultsList.appendChild(listItem);
        });
      } else {
        resultsList.innerHTML = "<li>No results found. Try a different query.</li>";
      }
    })
    .catch((error) => {
      resultsList.innerHTML = "<li>Error fetching recipes. Please try again.</li>";
      console.error("Error fetching recipes:", error);
    });
});

// Remove Meal from Day and Update Plan
function removeMeal(mealItem, mealId) {
  mealItem.remove();

  const savedPlan = JSON.parse(localStorage.getItem("mealPlan")) || {};
  Object.keys(savedPlan).forEach((day) => {
    savedPlan[day] = savedPlan[day].filter((meal) => meal.id !== mealId);
  });

  localStorage.setItem("mealPlan", JSON.stringify(savedPlan));
  addMealBackToSearch(mealItem);
}

// Add Meal Back to Search Results
function addMealBackToSearch(mealItem) {
  const resultsList = document.getElementById("search-results");

  const image = mealItem.querySelector("img").src;
  const title = mealItem.querySelector("span").textContent;
  const calories = mealItem.querySelector(".calories-info").textContent;

  const listItem = document.createElement("li");
  listItem.id = mealItem.id;
  const mealImage = document.createElement("img");
  mealImage.src = image;
  mealImage.alt = title;

  const mealTitle = document.createElement("span");
  mealTitle.textContent = title;

  const mealCalories = document.createElement("span");
  mealCalories.textContent = calories; // Correctly display calories
  mealCalories.classList.add("calories-info");


  listItem.appendChild(mealImage);
  listItem.appendChild(mealTitle);
  listItem.appendChild(mealCalories);
  resultsList.appendChild(listItem);
}

// Save Plan
document.getElementById("save-plan").addEventListener("click", () => {
  const plan = {};

  document.querySelectorAll(".day").forEach((day) => {
    const dayName = day.id;
    const meals = Array.from(day.querySelectorAll("li")).map((li) => ({
      id: li.id,
      title: li.querySelector("span").textContent,
      image: li.querySelector("img").src,
      calories: li.querySelector(".calories-info").textContent, // Include calories
    }));
    plan[dayName] = meals;
  });

  localStorage.setItem("mealPlan", JSON.stringify(plan));
  alert("Meal plan saved!");
});

// Load Plan on Page Load
document.addEventListener("DOMContentLoaded", () => {
  const savedPlan = JSON.parse(localStorage.getItem("mealPlan"));
  if (savedPlan) {
    Object.keys(savedPlan).forEach((day) => {
      const dayUl = document.getElementById(day).querySelector("ul");
      savedPlan[day].forEach((meal) => {
        const listItem = document.createElement("li");
        listItem.id = meal.id;
        listItem.setAttribute("draggable", "true");
        listItem.addEventListener("dragstart", drag);

        const image = document.createElement("img");
        image.src = meal.image;
        image.alt = meal.title;

        const title = document.createElement("span");
        title.textContent = meal.title;

        const calories = document.createElement("span");
        calories.textContent = meal.calories;
        calories.classList.add("calories-info");

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", () => removeMeal(listItem, meal.id));

        listItem.appendChild(image);
        listItem.appendChild(title);
        listItem.appendChild(calories);
        listItem.appendChild(removeBtn);
        dayUl.appendChild(listItem);
      });
    });
  }
});
