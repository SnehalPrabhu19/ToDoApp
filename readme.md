# To-Do App
Here is a simple ToDo application built using MERN stack. 

![image](https://github.com/SnehalPrabhu19/ToDoApp/assets/92414870/9048d42e-186c-4ffd-b287-4fef0d0f6f6a)



## Description
This project implements a basic To-do application using MongoDB, Express.js, React.js and Node.js. It allows users to add, view, update and delete tasks from a list of to-do tasks. 

## Features
1. Add a new task to your list
2. View the list of task to complete
3. Mark a task as complete to change its status
4. Delete a completed task

## Prerequisites
You may need to install some modules for running this application
1. Visual Studio Code installed 
2. Node.js and npm 
3. MongoDB Compass installed 

## Installation
1. Clone this repository
```
git clone https://github.com/SnehalPrabhu19/ToDoApp.git
```

2. Navigate to the project directory in your VS code terminal
```
cd TO-DO APP
```

3. Install the dependencies mentioned above
```
npm init
npm install express mongoose cors 
```

4. Set up MongoDb and get the connection string
   Download MongoDB Compass and get a new connection string to connect to the database. Update the index.js file in the server directory with the connection string to connect with your oen database. 

## Usage
1. Start the Server
```
npm start
```
The server will run on 'http://localhost:3000'

2. Start the React app
```
cd client
npm start
```
The React App will run on 'http://localhost:3001'. You can change the port as required. Make sure to update the ports in App.js file in the client directory before you run the app.

## API Endpoints used
○ GET /tasks: Retrieve a list of all tasks.

○ POST /tasks: Create a new task.

○ PUT /tasks/:id: Update an existing task.

○ DELETE /tasks/:id: Delete a task.

