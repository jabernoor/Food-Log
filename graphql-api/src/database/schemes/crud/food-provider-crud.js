import FoodProviderSchema from '../FoodProviderSchema'
    
class Crud {
    async create(input) {
        return await FoodProviderSchema.create(input).then((provider) => {
            return provider;
        }).catch(error => {
            return error;
        });
    }
    async update(input, id) {
        return await FoodProviderSchema.update(input, {
            where: {
                id: id
            }
        }).then((rowsUpdate,updatedProvider) => {
            console.log(updatedProvider)
            return updatedProvider;
        }).catch(error => {
            return error;
        });
    }
}


export default new Crud();