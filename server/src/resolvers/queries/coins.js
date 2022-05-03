const { ERC20Coin }  = require("../../models");

module.exports = async (_, {}, {}) => {
    return await ERC20Coin.find()
}