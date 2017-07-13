adrian mui

this is meant to be a codechallenge for the company peoplegrove

express as server
passport as authentication
pg as database 


### getting started
```
  npm install
  npm run-scripts sass
  npm start

  node seed.js will give you
  admin user -> admin@admin.com
  normal user -> test@test.com

  some sql queries
    update all tasks made within the day and make them inaccessable(created at > 1 days ago)  
      UPDATE "Tasks" SET "createdAt" = (now()- '2 day'::INTERVAL) WHERE "createdAt" >=(now() - '1 day'::INTERVAL)
    delete a task that is over a day old
      DELETE FROM "Tasks" WHERE ctid=(SELECT ctid FROM "Tasks" WHERE "createdAt" <= (now() - '1 day'::INTERVAL) limit 1);
```

### tasks
```
  note: * = done
  login
    -login with admin *
    -login with facebook
  user *
    view all tasks by user * 
    able to edit tasks within same day *doing now
  user:admin *
    view and edit all tasks by user * doing now
  task *
    belongs to user *
    has timestamps and can be edited * doing now
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
      /user/tasks *
      /user/tasks/:id/:edit *doing now
  deploy  
    heroku
```



 After login user should be able  to log time spent on a particular task. Should be able to add and edit records of current day. He should be able to view past records but should not be able to edit them. Also, provide a admin login which could view all the entries made by each user. 
- Please use Node.js backend and Angular or React on frontend. 
- Application should be deployed on Heroku free instance. 

