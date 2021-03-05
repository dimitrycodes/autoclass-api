const mutableFetch = (params, method) => {
    params = params ? params : '';
    method = method ? method : { method: 'GET' }
  
      return fetch(`http://localhost:8000/api/${params}`, method)
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
  }
  
  export default mutableFetch;