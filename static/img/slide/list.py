import os 
f = open("./img.json", "a")
dir = os.listdir()
f.write("[")
for file in dir:
    f.write('"')
    f.write(file)
    f.write('"')
    f.write(",")
f.write("]")
print("List correctly created")