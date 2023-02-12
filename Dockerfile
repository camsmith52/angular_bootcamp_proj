# # Use Node.js as the base image
# FROM node:14

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the code to the container
# COPY . .

# EXPOSE 8080

# # Serve the Angular app
# CMD ["npm", "start"]

FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]