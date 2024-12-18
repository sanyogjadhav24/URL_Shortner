const sessionIdTOUserMap=new Map();

function setUser(id,user){
    sessionIdTOUserMap.set(id,user);
}

function getuser(id){
    return sessionIdTOUserMap.get(id);
}

module.exports={
    setUser,
    getuser

}