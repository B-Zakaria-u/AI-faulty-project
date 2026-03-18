#!/bin/bash

# Ensure we are in the root directory
cd "$(dirname "$0")"

# 1. Test the Calculator logic
# Assuming the calculator is in workspace/calculator.py and has a function 'add'
cat << 'EOF' > test_calculator.py
import sys
import os

# Add workspace to path
sys.path.append(os.path.abspath("./workspace"))

try:
    from calculator import add
    assert add(1, 2) == 3, f"Expected 3, got {add(1, 2)}"
    print("Calculator test passed!")
except Exception as e:
    print(f"Calculator test failed: {e}")
    sys.exit(1)
EOF

python3 test_calculator.py
TEST_RESULT=$?

# 2. Generate GitHub Actions CI/CD pipeline
mkdir -p .github/workflows
cat << 'EOF' > .github/workflows/ci.yml
name: CI Pipeline
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
      - name: Run Tests
        run: python3 test_calculator.py
EOF

echo "CI/CD pipeline generated at .github/workflows/ci.yml"

exit $TEST_RESULT