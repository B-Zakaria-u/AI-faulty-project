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
