import requests
import sqlite3
from datetime import datetime
import random

def upload_data(id, rate):
    timestamp = datetime.now()

    formData = {
       "patientId": 1,
       "timestamp": timestamp.strftime('%Y-%m-%d %H:%M:%S'),
       "temperature": random.randrange(36,40),
       "heartBeat": rate
    }
    HTTP_Request = requests.post("https://healthtrackpro.onrender.com/sensor/upload-data", data=formData)

    if HTTP_Request.status_code == 200:
        return True
    return False

connection = sqlite3.connect("db.db")
cursor = connection.cursor()

cursor.execute("SELECT * FROM records WHERE status=0")
records = cursor.fetchall()

for record in records:
 id, temp, rate, status = record

 if upload_data(id, rate):
    cursor.execute("UPDATE records SET status=1 WHERE id=?", (id,))
    connection.commit()

connection.close()