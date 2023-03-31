# For the nestapp service:

container_name is used to set the name of the container

image is used to set the image to use, in our case, it's francescoxx/nestapp:1.0.0 change francescoxxx with your docker hub username

build is used to build the image from the Dockerfile. we are using the current directory as the build context.

ports is used to expose the port 3000 to the host

environment is used to set the environment variables: DB_TYPE, PG_USER, PG_PASSWORD, PG_DB, PG_PORT, PG_HOST. these variables will be used by the application to connect to the database

depends_on is used to tell docker-compose that the db service must be started before the nestapp service.

# For the db service:

container_name is used to set the name of the container

image is used to set the image to use, in our case, it's postgres:12

environment is used to set the environment variables: POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB

ports is used to expose the port 5432 to the host

volumes is used to mount a volume to the container. In our case, we are mounting the pgdata volume to the /var/lib/postgresql/data directory.

###  We also define the pgdata volume at the end of the file.