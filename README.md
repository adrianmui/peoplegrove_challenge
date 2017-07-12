adrian mui

this is meant to be a codechallenge for the company peoplegrove

express as server
passport as authentication
pg as database 


### getting started
```
  npm install
  npm start
```

### tasks
```
  note: * = done
  login
    -login with admin *
    -login with facebook
  user *
    view all tasks by user
    able to edit tasks within same day
  user:admin *
    view and edit all tasks by user
  task *
    belongs to user *
    has timestamps and can be edited *
  routes
    /api
      /user
        POST *
        GET /:id *
        DELETE /:id *
      /tasks
        GET *
        POST *
        GET /:id *
        DELETE /:id *
    auth/
      /register *
      /login *
      /logout *
    /server-side rendering
      /user/tasks
      /user/tasks/:id/:edit
  deploy  
    heroku
```

 After login user should be able  to log time spent on a particular task. Should be able to add and edit records of current day. He should be able to view past records but should not be able to edit them. Also, provide a admin login which could view all the entries made by each user. 
- Please use Node.js backend and Angular or React on frontend. 
- Application should be deployed on Heroku free instance. 

