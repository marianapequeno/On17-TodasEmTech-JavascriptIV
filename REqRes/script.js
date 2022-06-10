<<<<<<< HEAD
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
=======
const url = "https://reqres.in/api/users"
const container = document.getElementById('demo') 

async function criarUsuaria() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: {
        "name": "lilit",
        "job": "engenheira de software"
    }
    })
    const data = await response.json()
    
    container.innerHTML = JSON.stringify(data)
  }
  catch(error) {
    console.log("HTTP-Error: " + error);
  }
}

// criarUsuaria()


async function atualizarUsuaria() {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: {
        "name": "lilit",
        "job": "engenheira de software"
    }
    })
    const data = await response.json()
    
    container.innerHTML = JSON.stringify(data)
  }
  catch(error) {
    console.log("HTTP-Error: " + error);
  }
}

// atualizarUsuaria()


async function modificarUsuaria() {
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      body: {
        "name": "lilit",
        "job": "engenheira de software"
    }
    })
    const data = await response.json()
    
    container.innerHTML = JSON.stringify(data)
  }
  catch(error) {
    console.log("HTTP-Error: " + error);
  }
}

// modificarUsuaria()

async function deletararUsuaria() {
  try {
    const response = await fetch(url, {method: 'DELETE'})
    if (response.ok) {
      container.innerHTML = "Deletado!"
    }
  }
  catch(error) {
    console.log("HTTP-Error: " + error);
  }
}

deletararUsuaria()
>>>>>>> b299f76d2edc505c30347720bd04c6d8dbef7dd0
