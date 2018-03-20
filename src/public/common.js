'use strict';


async function fetchJSON(sJSONName){
    try{
        let response = await fetch('/data/' +sJSONName+ '.json');
        if(!response.ok && response.status!==304){
            throw new Error(response.status)
        }
        return await {result: await response.json()};
    }
    catch(err){
        throw new Error(err);
    }
}

module.exports = {
    fetchJSON,
};
