const faker = require('faker');
const _ = require('lodash');

const Sequelize = require('sequelize');
const db = require('./../server/config/db');

const User = require('./../models/user')(db, Sequelize);
const Task = require('./../models/task')(db, Sequelize);

let sample = [
  {email: 'admin@admin.com', admin: true},
  {email: 'test@test.com', admin: false}
];

// creates 2 user with 1 task each
db.sync().then(() => {
  sample.forEach(el =>  {
    return User.create(el)
      .then(user => {
        let newTask = {
          title: faker.name.jobTitle(), 
          delivery: faker.random.number(5),
          UserId: user.get('id')
        };

        console.log(newTask);
        return Task
          .build(newTask)
          .save()
          .then(task => {
            console.log(`Task created ${task.get({plain: true})}`);
          })
          .catch(err => console.log(err));
     });
  });
});