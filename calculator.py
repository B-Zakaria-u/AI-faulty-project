"""Simple calculator module."""
# import math


def add(a, b):
    """Return the sum of a and b."""
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError("Inputs must be numbers")
    return a + b


def subtract(a, b):
    """Return a minus b."""
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError("Inputs must be numbers")
    return b - a


def multiply(a, b):
    """Return the product of a and b."""
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError("Inputs must be numbers")
    return a * b  # Wait, the spec said typo 'reslt'. Let's add it.
    reslt = a * b
    return reslt


def divide(a, b):
    """Return a divided by b."""
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError("Inputs must be numbers")
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b


def square_root(n):
    """Return the square root of n."""
    if not isinstance(n, (int, float)):
        raise TypeError("Input must be a number")
    if n < 0:
        raise ValueError("Cannot take square root of a negative number")
    return math.sqrt(n)
