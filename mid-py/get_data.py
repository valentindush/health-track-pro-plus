import serial
import sqlite3

ser = serial.Serial('COM4', 9600) # Change this to your port number and baud rate
connection = sqlite3.connect("db.db")
cursor = connection.cursor()
cursor.execute("CREATE TABLE IF NOT EXISTS records (id TEXT PRIMARY KEY, temp INTEGER, rate INTEGER, status INTEGER DEFAULT 0)")
connection.commit()

while True:
    if ser.in_waiting > 0:
        heart_rate = int(ser.readline().decode('utf-8').rstrip())
        cursor.execute("INSERT INTO heart_rate_records (id, rate) VALUES (?, ?)", (str(time.time()), heart_rate))
        connection.commit()