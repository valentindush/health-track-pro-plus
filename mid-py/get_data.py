import time
import serial
import sqlite3

ser = serial.Serial('COM3', 9600) # Change this to your port number and baud rate
connection = sqlite3.connect("database.db")
cursor = connection.cursor()
cursor.execute("CREATE TABLE IF NOT EXISTS records (id TEXT PRIMARY KEY, rate REAL, temp REAL, status INTEGER DEFAULT 0)")
connection.commit()

while True:
    if ser.in_waiting > 0:
        info = ser.readline().decode('utf-8').rstrip()

        info = info.split('|')

        heart_rate = float(info[0])
        temp = float(info[1])

        if 60 <= heart_rate <= 100:
            print("bpm: " + str(heart_rate))
            print("temp" + str(temp))

            cursor.execute("INSERT INTO records (id, rate, temp) VALUES (?, ?)", (str(time.time()), heart_rate, temp))
            connection.commit()