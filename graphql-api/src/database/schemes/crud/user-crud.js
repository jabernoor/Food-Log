import UserSchema from '../UserSchema'

class Crud {
    async create(input) {
        return await UserSchema.create(input).then((user) => {
            return user;
        }).catch(error => {
            return error;
        });
    }
}


export default new Crud();