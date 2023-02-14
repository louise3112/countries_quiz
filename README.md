# Countries Quiz

Group project from Week 10 of the CodeClan Professional Software Development course. This is a full-stack app that uses a JavaScript / React front-end designed using styled components; an Express server; and a MongoDB back-end.


## Brief
Design a full-stack app using the Countries API data where users can:
- play multiple, interactive quiz games;
- see their quiz scores and have them retained, even if they leave the app;

![Screenshot of the 'Whose Flag is it Anyway?' quiz](readmeImages/whoseFlag.png?raw=true "Title")
![Screenshot of the 'A Question of Capitals' quiz](readmeImages/questionOfCapitals.png?raw=true "Title")
![Screenshot of the 'Play Your Population Right' quiz](readmeImages/playYourPop.png?raw=true "Title")

- view underlying information for each country so they can improve their quiz scores.

![Screenshot of the list of Countries page](readmeImages/countryList.png?raw=true "Title")
![Screenshot of the country details page for Croatia](readmeImages/countryDetail.png?raw=true "Title")


## Contributors
Louise Cuthbertson ([Github](https://github.com/louise3112); [LinkedIn](https://linkedin.com/in/louise3112/))   
Gareth Evans ([Github](https://github.com/G3vans16))   
Jonathan Strandberg ([Github](https://github.com/jonstrandberg); [LinkedIn](https://linkedin.com/in/jonathan-strandberg-6163902b/))   
Maggie Amin ([Github](https://github.com/maggieAmin); [LinkedIn](https://linkedin.com/in/maggie-amin/))


## Getting Started
These instructions should get you a copy of the project up and running on your local machine for development purposes:

### Server
Ensure that you have mongoDB installed on your machine.

Install server dependencies:
```
cd server
npm install
```

Seed the database:
```
npm run seeds
```

Run express:
```
npm run server:dev
```

### Client

Install client dependencies:
```
cd ../client
npm install
```

Run the client:
```
npm start
```
