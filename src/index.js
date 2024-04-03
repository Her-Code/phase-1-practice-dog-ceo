// console.log('%c HI', 'color: firebrick')

// // document.addEventListener("DOMContentLoaded", function () {
// //     const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// //     fetch(imgUrl)
// //         .then(response => response.json())
// //         .then(data => {
// //             const dogImagesContainer = document.getElementById("dogImages");
// //             data.message.forEach(imageUrl => {
// //                 const imgElement = document.createElement("img");
// //                 imgElement.src = imageUrl;
// //                 imgElement.alt = "Dog";
// //                 dogImagesContainer.appendChild(imgElement);
// //             });
// //         })
// //         .catch(error => {
// //             console.error("Error fetching dog images:", error);
// //         });
// // });

document.addEventListener("DOMContentLoaded", function () {
    const dogImageContainer = document.getElementById("dog-image-container");
    const breedDropdown = document.getElementById("breed-dropdown");
    const dogBreedsList = document.getElementById("dog-breeds");

    // Fetch dog images
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                imgElement.alt = "Dog";
                dogImageContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error("Error fetching dog images:", error);
        });

    // Fetch dog breeds
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const listItem = document.createElement("li");
                listItem.textContent = breed;
                dogBreedsList.appendChild(listItem);

                // Add event listener to change font color on click
                listItem.addEventListener("click", function () {
                    listItem.style.color = "blue"; // Change the font color to blue on click
            
            });

            });
        })
        .catch(error => {
            console.error("Error fetching dog breeds:", error);
        });

    // Filter dog breeds by starting letter
    breedDropdown.addEventListener("change", function () {
        const selectedLetter = breedDropdown.value;
        const listItems = dogBreedsList.getElementsByTagName("li");
        for (let i = 0; i < listItems.length; i++) {
            const breed = listItems[i].textContent;
            if (breed.startsWith(selectedLetter)) {
                listItems[i].style.display = "block";
            } else {
                listItems[i].style.display = "none";
            }
        }
        renderDogBreeds();

        // Event listener for dropdown change
        breedDropdown.addEventListener("change", function () {
            const selectedLetter = breedDropdown.value;
            filterBreeds(selectedLetter);
        });
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const dogImageContainer = document.getElementById("dog-image-container");
//     const breedDropdown = document.getElementById("breed-dropdown");
//     const dogBreedsList = document.getElementById("dog-breeds");

//     // Fetch dog images
//     fetch("https://dog.ceo/api/breeds/image/random/4")
//         .then(response => response.json())
//         .then(data => {
//             data.message.forEach(imageUrl => {
//                 const imgElement = document.createElement("img");
//                 imgElement.src = imageUrl;
//                 imgElement.alt = "Dog";
//                 dogImageContainer.appendChild(imgElement);
//             });
//         })
//         .catch(error => {
//             console.error("Error fetching dog images:", error);
//         });

//     // Fetch all dog breeds and render them
//     function renderDogBreeds() {
//         fetch("https://dog.ceo/api/breeds/list/all")
//             .then(response => response.json())
//             .then(data => {
//                 const breeds = Object.keys(data.message);
//                 breeds.forEach(breed => {
//                     const listItem = document.createElement("li");
//                     listItem.textContent = breed;
//                     dogBreedsList.appendChild(listItem);
//                 });
//             })
//             .catch(error => {
//                 console.error("Error fetching dog breeds:", error);
//             });
//     }

//     // Function to generate options for dropdown
//     function generateDropdownOptions() {
//         const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//         alphabet.forEach(letter => {
//             const option = document.createElement("option");
//             option.value = letter;
//             option.textContent = letter;
//             breedDropdown.appendChild(option);
//         });
//     }

//     // Function to filter dog breeds based on selected letter
//     function filterBreeds(letter) {
//         const listItems = dogBreedsList.getElementsByTagName("li");
//         for (let i = 0; i < listItems.length; i++) {
//             const breed = listItems[i].textContent;
//             if (breed.startsWith(letter)) {
//                 listItems[i].style.display = "block";
//             } else {
//                 listItems[i].style.display = "none";
//             }
//         }
//     }

//     // Render all dog breeds on page load
//     renderDogBreeds();

//     // Generate dropdown options on page load
//     generateDropdownOptions();

//     // Event listener for dropdown change
//     breedDropdown.addEventListener("change", function () {
//         const selectedLetter = breedDropdown.value;
//         filterBreeds(selectedLetter);
//     });
// });
