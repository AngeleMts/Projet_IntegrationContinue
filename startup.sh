#!/bin/bash

# Stop script on first error
set -e
#

# Start backend server
npm run server &
SERVER_PID=$!
#

# Start frontend server
npm run front
#

# Kill backend server
kill $SERVER_PID
echo "Backend server stopped."
#

exit $?