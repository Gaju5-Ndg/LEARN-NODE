const createUser= req =>{
    const createUser= {
        email:req.body.email,
        names:req.body.names,
        password:req.body.password
    }
        return createUser;
}

const changeRole= req =>{
    const role= {
       role:req.body.role,
    }
        return role;
}
const changeStatus= req =>{
    const status= {
       status: req.body.status,
    }
        return status;
}

const loginUser = (req )=> {
    const user = {
        email: req.body.email,
        password: req.body.password,
        
    }

    return user;
}
    const deleteUser = (req )=> {
        const erase = {
            _id:req.query.id,
            
        }
    
    
        return erase;
    }
        const disactivateUser = (req )=> {
            const disable = {
                status:req.body.status,
                
            }
        
        
            return disable;
        }
       
        const updateUser = (req )=> {
            const update = {
                names: req.body.names,
                email: req.body.email,
                password: req.body.password,
            }
        
        
            return update;
        }


export default {createUser, loginUser, changeRole, changeStatus,deleteUser,disactivateUser,updateUser}
