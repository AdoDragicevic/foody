import { User } from "../../models/user";

export const fetchProfile = (userId: string) => (
  fetch(`https://foody-db-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`)
);

export const fetchReplaceProfile = (user: User) => (
  fetch(`https://foody-db-default-rtdb.europe-west1.firebasedatabase.app/users/${user.id}.json`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })
);