import schema from '../../schemes/UserSchema';
import {findByPK} from '../../schemes/crud/crud';
class User {

    constructor(id){
        return (async () => {
            this.id = id;
            this.source = await findByPK(schema,id);
            return this; // when done
        })();
    }
    
    id(){
        
        return this.source.id;
    }
    
    name(){
        return this.source.name;
    }
    
    email(){
        return this.source.email;        
    }

    imagePath(){
        return this.source.imagePath;
    }

    oauthProvider(){
        return this.source.oauthProvider;
    }

    createdAt(){
        return this.source.createdAt;
    }

    updatedAt(){
        return this.source.updatedAt;
    }

}
export default User