const faker = require('faker');
const _ = require('lodash');

const db = require('./src/server/config/db');

const User = require('./src/server/api/user/model');
const Task = require('./src/server/api/task/model');

let sample = [
  {email: 'admin@admin.com', admin: true},
  {email: 'test@test.com', admin: false}
];

// creates 2 user with 1 task each
module.exports = db.sync({force: true}).then(() => {
  sample.forEach(newUser =>  {
    return User.create(newUser)
      .then(user => {
        console.log(`@@@\n    user ${user.get('email')} has been create \n@@@`);
        let newTask = {
          title: faker.name.jobTitle(), 
          delivery: faker.random.number(5),
          UserId: user.get('id')
        };
        return Task
          .build(newTask)
          .save()
          .then(task => {
            console.log(`@@@\n    task ${task.get('title')} has been created \n@@@`);
          })
          .catch(err => console.log(err));
     });
  });
});