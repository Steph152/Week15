// class that handles all of the API calls
// more reusable

const FLOWER_ENDPOINT = 'https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers';       // api url

class FlowerApi {                                                                  //normal class
    get = async () => {                                                             // async function
        try{
            const resp = await fetch(FLOWER_ENDPOINT);          //try/catch incase something goes wrong with network call
            const data = await resp.json();                     //turns data from response to json
            return data;
        } catch(e) {
            console.log('Oops, looks like there was an issue.', e)   // logs e which is the exception
        }
    }

    put = async (flower) => {                                               
        try{
            const resp = await fetch(`${FLOWER_ENDPOINT}/${flower.id}`, {           //update flowers 
                method: 'PUT',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(flower)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating flowers had an issue.', e) 
        }  
    }
}

export const flowerApi = new FlowerApi();