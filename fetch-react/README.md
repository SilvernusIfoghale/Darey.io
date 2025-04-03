# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Mini Project Assessment: Fetch and Display List from an API

## Objective

The goal of this project is to build a functional React component that fetches data from an API and displays a list of items. You will also create a reusable list component that follows best practices in component reusability and separation of concerns.

## Task Breakdown

### 1. Fetching Data from an API

- Use the Fetch API or Axios to retrieve data from a public API (e.g., JSONPlaceholder, Rick and Morty API, or any other free API).
- Store the fetched data in React state using the `useState` hook.
- Use the `useEffect` hook to fetch data when the component mounts.
- Handle loading states and error handling gracefully.

### 2. Creating a Reusable List Component

- Develop a reusable `ListComponent` that takes in an array of items as props.
- Render each item dynamically inside the list.
- Ensure flexibility by allowing customization through props (e.g., passing a custom render function for list items).

### 3. Rendering the List in a Parent Component

- Use the `ListComponent` inside a parent component and pass the fetched data as props.
- Display a loading indicator while data is being fetched.
- Show an error message if the API request fails.

## Requirements

1. Use **React functional components** with hooks (`useState`, `useEffect`).
2. Ensure the list component is reusable and dynamic.
3. Handle edge cases (empty list, API errors).

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. **Create a new React app**:
   You can use Create React App (CRA) to set up your project:
   ```bash
   npx create-react-app fetch-list-app
   cd fetch-list-app


   ```
