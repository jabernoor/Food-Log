import UnitSchema from '../UnitSchema'
import FoodProvider from '../../../graphql/resolvers/provider'
class Crud {
    async create(input) {
        return await UnitSchema.create(input).then(async (unit) => {
            unit.provider = await new FoodProvider(unit.id);
            return unit;
        }).catch(error => {
            return error;
        });
    }
}


export default new Crud();