#!/bin/bash

# Check if the user provided a directory name and app name
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: $0 <directory-name> <react-app-name>"
  exit 1
fi

# Check if npx and npm are installed
if ! command -v npx &> /dev/null || ! command -v npm &> /dev/null; then
  echo "Error: npx and npm must be installed. Please install Node.js first."
  exit 1
fi

# Create the project directory
mkdir -p "$1" && cd "$1" || { echo "Failed to create directory."; exit 1; }

# Create React App
npx create-react-app "$2" || { echo "Failed to create React app."; exit 1; }

cd "$2" || { echo "Failed to navigate to React app directory."; exit 1; }

# Install dependencies
npm install web-vitals || { echo "Failed to install dependencies."; exit 1; }

# Start the development server
npm start
