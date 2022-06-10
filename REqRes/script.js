const url = "https://reqres.in/api/users";
const container = document.getElementById("demo");

async function criarUsuaria(){
  try{
    const resposta = await fetch(url, {
      method: "POST",
      body: {
        "name": "nome",
        "job": "job"
      }
    })
    const data = await resposta.json()
    container.innerHTML = JSON.stringify(data);
  }
  catch(error){
    console.error(error);
  }
}


criarUsuaria()