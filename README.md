# health-track-pro-plus
A sophisticated healthcare system, “HealthTrack Pro Plus”, designed to collect, store, analyze, and present crucial patient data

## How it works
The project operates by employing IoT devices to collect and transmit patient data. This data is subsequently stored on a server, where it is processed by a machine learning model to extract valuable insights. Additionally, the data is visualized on a website through the use of graphs and other interactive elements.

## Parts
1. **Client** contains the website to visualize the data
2. **mid-py** is the python code to handle uploading data periodically to server
3. **Server** is the backend to accept, store, and process the data
4. **arduino** contains the code that is run on the arduino device

## Deployment
1. The website is hosted on https://healthtrackpro.vercel.app/
2. The server code is hosted on 
https://healthtrackpro.onrender.com/
3. The server API Swagger documentation 
https://healthtrackpro.onrender.com/api-docs

## How to use
1. Clone the repository
    ``````bash
    git clone https://github.com/valentindush/health-track-pro-plus.git
    ``````
2. Run the server
    ``````bash
    cd server
    ``````
    Install packages
    ``````bash
    pnpm install
    ``````
    run the server in development mode
    ``````bash
    pnpm run start:dev
    ``````
3. Run the client code
    ``````bash
    cd client
    ``````
    Install packages
    ``````bash
    pnpm install
    ``````
    Run the server in development mode
    ``````bash
    pnpm run dev
    ``````
    Access the it on `http://localhost:3000`

4. Using the IoT device

    If you have the device set up then:
    Power the device

    Run the `mid-py` code to handle data uploading to the server

    you will have to first install required python packages with: 
    ```pip install pyserial schedule```
    
    #### Run `get_data.py`:
    ``````bash
    python mid-py/get_data.py
    ``````

    the `get_data.py` get the realtime data from **Arduino** and saves it in a local **sqlite3** database

    #### Run `upload.py`:
    ``````bash
    python mid-py/upload.py
    ``````

    the `upload.py` uses `schedule` to periodically upload the locally stored data to the server 


## Contributors
**LOS MAESTROS**
* Valentin D
* Eden N
* Rosine N
* Ritah M
* Benitha U

Tada! you are ready to go 🔥🎉🎉
    
