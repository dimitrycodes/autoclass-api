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

//Create a Class
app.post('/class', async (req, res) => {
  try {
    
    const {class_id, carclass, makeandmodel, comfort, topspeed, handling, crashsafetyrating, fueleconomy} = req.body;
    const newClass = await pool.query(
      'INSERT INTO carclass (class_id, carclass, makeandmodel, comfort, topspeed, handling, crashsafetyrating, fueleconomy) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', 
      [class_id, carclass, makeandmodel, comfort, topspeed, handling, crashsafetyrating, fueleconomy]);

    res.json(newClass.rows[0]);
    
  } catch (error) {
    console.error(error.message);
    
  }
});

//Get All Classes
app.get('/class', async (req, res) => {
  try {
    const allClasses = await pool.query('SELECT * FROM carclass');
    res.json(allClasses.rows);
    
  } catch (error) {
    console.error(error.message);
    
  }
});

//Get A single Class (that's for later)

//Update a Class
app.put('/class/:id', async(req, res) => {

  try {
    const { id } = req.params;
    const {carclass, makeandmodel, comfort, topspeed, handling, crashsafetyrating, fueleconomy} = req.body;
    //console.log(`UPDATE sports SET sportsname = '${sportsname}', playername = '${playername}', championshipsWon = '${championshipsWon}', careerPointsScored = '${careerPointsScored}', careerAssistRanking = '${careerAssistRanking}', mvpAwards = '${mvpAwards}', yearsPlayed = '${yearsPlayed}', scoringEfficiency = '${scoringEfficiency}' WHERE id = ${id}`)
    /*const update = await db('sports')
      .where({ id })
      .update({sportsname, playername});*/
    const update = await pool.query(
      `UPDATE carclass SET carclass = '${carclass}', makeandmodel = '${makeandmodel}', comfort = '${comfort}', topspeed = '${topspeed}', handling = '${handling}', crashsafetyrating = '${crashsafetyrating}', fueleconomy = '${fueleconomy}' WHERE id = ${id}`,
      (err,response)=>{
        if(err){
          console.log(err);
          return res.json(err);
  }
		  return res.json('Class was updated!'); //res.json(response)
      });

    //res.json('Class was updated!');
    
  } catch (error) {
    console.error(error.message);
    
  }
});

//Delete a Class
app.delete('/class/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleteClass = await pool.query(
      // return db.from('table name').select('*').where('id', id).first()
      'DELETE FROM carclass WHERE id = $1', //used to be class_id which would delete the entire class but now it deletes a single car entry
      [id]
    );

    res.json("Class was deleted!");

    
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
