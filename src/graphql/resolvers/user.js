import schema from '../../schemes/UserSchema';

class User {

    constructor(id){
        return (async () => {
            this.id = id;
            this.source = await schema.findByPk(id,{raw:true});
            return this;
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

}
export default User