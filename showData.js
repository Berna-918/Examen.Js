import getDataCamber from "./getData.js";

async function showData(){
    let data = await getDataCamber()
let div = document.getElementById("content")
data.array.forEach(element => {
    let p = document.createElement('p')
    p.innerHTML=element.house
    div.appendChild(p)
});
}
export default showDataCamber()


























