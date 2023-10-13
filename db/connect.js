const Sequelize = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize('new_table', 'root', 'Sql@123', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require("../models/user")(sequelize, Sequelize);
db.expenses = require("../models/expense")(sequelize, Sequelize);
db.orders = require("../models/order")(sequelize, Sequelize);
db.ResetPassword = require("../models/passwordReq")(sequelize, Sequelize);
db.fileurl = require("../models/fileurl")(sequelize, Sequelize);
module.exports = db;
