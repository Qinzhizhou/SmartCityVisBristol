import json
json_data=open('Dataset\Traffic_counts.json')
data=json.load(json_data)
data[0]['Count Device ID']