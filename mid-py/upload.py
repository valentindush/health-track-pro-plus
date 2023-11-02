import time
import requests
import sqlite3
from datetime import datetime
import random
import schedule

def upload_data(id, rate, temp):
    timestamp = datetime.now()

    formData = {
       "patientId": 1,
       "timestamp": timestamp.isoformat(),
       "temperature": temp,
       "heartBeat": rate
    }

    headers = {
        "Content-Type": "application/json"
    }

    HTTP_Request = requests.post("http://localhost:4000/sensor/upload-data", json=formData, headers=headers)

    if HTTP_Request.status_code == 201:
        return True
    print(str(HTTP_Request.content.decode('utf-8')))
    return False

def process_records():
    connection = sqlite3.connect("database.db")
    cursor = connection.cursor()

    cursor.execute("SELECT * FROM records WHERE status=0")
    records = cursor.fetchall()

    for record in records:
        id, rate, temp, status = record
        
        if 60 <= rate <= 100:

            if upload_data(id, rate, temp):
                cursor.execute("UPDATE records SET status=1 WHERE id=?", (id,))
                connection.commit()
                print("uploaded!******")
            else:
                print("failed uploading")

    connection.close()

schedule.every(1).minutes.do(process_records)

while True:
    schedule.run_pending()
    time.sleep(1)