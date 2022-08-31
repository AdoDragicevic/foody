export const fetchRestaurants = () => (
  fetch("https://foody-db-default-rtdb.europe-west1.firebasedatabase.app/restaurants.json")
);

export const fetchRestaurant = (id: string) => (
  fetch(`https://foody-db-default-rtdb.europe-west1.firebasedatabase.app/restaurants/${id}.json`)
);