const models = require('../../models');

module.exports = async (_, { id, input }, {} ) => {
    const ERC20CoinToUpdate = await models.ERC20Coin.findOne({_id: id});

    Object.keys(input).forEach(value => {
        ERC20CoinToUpdate[value] = input[value];
    });

    const updatedERC20Coin = await ERC20CoinToUpdate.save();
    return updatedERC20Coin;
}