const JWT=require("jsonwebtoken");

const secreat="$Harrypotter2004#";

function createTokenForUser(user){
    const payload={
        _id:user._id,
        email:user.email,
        profileImageURL:user.profileImageURL,
        role:user.role,
    }
    const token=JWT.sign(payload,secreat);

    return token;
}

function validateToken(token){
    try{
        const payload=JWT.verify(token,secreat);
        return payload;
    }catch(error){
        console.error("Error in tokenValidation", error);
        return { error: "An unexpected error occurred while validating the token"};
    }
}

module.exports={
    createTokenForUser,
    validateToken
}
