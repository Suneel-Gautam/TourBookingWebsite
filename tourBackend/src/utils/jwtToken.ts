
import jwt from 'jsonwebtoken'

interface playloadInterface {
    id : number, 
    name : string , 
    email : string , 
    phonenumber : string

}



export const jwtTokenGenerator = (playload : playloadInterface) =>{

    return jwt.sign(playload ,  )

}