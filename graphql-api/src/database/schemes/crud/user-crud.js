import UserSchema from '../UserSchema'
import cacheService from '../../../cache/cache-service'
class Crud {


    async createIfNotExist(input) {
        let cacheKey = 'user_' + input.email;
        let val = await cacheService.get(cacheKey);
        if (val != null) {
            return JSON.parse(val);
        }
        return await UserSchema.findAll({
            where: {
                email: input.email
            }
        }).then(async user => {

            if (user.length != 0) {
                let ret = user[0].dataValues;
                cacheService.set(cacheKey, JSON.stringify(ret));
                return ret;
            } else {
                return await UserSchema.create(input).then((newUser) => {
                    cacheService.set(cacheKey, JSON.stringify(newUser));
                    return newUser;
                }).catch(async error => {
                    return error;
                });
            }
        })
    }
}


export default new Crud();