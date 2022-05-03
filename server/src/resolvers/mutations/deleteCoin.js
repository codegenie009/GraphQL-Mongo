const models = require('../../models');
module.exports = async (_, {id}, { }) => {
    const deleteCoin = await models.ERC20Coin.deleteOne({_id: id});
    
    if(deleteCoin.deletedCount) return{id: id}
}