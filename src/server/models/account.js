const mogoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mogoose.Schema;

const Account = new Schema({
    username : String,
    password : String,
    created : {
        type : Date,
        default : Date.now
    }
});

Account.methods.generateHash = function(password){
    return bcrypt.hashSync(password, 8);   
}

Account.methods.vallidateHash = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('account', Account);