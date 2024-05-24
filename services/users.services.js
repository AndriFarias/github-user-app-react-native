const urlApi = "https://api.github.com"

const getUser = async (usuario) => {
    try {
        const response = await fetch(`${urlApi}/user/${usuario}`)
        const data = response.json()

        if(!response.ok){
            console.log("Usuário não encontrado")
        }
        return data
    } catch (error) {
        console.log(error);
    }
}

export { getUser }