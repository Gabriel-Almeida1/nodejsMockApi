function Get() {

  return fetch('https://apigenerator.dronahq.com/api/y_ZC6Ynh/car_info')

    .then((response) => response.json())

    .then((data) => console.log(data));

}

async function postData(url = '', data = {}) {

  const response = await fetch(url, {

    method: 'POST', // *GET, POST, PUT, DELETE, etc.

    mode: 'cors',

    cache: 'no-cache',

    credentials: 'same-origin',

    headers: {

      'Content-Type': 'application/json'

    },

    redirect: 'follow',

    referrerPolicy: 'no-referrer',

    body: JSON.stringify(data)

  });

  return response.json();

}

async function putData(url = '', id = 0, data = {}) {

    const response = await fetch(`${url}/${id}`, {
  
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }


async function getByID(url = '', id = 0){
    const response = await fetch(`${url}/${id}`, {
  
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
    
        mode: 'cors',
    
        cache: 'no-cache',
    
        credentials: 'same-origin',
    
        headers: {
    
          'Content-Type': 'application/json'
    
        },
    
        redirect: 'follow',
    
        referrerPolicy: 'no-referrer',
    
      });
    
      return response.json();
}

async function deleteData(url = '', id = 0, data = {}) {
    
    const response = await fetch(`${url}/${id}`, {
  
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.

    mode: 'cors',

    cache: 'no-cache',

    credentials: 'same-origin',

    headers: {

      'Content-Type': 'application/json'

    },

    redirect: 'follow',

    referrerPolicy: 'no-referrer',

  });}

  // object
  let car = {"brand": "fiat",
  "model": "uno",
  "category": "hatch",
  "year": 2015,
  "km": 50000,
  "value": 20000}



// calling methods


// postData('https://apigenerator.dronahq.com/api/y_ZC6Ynh/car_info', car /* OBJETO A SER USADO */)

// putData('https://apigenerator.dronahq.com/api/y_ZC6Ynh/car_info', 2, car)

// getByID('https://apigenerator.dronahq.com/api/y_ZC6Ynh/car_info', 2)

deleteData('https://apigenerator.dronahq.com/api/y_ZC6Ynh/car_info', 7)

  .then((data) => {

    console.log(data);  

});

Get()
