
export const fetchApi = async (endpoint: string, method:string='GET', data?:any) => {

    try {
      
      if (method === 'GET' || method === 'DELETE') {
      
        return fetch(endpoint,{
            method,
            headers:{ 'Accept': 'application/json', 'Content-Type': 'application/json' },
        });
    
      }else{
    
        return fetch(endpoint,{
            method,
            headers:{ 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    
      }
  
    } catch (error) {

      console.log('error', error);

    }
  
}