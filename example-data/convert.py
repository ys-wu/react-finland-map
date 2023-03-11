import csv


with open('FMIcoords.csv', 'r') as file:
    reader = csv.reader(file)
    data = [row for row in reader]

dict_ =  { 
    row[2]: {
        "lat": float(row[0]),
        "lng": float(row[1]),
    }
    for row in data[1:]
}

js_obj_str = "{\n" \
    + "\n".join(f"  '{k}': {v}," for k, v in dict_.items()) \
    + "\n}"

with open('coordinates.js', 'w') as file:
    file.write(
        "export const COORDINATES = " \
            + js_obj_str \
            + ";"
    )
