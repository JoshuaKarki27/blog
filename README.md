# Blog Web Application
## Project Description
The web application must be designed to act as a blog in which the user:
* creates an account and profile 
* logs in using their registration credentials 
* can post, delete, and edit blogs to their profile, which can be viewed, liked, and commented on by other users
## Goal/Motivation
The goal of this project is to strictly follow an agile approach to iteratively develop and gather requirements from the client. It also allows me to gain practical experience in agile and web development with angular. 

## Installation guide
### Prerequesite 
You must have [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [angular](https://v17.angular.io/guide/setup-local) installed (in that order) by following the steps in the links. 

### Step One: Setup project destination
Create a directory for the application and navigate to it (mkdir app, cd app)

### Step Two: Run setup script
To install the dependencies and node modules, copy and paste the following setup script into the project directory:
```bash
echo "Starting setup..."

if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install it and try again."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install it and try again."
    exit 1
fi

if [ -f "package.json" ]; then
    echo "Installing Node.js dependencies..."
    npm install
else
    echo "No package.json found. Skipping Node.js dependencies installation."
fi

if [ -f "angular.json" ]; then
    if ! command -v ng &> /dev/null; then
        echo "Angular CLI is not installed. Installing globally..."
        npm install -g @angular/cli
    fi
    echo "Angular project detected. Running ng install for caching..."
    ng cache clean
fi

echo "Setup complete! You can now start the project."

```

Once it is installed, run the script by typing in the command: 
```bash
bash setup.sh
```

### Step Three: Run The Project 
Lastly run the following command to locally host the project:
```bash
ng serve
```
