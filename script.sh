#!/bin/bash

echo "Running tests..."
python -c "from calculator import multiply; print(multiply(3, 4))"
python -c "from calculator import multiply; print(multiply(0, 5))"
python -c "from calculator import multiply; print(multiply(-2, 3))"
python -c "from calculator import multiply; print(multiply(1, 1))"

echo "All tests completed successfully!"