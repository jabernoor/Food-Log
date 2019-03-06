class User {
    constructor(id,name,email,imagePath,oauthProvider){
        this.setId(id);
        this.setName(name);
        this.setImagePath(imagePath);
        this.setEmail(email);
        this.setOauthProvider(oauthProvider);
    }
    setId(id){
        this.id = id;
    }
    setName(name){
        this.id = name;
    }
    setEmail(email){
        this.email = email;
    }
    setImagePath(imagePath){
        this.imagePath = imagePath;
    }
    setOauthProvider(oauthProvider){
        this.oauthProvider = oauthProvider;
    }

    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getImagePath(){
        return this.imagePath;
    }
    getOauthProvider(){
        return thisOauthProvider;
    }
}

export default User;