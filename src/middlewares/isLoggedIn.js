export default (req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    req.redirect('/login');
}