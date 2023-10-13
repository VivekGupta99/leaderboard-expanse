const db = require('../db/connect.js')
const User = db.customers
const Expenses = db.expenses

const getusers = async (req, res) => {
    try {
        const lbusers = await User.findAll({
            order: [['total_expense', 'DESC']]
        })

        res.status(200).json(lbusers)
    }
    catch (err) {
        res.status(500).json(err)
    }
}
// const getUserLeaderboard = async (req, res) => {
//     try {
//         const getleaderboardofusers = await User.findAll({
//             attributes: ['id', 'name', [sequelize.fun('sum', sequelize.col('expenses.amount')), 'total_cost']], 
//             includes: {
//                 model : Expanse,
//                 attributes: []
//             },
//             group: ['user.id'],
//             order: [['total_cost', 'DESC']]
//         });
//         res.status(200).json(getleaderboardofusers)

//     } catch (error) {

//     }
// }
module.exports = { getusers };