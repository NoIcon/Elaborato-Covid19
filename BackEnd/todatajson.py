import json
from os import write

filename = "BackEnd/datiAndamentoNazionale.txt"

out_file = open("datiAndamentoNazionale.js", "w")

out_file.write('var collection =[')

dict1 = {}

fields = ['casi', 'day', 'mese', 'gg', 'anno']

with open(filename) as fh:
    l = 1

    for line in fh:
        if line != "":
            line = line.replace("00:00:00 GMT+0000 (Tempo coordinato universale)", "")
            
        description = list(line.strip().split(None, 4))
        print(description)
        sno = 'dato'+str(l)

        i = 0
        dict2 = {}

        while i<len(fields):
            dict2[fields[i]] = description[i]
            
            i = i+1
        
        dict1[sno] = dict2
        l = l+1

json.dump(dict1, out_file, indent=4)
out_file.write('];')
out_file.close()