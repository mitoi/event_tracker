# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Expose the port that the Node.js app listens on
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]
