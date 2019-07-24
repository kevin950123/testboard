'use strict';
module.exports = (sequelize, DataTypes) => {
  var test = sequelize.define('test', {
    postName: {
      type: DataTypes.STRING,
    },
    postWriter: {
      type: DataTypes.STRING,
    }
  });
  return test;
};


console.log("실행중");

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('topic', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postName: {
        type: Sequelize.STRING,
      },
      postWriter: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tests');
  }
};


const express = require('express');

const sequelize = require("sequelize");
const Op = sequelize.Op;

const router = express.Router();

router.get("/likeSearch/:searchWord", function(req, res, next){
    let searchWord = req.params.searchWord

    test.findAll({
        where:{
            postName: {
                [Op.like]: "%" + searchWord + "%"
            }
        }
    })
    .then( result => {
        res.json(result)
    })
    .catch( err => {
        console.log(err)
    })
})

module.exports = router;
