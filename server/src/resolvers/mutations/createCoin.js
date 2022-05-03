const { ERC20Coin }  = require("../../models");

module.exports = async (_, { input }, { }) => {
    newERC20Coin = await ERC20Coin.create(input);
    return newERC20Coin;
}