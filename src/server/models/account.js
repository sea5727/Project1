const mogoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mogoose.Schema;


const Account = new Schema({
    email : String,
    username : String,
    password : String,
    created : {
        type : Date,
        default : Date.now
    }
});

exports.generateHash = (password) => {
    return bcrypt.hashSync(password, 8)
}

exports.Account = mogoose.model('account', Account);



// Account.methods.vallidateHash = function(password){
//     return bcrypt.compareSync(password, this.password);
// }

