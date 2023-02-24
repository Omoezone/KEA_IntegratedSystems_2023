from fastapi import FastAPI
from datetime import datetime
import requests, csv, json, xmltodict, yaml

app = FastAPI()

#Files to be sent
@app.get("/pythonXml")
def get_xml():
    with open("../files/me.xml","r") as xml_file:
        dic = xmltodict.parse(xml_file.read())
    return dic

@app.get("/pythonTxt")
def get_txt():
    dic, temp, count = {}, ["name","age","hobbies"],0
    with open("../files/me.txt","r") as txt_file:
        for row in txt_file:
            dic[temp[count]] = row.replace("\n","")
            count = count + 1
        return dic

@app.get("/pythonJson")
def get_json():
    st = ""
    with open("../files/me.json","r") as json_file:
        for row in json_file:
            st = st + row
    jsonEnd = json.loads(st)
    return jsonEnd

@app.get("/pythonCsv")
def get_csv():
    dic, count = {},0
    with open('../files/me.csv', 'r') as csv_file:
        reader = csv.reader(csv_file)
        for row in reader:
            if row[0]=="name":
                dic["headers"]=row
            else:
                dic["row{}".format(count)]=row
            count = count + 1
    return dic

@app.get("/pythonYaml")
def get_yaml():
    with open("../files/me.yaml","r") as yaml_file:
        return yaml.safe_load(yaml_file)

#Requests from nodejs

@app.get("/p2nXml")
def get_xml():
    response = requests.get("")
    return response.json()

@app.get("/p2nTxt")
def get_txt():
    response = requests.get("")
    return response.json()

@app.get("/p2nJson")
def get_json():
    response = requests.get("")
    return response.json()

@app.get("/p2nCsv")
def get_csv():
    response = requests.get("")
    return response.json()

@app.get("/p2nYaml")
def get_yaml():
    response = requests.get("")
    return response.json()

