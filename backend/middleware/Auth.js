const TokenVerifiyBearerJwt = (req, res, next)=>{
    const HeaderBearerToken = req.headers['authorization']
    if(typeof HeaderBearerToken !== 'undefined'){
        const bearer = HeaderBearerToken.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.json({
            "status":400,
            "message": 'kamu tidak mempunyai token, harus ambil token dulu !'
        })
    }
}
module.exports = {
    TokenVerifiyBearerJwt,
}