import url from "./Url.js";

async function getDataCamber (){
    try {
        let data= await fetch(url);
        if (!date.ok){
            throw new error("El erro es:",data.status)
        }
        const dataJson= await data.json()
        console.log(dataJson.result);
        return dataJson.result;

        console.log( await data.json())
    } catch (error) {
        console.log(error.message)
    }
}
export default getDataCamber;