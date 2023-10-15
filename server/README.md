# HealthTrack Pro Plus
A sophisticated healthcare system, “**HealthTrack
Pro Plus**”, designed to collect, store, analyze, and present crucial patient data

### How to run
1. Clone the repository
2. Run 
`````bash
npm install
````` 
to install the packages

3. Run 
`````bash
npx prisma migrate dev --name init
``````
to migrate the database
4. Run 
`````bash
npm run start:dev
`````
to run the server in development mode

the dev server can be accessed at `http://localhost:4000`
the swagger docs can be accessed at `http://localhost:4000/api-docs`
