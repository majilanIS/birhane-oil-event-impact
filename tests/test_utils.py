# tests/test_utils.py

from src.utils import safe_divide

def test_safe_divide_normal():
    assert safe_divide(10, 2) == 5


def test_safe_divide_by_zero():
    assert safe_divide(10, 0) == 0
