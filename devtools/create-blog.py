import os
import datetime
import json

PATH = "../posts/"

title = input("Enter post title: ")

slug = title.lower().replace(" ","-")

f = open(PATH + slug + ".json", 'w')

f.write('{\n\t"title":"' + title + '",\n\t"date":"' + str(datetime.date.today()) + '",\n\t"tags":[]\n}')
f.close()

f = open(PATH + slug + ".md", 'w')
f.close()

f = open(PATH + "post-database.json",)
db = json.load(f)
f.close()
db["posts"].append(slug)

db_json = json.dumps(db, indent = 4)
  
# Writing to sample.json
with open(PATH + "post-database.json", "w") as outfile:
    outfile.write(db_json)

print("Post created")