# Autoclass-API

Autoclass allows you to store your top 5 cars for a particular class according to 5 performance metrics. The performance metrics will help you ranks cars that you have owned or have knowledge of. You can create your car list, store their metrics, and update them as new cars are put on the market or if you made an error. 

The app uses all of the CRUD operations and has a database built with Postgres 

##POST /cars ---> Adds a new class with the corresponding cars and each of their performance metrics.

##GET /cars ---> Gets the data for all cars in their class

##PUT /cars/:id ---> Update a class' cars and their performance metrics

#DELETE /cars/:id ---> Deletes an entire class of cars

Stack this app was created using: Node, Express, Git, Javascript, Postgresql, Heroku

#
#



