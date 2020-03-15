const db = require('../data/dbConfig');
const BaseModel = require('./base_model');

class Users extends BaseModel {
        findMessages (id){
            return db(this.name).innerJoin('messages', 'users.id', 'messages.user_id')
                                .select('messages.*', 'messages as Messages')
                                .where({ id })
        }
}

module.exports = new Users('users');