# Consulting Breakable Toy User Stories

## Basic

### Squid Index Page

```no-format
As a user
I want to see my squids
so that I know what my squid battalion looks like
```

Acceptance Criteria

- Visiting `/squids` displays all your squids
- Squids have the following attributes: name, species, special power (an enum of "ink", "camouflage", "bioluminescence"), number of victories (default: 0). Name, species, and number of victories cannot be null.
- Squids are sorted by creation date, most recent first

Implementation Details

- Create a seeder to populate your app with some fake data in development. Use the `rosie` npm package to create a factory that your seeder will use.
- Use React Query to retrieve your squids
- Your page should be nicely styled using margins, background color, and columns
- No need to use a react table package

### Paginate Those Squids!

```no-format
As a user
I want to only see ten squids at a time
so that I don't have to scroll or wait to see my squids
```

Acceptance Criteria

- The index page displays 10 squids
- There are back/forward, all-the-way-back/all-the-way-forward, and jump to page buttons/functionalities

Implementation Details

- Squids should be paginated _on the server side_, not the client side
- React Query has some good documentation on how to provide a fast user experience with paginated data

### Moar Squids

```no-format
As a user
I want to be able to add more squids
so that I can build an army that will take over the world
```

Acceptance Criteria

- I can add new squids via a form on the index page
- I can click a refresh button to retrieve the updated data after submitting my form
- Special powers are a set of checkboxes
- If I do not provide all required data, I see an informative error message

Implementation Details

- Use React Hook Form, including validating for required fields

### Fewoar Squids

```no-format
As a user
I want to be able to delete some squids
so that I can account for squids that have gone to a farm upstate
```

Acceptance Criteria

- I can soft-delete a squid by clicking a delete button next to that squid's record on the index page
- Clicking the delete button brings up a modal
- In that modal, I need to type "DELETE" to confirm that I really wanna delete a squid
- Deleted squids are not viewable on the index page

Implementation Details

- Allow "soft deletion" by creating a `deletedAt` field on your squid table
- Create a modifier on the Squid model that lets you easily filter out squids with non-null `deletedAt` values

## Intermediate

### Typescriptify

Implement Typescript in your app

### Optimistic Squids

```no-format
As a user
I want my squid list to update lickety-split when I submit a new squid
So that I can get on with my life
```

Acceptance Criteria

- The squid list is updated optimistically upon form submission
- If my form submission errors, the optimistic update is reversed and an error is displayed

Implementation Details

- React Query docs, yo!

### Bulky Squids

```no-format
As a user
I want to be able to bulk import squids from a CSV file
so that I can import my squids from other squid-management software
```

Acceptance Criteria

- There is a link to open a modal that allows me to select or drag and drop a file
- I can then submit the form and see my squid list updated with my new squids

Implementation Details

- React Dropzone is good for file drag/drop
- You don't need to handle for exceptionally long CSVs
- The modal has its own path (so, I can navigate to `/squids/bulk-import` and see the index page with the modal displayed and closing out the modal returns the user to `/squids`)

### Authenticate the Squidmaster

```no-format
As an admin
I only want authenticated users to be able to see squids
so that I can protect crucial squid-related intellectual property
```

Acceptance Criteria

- Allowed users are seeded in the database (username and password; no sign-up page)
- A valid user can successfully sign in and out of the app
- An invalid user sees an error message when they attempt to sign in

Implementation Details

- Use a context to manage the user state to make it easy to access the user data (via a useUser hook) throughout the app (rather than props-drilling)

### Infinite Squids

```no-format
As a user
I want to optionally be able to view my squids in an infinitely scrolling list
so that I can feel like a cool Facebook or Twitter user
```

Acceptance Criteria

- On the index page, I can toggle between "Manual" and "Infinite Scroll"
- Manual scroll functions as before; infinite scroll

Implementation Details

- The goal with this story is to give you an opportunity to play with infinite scroll without destroying your previous work -- don't feel pressured to keep your manual and infinite scroll components as mutually DRY as possible

Template should support mixed JS/TS
Would be nice if template had example for checking if prettier and eslint are properly configured
Unit tests for all methods
Tests for any helpers

## Potential Advanced Topics

- Use a bull worker and streams to process large CSVs
