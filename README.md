# React Movies Project Demo
## Project Description: 
"Cinema Home" is a React Application with In-Memory Database, a dynamic, interactive web application that allows users to browse a list of movies, watch trailers, and leave comments for each movie. The app is built entirely on the client-side. While the app does not have server-side persistence, it provides a simple and responsive user experience. Additionally, the project includes a Dockerfile and Docker Compose configuration to easily run the app in a containerized environment.

## Features:
1. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.
2. In-Memory Database: Utilizes an in-memory database to store and manage project data, allowing for fast access without the need for a backend server.
3. Movie List Display: Displays a list of movie items, each featuring a poster, title, description, watching the trailer or add comments.
4. Docker Support: Includes a Dockerfile and Docker Compose file for containerized deployment, making it easy to set up and run the application in a consistent environment.
5. GitHub Integration: Direct links to GitHub repositories for easy access to source code and project details.

## Technologies Used:
1. Frontend: React.js, JSX, CSS.
2. State Management: React Hooks.
3. Routing: React Router.
4. In-Memory Database: Local state management for simulating a database.
5. Docker: Docker and Docker Compose for containerized application deployment.
6. Version Control: Git, GitHub.

## Project Structure:
1. Components: Components(some of them reusable) for different sections of the project, including Menu.
2. Pages: Separate pages for Home and Watch List.
3. Data: A JavaScript file with JSON objects to simulate the in-memory database containing project information.

## To run this project locally, follow these steps:
1. Clone the repository: https://github.com/goshy29/react-movies-demo.git
2. Open the project with your code editor(VS Code) and open New Terminal
3. To install dependencies, at the Terminal run: npm install
4. Start the development server: npm start

Run the App with Docker:
1. Into the Terminal, run: docker-compose up -d
2. To stop services: docker-compose down

Open the application in your browser: http://localhost:3000
