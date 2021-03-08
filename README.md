# Goats-Server

Goats is an app that enables you to store your top players in a sport(only one sport available for now) according to 6 key statistics. Those statistics will help you make the case for which player is the greatest player of all time. You can create your list, store their statics, and update them if the player is still playing or if you made an error or if you decide that the player doesn't belong in the list because another player is better. 

The app uses all of the CRUD operations and has a database built with Postgres 

##POST /sports ---> Adds a new sport with the corresponding players and each of their statistics.
##GET /sports ---> Gets the data for all sports
##PUT /sports/:id ---> Update a Sports players and their statistics
#DELETE /sports/:id ---> Deletes an entire sport

Stack this app was created using: Node, Express, Git, Javascript, Postgresql, Heroku

#
#



