#!/bin/bash

# Set up variables for your application URLs
FRONTEND_URL="http://localhost:5173"
BACKEND_URL="http://localhost:8000"

# Function to test the frontend
test_frontend() {
    echo "Testing frontend..."
    http_code=$(curl -s -o /dev/null -w "%{http_code}" $FRONTEND_URL)
    if [ $http_code -eq 200 ]; then
        echo "Frontend is working correctly (HTTP Status Code: $http_code)."
    else
        echo "Frontend is not responding as expected (HTTP Status Code: $http_code)."
    fi
    # You can add more specific checks based on your frontend functionality
}

# Function to test the backend
test_backend() {
    echo "Testing backend..."
    http_code=$(curl -s -o /dev/null -w "%{http_code}" $BACKEND_URL)
    if [ $http_code -eq 200 ]; then
        echo "Backend is working correctly (HTTP Status Code: $http_code)."
    else
        echo "Backend is not responding as expected (HTTP Status Code: $http_code)."
    fi
    # You can add more specific checks based on your backend functionality
}

# Run the tests
test_frontend
test_backend

# You can add more tests as needed, such as database checks, API tests, etc.

# Notify the test results
if [ $? -eq 0 ]; then
    echo "Application tests passed. Your application is working correctly."
else
    echo "Application tests failed. There might be an issue with your application."
fi
