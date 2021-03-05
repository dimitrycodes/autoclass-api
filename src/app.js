require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const pool = require('./db');

const morganOption = process.env.NODE_ENV === "production" ? "tiny" : "common";

//middleware 
const app = express();
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(express.json());


//ROUTES//

//Create a Sport
app.post('/sports', async (req, res) => {
  try {
    
    const {sportsname, playername, championshipsWon, careerPointsScored, careerAssistRanking, mvpAwards, yearsPlayed, scoringEfficiency} = req.body;
    const newSport = await pool.query(
      'INSERT INTO sports (sportsname, playername, championshipsWon, careerPointsScored, careerAssistRanking, mvpAwards, yearsPlayed, scoringEfficiency) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', 
      [sportsname, playername, championshipsWon, careerPointsScored, careerAssistRanking, mvpAwards, yearsPlayed, scoringEfficiency]);

    res.json(newSport.rows[0]);
    
  } catch (error) {
    console.error(error.message);
    
  }
});

//Get All sports
app.get('/sports', async (req, res) => {
  try {
    const allSports = await pool.query('SELECT * FROM sports');
    res.json(allSports.rows);
    
  } catch (error) {
    console.error(error.message);
    
  }
});

//Get A single sport (that's for later)

//Update a Sport
app.put('/sports/:id', async(req, res) => {

  try {
    const { id } = req.params;
    const {sportsname, playername, championshipsWon, careerPointsScored, careerAssistRanking, mvpAwards, yearsPlayed, scoringEfficiency} = req.body;
    /*const update = await db('sports')
      .where({ id })
      .update({sportsname, playername});*/

    const update = await pool.query(
      `UPDATE sports SET sportsname = '${sportsname}', playername = '${playername}', championshipsWon = '${championshipsWon}', careerPointsScored = '${careerPointsScored}', careerAssistRanking = '${careerAssistRanking}', mvpAwards = '${mvpAwards}', yearsPlayed = '${yearsPlayed}', scoringEfficiency = '${scoringEfficiency}' WHERE sports_id = ${id}`);

    res.json('Sport was updated!');
    
  } catch (error) {
    console.error(error.message);
    
  }
});

//Delete a sport
app.delete('/sports/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleteSport = await pool.query(
      // return db.from('table name').select('*').where('id', id).first()
      'DELETE FROM sports WHERE sports_id = $1', 
      [id]
    );

    res.json("Sports was deleted!");

    
  } catch (error) {
    console.error(error.message);
    
  }
})


app.get("/", (req, res) => {
  res.status(200).send("Hello, boilerplate!");
});

app.use(function errorHandler(error, req, res) {
  let response;
  if (process.env.NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  //res.status(500).json(response);
});

module.exports = app;
