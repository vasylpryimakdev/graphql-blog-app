# GraphQL Blog App

A sample blog application with a React frontend and a TypeScript GraphQL backend.

- Frontend: React, React Router, Apollo Client, Bootstrap
- Backend: Apollo Server, Prisma, PostgreSQL, JWT authentication
- GraphQL API for posts, user profiles, signup/signin, and post management

## Project structure

- `client/` - React application
- `server/` - Apollo GraphQL server with Prisma and PostgreSQL
- `server/prisma/schema.prisma` - Prisma schema and database models

## Features

- Browse published posts
- Signup / signin with email and password
- View user profile and posts
- Create new posts from profile page when signed in
- GraphQL API with queries and mutations

## Requirements

- Node.js (14+ recommended)
- npm
- PostgreSQL database

## Setup

### 1. Backend

1. Navigate to the server folder:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in `server/` with your database URL:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/blogapp"
```

4. Generate Prisma client and apply schema to the database.

If you use Prisma migrations, run:

```bash
npx prisma migrate dev --name init
```

Otherwise you can create the client directly:

```bash
npx prisma generate
```

````

5. Start the server:

```bash
npm run start:dev
````

The GraphQL server will start on the default Apollo Server port (usually `http://localhost:4000`).

### 2. Frontend

1. Open a new terminal and navigate to the client folder:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the React app:

```bash
npm start
```

The frontend runs on `http://localhost:3000` by default.

## GraphQL schema

### Queries

- `me`: current signed-in user
- `posts`: list of posts
- `profile(userId: ID!)`: user profile by ID

### Mutations

- `signup(credentials: CredentialsInput!, name: String!, bio: String!)`: register a new user
- `signin(credentials: CredentialsInput!)`: authenticate and receive a JWT token
- `postCreate(post: PostInput!)`: create a new post
- `postUpdate(postId: ID!, post: PostInput!)`: update a post
- `postDelete(postId: ID!)`: delete a post
- `postPublish(postId: ID!)`: publish a post
- `postUnpublish(postId: ID!)`: unpublish a post

### Types

- `Post`: id, title, content, createdAt, published, user
- `User`: id, name, email, posts
- `Profile`: id, bio, isMyProfile, user
- `AuthPayload`: userErrors, token
- `PostPayload`: userErrors, post

## Client routes

- `/posts` - posts feed
- `/signup` - register page
- `/signin` - login page
- `/profile/:id` - user profile page

## Notes

- The client stores the JWT token in `localStorage` after signup or signin.
- The backend reads the `Authorization` header to authenticate requests.
- The server and client are separate apps; run both concurrently during development.

## Troubleshooting

- If the app cannot connect to the database, verify `DATABASE_URL` and PostgreSQL access.
- If GraphQL queries fail, confirm the backend is running and the client is pointing to the correct server URL.