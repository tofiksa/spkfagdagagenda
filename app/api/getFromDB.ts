
interface DetailsItem {
    navn: string;
    rom: string;
    tema: string;
    urls: Url[];
  }

  interface Url {
    value: string;
  }


  export const getFromDB = async (id: string)  => {

    try {
    let res = await fetch(`/api/conferance/get/?id=${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
  
    const { result = '' } = await res.json();
   
    console.log('result ', result);
    if (result != null) {
  
    if (!result || !result.details) {
      throw new Error('Invalid response format: missing details');
    }
  
    const details: DetailsItem[] = result.details;
    
    return details;
  }
  } catch (error) {
    // Handle the error appropriately, e.g., log it or show a user-friendly message
    console.error('Error fetching data:', error);
    // You might want to throw the error again if you want the caller to handle it further
    throw error;
  }
  return null;
  }