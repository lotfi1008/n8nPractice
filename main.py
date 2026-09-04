"""
Simple prime checking script.

This script accepts a number from the user (either as a command-line argument or via prompt)
and prints whether the number is prime or not.

Usage:
  python main.py         # then enter a number when prompted
  python main.py 17      # checks 17

The script validates that the input is a non-negative integer.
"""

import sys
import math


def is_prime(n: int) -> bool:
    """Return True if n is prime, False otherwise.

    Uses an iterative check up to sqrt(n). Assumes n is an integer >= 0.
    """
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    limit = int(math.isqrt(n))
    i = 3
    while i <= limit:
        if n % i == 0:
            return False
        i += 2
    return True


def read_input() -> int:
    """Read and validate an integer from argv or stdin. Raises ValueError on invalid input."""
    # Try command-line argument first
    if len(sys.argv) >= 2:
        raw = sys.argv[1]
    else:
        raw = input("یک عدد وارد کنید: ").strip()

    # Try to parse an integer
    try:
        # Reject floats like 3.0 explicitly
        if "." in raw or "," in raw:
            # Allow comma as thousands separator? For simplicity, reject floats
            raise ValueError("Input is not an integer")
        n = int(raw)
    except Exception:
        raise ValueError("ورودی باید یک عدد صحیح غیرمنفی باشد")

    if n < 0:
        raise ValueError("ورودی باید غیرمنفی باشد")

    return n


def main() -> None:
    try:
        n = read_input()
    except ValueError as e:
        print(f"خطا: {e}")
        sys.exit(1)

    if is_prime(n):
        print(f"عدد {n} اول است.")
    else:
        print(f"عدد {n} اول نیست.")


if __name__ == "__main__":
    main()
