# FROM node:16 is used to tell Docker which image to use as a base image.
FROM node:16

# WORKDIR is the directory where the commands will be executed. In our case, it's the /app directory.
WORKDIR /app

# COPY package*.json is used to copy the package.json and package-lock.json files to the /app directory.
COPY package*.json ./

# RUN yarn is used to install the dependencies.
RUN yarn 

# COPY . . is used to copy all the files from the current directory to the /app directory.
COPY . .

# RUN yarn build is used to build the application.
RUN yarn build

# EXPOSE is used to expose the port 3000 to the host.
EXPOSE 3000

# CMD is used to execute a command when the container is started, in our case, it's "yarn start:prod".
CMD ["yarn", "start:prod"]









