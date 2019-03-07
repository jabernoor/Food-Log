import unit from '../../schemes/UnitSchema'
import { applyResultTransforms } from 'graphql-tools/dist/transforms/transforms';
const unitResolver = (args) => {
    console.log(`here we are hgggggggggggggggggggggggggggggggggggggggggggggg ${args}`)
    unit.findAll({
        where: {
            id: args.id
        }
    }).then(results=>{
        console.log(results);
    })
    return results;
}
export default unitResolver