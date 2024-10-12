# Use an official Node.js image as the base image
FROM node:20.15.1

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Set the base path for Vite
ENV BASE_PATH /

# Build the React application
RUN npm run build

# Serve the app using a simple server like serve
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5000

# Command to start the app using serve
CMD ["serve", "-s", "dist", "-l", "5000"]
