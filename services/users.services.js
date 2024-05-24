const urlApi = "https://api.github.com";

const getUser = async (usuario) => {
  try {
    const response = await fetch(`${urlApi}/users/${usuario}`);
    const data = await response.json(); 

    if (!response.ok) {
      console.log("Usuário não encontrado");
    }
    return data;
  } catch (error) {
    console.log(error);
    return null; 
  }
}

export { getUser };
