def test_multiply():
    assert multiply(3, 4) == 12, "Expected 12 for multiply(3, 4)"
    assert multiply(0, 5) == 0, "Expected 0 for multiply(0, 5)"
    assert multiply(-2, 3) == -6, "Expected -6 for multiply(-2, 3)"
    assert multiply(1, 1) == 1, "Expected 1 for multiply(1, 1)"
    print("All multiply tests passed!")