
const userURL="https://reqres.in/api/users"

const createUser = async(usuario) => {
  
    const resp = await fetch(userURL, {
        method: 'POST',
        body: JSON.stringify(usuario), 
        headers: {
            "Content-Type": "application/json"
        }
    })
    

    return await resp.json();
}

const readUser = async({id}) => {
    
    const resp = await fetch(`${userURL}/${id}`);
    const {data} = await resp.json();
    return data;

  }

  const updateUser = async(id, usuario) => {

    const resp = await fetch(`${userURL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario), 
        headers: {
            "Content-Type": "application/json"
        }
    })

    return await resp.json();
}

 const deleteUser = async({id}) => {
    const resp = await fetch(`${userURL}/${id}`, {
        method: 'DELETE'
    });

     return (resp.ok)? "borrado" : "no se pudo eliminar";
  }

  export {
      createUser,
      readUser,
      updateUser,
      deleteUser
  }