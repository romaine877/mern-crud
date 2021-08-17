export const getItems = async () =>{
    let response = await fetch("http://localhost:4000/")
    let data = await response.json()
    return data
}

export const getItem = async (id) =>{
    let response = await fetch(`http://localhost:4000/${id}`)
    let data = await response.json()
    return data
}

export const postItem = async (todo) =>{
    console.log(todo)
    let response = await fetch("http://localhost:4000/create", {
        method: "POST",
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })
    let data = await response.json()
    
    return data
}

export const patchItem = async (id, todo) =>{
    let response = await fetch(`http://localhost:4000/${id}`, {
        method: "PATCH",
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
        
    })
    let data = await response.json()
    return data
}