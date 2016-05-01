# Heroku setup with mongo, express, and angular

### Heroku
steps:
1. download toolbelt (which heroku to see if you have it)
2. login (heroku login)
3. Make sure you have git, node, and npm

###Express app (without generator)

You will need a package.json, the app.js file, and a Procfile. Main thing to
notice is our post install call to bower and the .bowerrc that puts the
bower_components in our public (we have it called app, but you will notice in
the app.js the reference to the app directory) directory.

To run locally just call: ` npm start `

To run/update on heroku:

`
heroku create
git push heroku master
heroku open
`

###Adding mongo (free from mlab)

`
heroku addons:create mongolab:sandbox (you must have cc details with heroku to do
this)
`

You will now see if you run
`
heroku config
`
A new MONGODB_URI which is the url for your mongo database

### Adding data to our mongo database

to connect and add data use the mongo cli
mongo -u heroku_c2dfqxlh -p 70jqvl63n9ehp5b55pjcqhq166 --host ds011902.mlab.com --port 11902 heroku_c2dfqxlh

db.test.insertOne({first: "Zach", last: "Mays", age: 26})

### We will now use mongoose to connect to it in our app

`
npm install --save mongoose
`

Notice the queries to mongoose in our app.js

### Angular

We have an index.html angular file that takes over whenever someone hits the
root directory of our project. From there with resources we just make request to
the api route we have setup in our express app.

### References
heroku setup: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
https://github.com/mongolab/hello-mongoose/blob/master/app.js
https://devcenter.heroku.com/articles/mean-apps-restful-api
