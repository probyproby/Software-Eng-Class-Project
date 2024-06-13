const animalList = document.getElementById('animal-list');

// Simulate some animal data (replace with actual data fetching)
const animals = [
  { name: 'Charlie', location: 'Lefke Square', sterilized: true },
  { name: 'Luna', location: 'Near Lefke Beach', sterilized: false },
  { name: 'Max', location: 'Old Lefke Market', sterilized: true },
];

// Function to display animal information
function displayAnimal(animal) {
  const animalItem = document.createElement('div');
  animalItem.classList.add('animal-item');

  const nameElement = document.createElement('p');
  nameElement.textContent = animal.name;
  animalItem.appendChild(nameElement);

  const locationElement = document.createElement('p');
  locationElement.textContent = `Location: ${animal.location}`;
  animalItem.appendChild(locationElement);

  const statusElement = document.createElement('p');
  statusElement.textContent = animal.sterilized ? 'Sterilized' : 'Not Sterilized';
  animalItem.appendChild(statusElement);

  animalList.appendChild(animalItem);
}

// Display initial animal data
animals.forEach(displayAnimal);

// Search functionality (to be implemented)
const searchInput = document.getElementById('animal-search');
searchInput.addEventListener('keyup', function() {
  // Clear existing animal list
  animalList.innerHTML = '';

  // Filter animals based on search criteria (to be implemented)
  const searchTerm = this.value.toLowerCase();
  const filteredAnimals = animals.filter(animal => {
    // Implement search logic (e.g., name, location, status)
    return animal.name.toLowerCase().includes(searchTerm) ||
           animal.location.toLowerCase().includes(searchTerm);
  });

  // Display filtered animals
  filteredAnimals.forEach(displayAnimal);
});








