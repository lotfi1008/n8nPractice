#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Math/sum_digits.py

یک برنامه که یک عدد پنج‌رقمی صحیح (بدون صفر پیش‌رو) را از ورودی می‌گیرد
و مجموع ارقام آن را محاسبه و چاپ می‌کند.

قوانین پذیرش ورودی:
- باید تنها شامل ارقام باشد (بدون علامت منفی یا فضای داخلی).
- باید در بازهٔ 10000 تا 99999 قرار بگیرد (صفر پیش‌رو مانند "01234" مجاز نیست).

نمونه اجرا:
$ python Math/sum_digits.py
لطفاً یک عدد پنج‌رقمی وارد کنید: 12345
مجموع ارقام: 15

توابع:
- sum_of_digits(n: int) -> int: مجموع ارقام n را برمی‌گرداند. n باید یک عدد صحیح پنج‌رقمی معتبر باشد.
"""

from typing import Any
import sys


def sum_of_digits(n: int) -> int:
    """Return the sum of digits of a five-digit integer n.

    Raises ValueError if n is not in the range 10000..99999.
    """
    if not isinstance(n, int):
        raise TypeError("n must be an int")
    if not (10000 <= n <= 99999):
        raise ValueError("n must be a five-digit integer between 10000 and 99999")
    return sum(int(d) for d in str(n))


def _prompt_input(prompt: str = "لطفاً یک عدد پنج‌رقمی وارد کنید: ") -> str:
    try:
        return input(prompt)
    except EOFError:
        # In non-interactive contexts, provide a clear message and exit
        print("خطا: ورودی خوانده نشد.")
        sys.exit(1)


def main(argv: Any = None) -> None:
    """Read input, validate it as a five-digit number, compute and print the sum of its digits."""
    s = _prompt_input().strip()

    if not s.isdigit():
        print("خطا: ورودی باید فقط شامل ارقام باشد و بدون علامت منفی باشد. مثال معتبر: 12345")
        sys.exit(1)

    # Convert and validate numeric range (reject leading zeros like "01234")
    try:
        n = int(s)
    except ValueError:
        print("خطا: مقدار واردشده معتبر نیست.")
        sys.exit(1)

    if not (10000 <= n <= 99999):
        print("خطا: لطفاً یک عدد پنج‌رقمی صحیح بین 10000 و 99999 وارد کنید. (صفر پیش‌رو مجاز نیست)")
        sys.exit(1)

    total = sum_of_digits(n)
    print(f"مجموع ارقام: {total}")


if __name__ == "__main__":
    main()
