#!/bin/bash

# Set up variables for your application URLs
BACKEND_URL="http://h3micro_server:8000"

# Function to test the backend
test_backend() {
    echo "Testing backend..."
    http_code=$(curl -s -o /dev/null -w "%{http_code}" $BACKEND_URL)
    status=$?  # Capture the exit status of the curl command

    if [ $status -eq 200 ]; then
        echo "Backend is working correctly (HTTP Status Code: $status)."
    else
        echo "Backend is not responding as expected (HTTP Status Code: $status)."
    fi
    # You can add more specific checks based on your backend functionality
    return $status  # Return the exit status from the function
}

# Run the tests
test_backend
status=$?  # Capture the exit status from the function

# Notify the test results
if [ $status -eq 0 ]; then
    echo "Application tests passed. Your application is working correctly."
else
    echo "Application tests failed. There might be an issue with your application."
fi

# Exit with the captured status for use outside the script (optional)
exit $status
