a = [[1,2,[3], [8,0,[9]]],4]


t = []

def process(a):
    if type(a) == list:
        flatten(a)
    else:
        t.append(a)
def flatten(arr):
    print "Array => ", arr
    for x in arr:
        if type(x) == list:
            process(x)
        else:
            t.append(x)



def store(current, previous):
    previous.extend(current)

def flatten_array(arr):
    output = []
    for val in arr:
        if type(val) == list:                 # is the current value we are looking at is also a list
            output.extend(flatten_array(val)) # then recursive call itself to start from
                                              # the beginning and use python list extend 
        else:
            output.append(val)                # ok this is not a list just append to the bottom

    return output


print flatten_array(a)