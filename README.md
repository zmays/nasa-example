heroku setup: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
https://github.com/mongolab/hello-mongoose/blob/master/app.js
steps:
1. download toolbelt (which heorku to see if you have it)
2. login (heroku login)
3. Make sure you have git, node, and npm

Express app (without generator)
app.js for the server, and a procfile

local - just npm start

heroku:
heroku create
git push heroku master
heroku open

adding mongo (free from mlab)

heroku addons:create mongolab:sandbox (you must have cc details with heroku to do
this)

You will now see if you run
`
heroku config
`
A new MONGODB_URI which is the url for your mongo database
We will now use mongoose to connect to it

to connect and add data use the mongo cli
mongo -u heroku_c2dfqxlh -p 70jqvl63n9ehp5b55pjcqhq166 --host ds011902.mlab.com --port 11902 heroku_c2dfqxlh

db.test.insertOne({first: "Zach", last: "Mays", age: 26})

`
npm install --save mongoose
`



