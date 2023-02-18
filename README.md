# Project REST-Rant

REST-Rant is an app where users can review restaurants.

# Routes

| Method | Path               | Purpose                                          |
| ------ | ------------------ | ------------------------------------------------ |
| GET    | /                  | Home Page                                        |
| GET    | /places            | Places index page                                |
| POST   | /places            | Create new place                                 |
| GET    | /places/new        | Form page for creating new place                 |
| GET    | /places/:id        | Details about a particular place                 |
| PUT    | /places/:id        | Update a particular place                        |
| GET    | /places/:id/edit   | Form page for editing an existing place          |
| DELETE | /places/:id        | Delete a particular place                        |
| POST   | /places/:id/rant   | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rantId | Delete a rant (comment) about a particular place |
| GET    | *                  | 404 page (matches any route not defined above)   |

# Planning

## User Stories

1. As a user, I want all possible URLs to take me to a visually appealing page (No ugly blank 404 pages)
2. As a user, I want to be able to view a list of places
3. As a user, I want to be able to view details about specific places
4. As a user, I want to be able to post rants about places I have visited
5. As a user, I want to be able to delete rants about places that I no longer want posted online
