const fetchWineByID = (wineID) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://wine-app100.herokuapp.com/wines/${wineID}`)
      .then((response) => response.json())
  }
  


//The Wine api url is down...
//https://wineapi-cp.herokuapp.com/wines

//You used another random api to test and it returned data
//https://jsonplaceholder.typicode.com/todos/1

// const fetchWines = () => {
//     return fetch(`https://cors-anywhere.herokuapp.com/https://wineapi-cp.herokuapp.com/wines`)
//         .then((response) => response.json())
// }


 const fetchWines = () => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://wine-app100.herokuapp.com/wines/`)
      .then((response) => response.json())
  }


const addWine = (wineObject) => {
    return fetch('https://cors-anywhere.herokuapp.com/https://wine-app100.herokuapp.com/wines/', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(wineObject)
    })
  }



export  {
    fetchWineByID,
    fetchWines,
    addWine
}

