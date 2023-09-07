const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const GroupToUserlink = sequelize.define("groupToUserlink",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        NotNUll:true,
        primaryKey:true
    },
    userId:{
        type:Sequelize.INTEGER
    },
    groupId:{
        type:Sequelize.INTEGER
    },
    groupname:{
        type:Sequelize.STRING
    }
});

module.exports = GroupToUserlink;