"""
fibonacci.py

Iterative Fibonacci sequence generator.

Provides:
- fibonacci(n): returns a list with the first n Fibonacci numbers.

Usage example:
    python fibonacci.py 10

No external dependencies.
"""

from typing import List
import sys


def fibonacci(n: int) -> List[int]:
    """Return the first n Fibonacci numbers as a list.

    Args:
        n: Non-negative integer specifying how many numbers to generate.

    Returns:
        A list of integers containing the first n Fibonacci numbers.

    Raises:
        TypeError: If n is not an integer.
        ValueError: If n is negative.
    """
    if not isinstance(n, int):
        raise TypeError("n must be an integer")
    if n < 0:
        raise ValueError("n must be a non-negative integer")

    result: List[int] = []
    a, b = 0, 1
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result


if __name__ == "__main__":
    # Simple CLI usage: pass n as the first argument (defaults to 10)
    n = 10
    if len(sys.argv) > 1:
        try:
            n = int(sys.argv[1])
        except ValueError:
            print("Invalid argument: using default n=10")
    print(f"First {n} Fibonacci numbers:", fibonacci(n))
