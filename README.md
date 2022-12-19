# fe-restaurant-playlists
Sleigh-ers final project frontend repo

YMCA rulez!
assert == expect, print if fails 

The following line is a replacement of the (.test) in JS 
def test_file1_method1():

Use snakecase when naming python files
By default pytest only identifies the file names starting with test_ or ending with _test

test_login.py - valid
login_test.py - valid
testlogin.py -invalid
logintest.py -invalid

The python version of .only is a keyword search 
py.test -k <file_name> -v
py.test -k method1 -v
in this case it will search any test containint `method1` 

To replace a describe bloc in JS use 
import pytest
@pytest.mark.set1
def test_file2_method1():
	x=5
	y=6
	assert x+1 == y,"test failed"
	assert x == y,"test failed because x=" + str(x) + " y=" + str(y)

@pytest.mark.set1
def test_file2_method2():
	x=5
	y=6
	assert x+1 == y,"test failed"

Run py.test -m set1.This will run the methods test_file1_method1, test_file2_method1, test_file2_method2.

# One test with multiple arguments
@pytest.mark.parametrize("input1, input2, output",[(5,5,10),(3,5,12)])
def test_add(input1, input2, output):
	assert input1+input2 == output,"failed"


# Skiping a test 
(add a .skip)
import pytest
@pytest.mark.skip
def test_add_1():
	assert 100+200 == 400,"failed" 


# Pytest Framework Testing an API
conftest.py – have a fixture which will supply base url for all the test methods
import pytest
@pytest.fixture
def supply_url():
	return "https://reqres.in/api"


Check out this link for further details 
https://www.guru99.com/pytest-tutorial.html#4

