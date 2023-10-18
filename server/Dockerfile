# Use the official Node.js image as a base image
FROM node:18.14.0-alpine3.14

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./
COPY tsconfig*.ts ./

# Install application dependencies
RUN pnpm install

# Copy the rest of the application source code
COPY . .

# Expose the port that your Nest.js application is listening on
EXPOSE 3000

# Start the Nest.js application
CMD ["pnpm", "run", "start:prod"]
