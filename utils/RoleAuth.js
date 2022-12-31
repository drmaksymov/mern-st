import  jwt  from 'jsonwebtoken';

export default (req, res, next) => {

    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');


   /*  res.send(token) */
    if(token){
        try {
                const decoded = jwt.verify(token, 'myCot86');
                req.userId = decoded._id;
                req.Roles = decoded.roles;
               
                 if(req.Roles === "admin") {
                  return   next();    
                
                
                } res.redirect('/login')
               
                
                
             
              
            } catch (e) {
                return res.status(403).json({
                    message: "Немає доerewreсту па 2"
            });


    }  
            
  
    

} else {
   /*  res.status(403).json({
        message: "Ви не зарреєстровані"
    }); */
    res.redirect('https://bezpechni.com/')
}


};
