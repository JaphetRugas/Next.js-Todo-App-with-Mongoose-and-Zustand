# Next.js Todo App with Mongoose and Zustand

This is a Next.js project for a simple todo application that uses MongoDB with Mongoose for database management and Zustand for state management.

## Getting Started

First, clone the repository and navigate into the project directory:

```bash
git clone <repository-url>
cd <project-directory>
```

Then, install the dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

- `src/`: Contains the source code for the Next.js application.
  - `app/`: Main application folder.
    - `page.tsx`: The main page component of the todo application.
  - `api/`: API routes for interacting with the backend.
  - `components/`: Reusable UI components.
    - `EditTodo.tsx`: Component for editing a todo item.
    - `TodoInput.tsx`: Component for adding a new todo item.
    - `TodoItem.tsx`: Component for displaying a todo item.
  - `dbconfig/`: Database configuration files (e.g., MongoDB connection).
  - `models/`: Mongoose models for defining MongoDB schema.
- `.env`: Environment variables configuration file.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for building server-side rendered web applications.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling tool designed to work in an asynchronous environment.
- [Zustand](https://github.com/pmndrs/zustand): State management library for React.
- [MongoDB](https://www.mongodb.com/): NoSQL database for storing todo data.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework used for styling.
- [Axios](https://axios-http.com/docs/intro): Promise-based HTTP client for making requests to the backend server.

## Learn More

To learn more about Next.js, Mongoose, Zustand, and MongoDB, refer to their respective documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
