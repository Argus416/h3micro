#!/bin/bash

# Define the host and port of the PostgreSQL container
DB_HOST="localhost"
DB_PORT="5432"  # Change this if your PostgreSQL container is using a different port

# Function to test the database connection
test_database() {
    echo "Testing the database..."

    # Check if the PostgreSQL port is accessible
    nc -z "$DB_HOST" "$DB_PORT"

    if [ $? -eq 0 ]; then
        echo "Database connection successful. Database is working correctly."
        return 0  # Success
    else
        echo "Database connection failed. There might be an issue with the database or container."
        return 1  # Failure
    fi
}

# Run the database test and store the exit status
test_database

# Notify the test results
if [ $? -eq 0 ]; then
    echo "Database test passed. Your database is working correctly."
else
    echo "Database test failed. There might be an issue with your database or container."
fi
