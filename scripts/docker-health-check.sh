#!/bin/bash

# Check if the database container is running
DB_CONTAINER_NAME="h3micro_db"
if [ "$(docker ps -q -f name=$DB_CONTAINER_NAME)" ]; then
    echo "Database container ($DB_CONTAINER_NAME) is running."

    # Add database-specific health checks here if needed

else
    echo "Database container ($DB_CONTAINER_NAME) is not running."
fi

# Check if the client container is running
CLIENT_CONTAINER_NAME="h3micro_client"
if [ "$(docker ps -q -f name=$CLIENT_CONTAINER_NAME)" ]; then
    echo "Client container ($CLIENT_CONTAINER_NAME) is running."

    # Add client-specific health checks here if needed

else
    echo "Client container ($CLIENT_CONTAINER_NAME) is not running."
fi

# Check if the server container is running
SERVER_CONTAINER_NAME="h3micro_server"
if [ "$(docker ps -q -f name=$SERVER_CONTAINER_NAME)" ]; then
    echo "Server container ($SERVER_CONTAINER_NAME) is running."

    # Add server-specific health checks here if needed

else
    echo "Server container ($SERVER_CONTAINER_NAME) is not running."
fi
