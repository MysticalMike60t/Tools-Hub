# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the client folder and package.json/package-lock.json to the container
COPY ./client /app/client
COPY package*.json /app/

# Install client dependencies
RUN cd client && npm install

# Build the client application
RUN cd client && npm run build

# Return to the main working directory
WORKDIR /app

# Install server dependencies
RUN npm install

# Expose the port your application listens on (if applicable)
EXPOSE 8080

# Start your application
CMD ["npm", "start"]
