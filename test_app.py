import unittest
from app import app

class FlaskCalculatorTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_add(self):
        response = self.app.post('/calculate', data=dict(
            operand1='5',
            operand2='3',
            operation='add'
        ))
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'8', response.data)

    def test_divide_by_zero(self):
        response = self.app.post('/calculate', data=dict(
            operand1='5',
            operand2='0',
            operation='divide'
        ))
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Error', response.data)

    def test_invalid_input(self):
        response = self.app.post('/calculate', data=dict(
            operand1='a',
            operand2='3',
            operation='add'
        ))
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Error', response.data)

if __name__ == '__main__':
    unittest.main()
