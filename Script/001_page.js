const textoArrayA = ['>',' ','c','o','n','s','o','l','e','.','l','o','g','(','"',
'H','e', 'l', 'l', 'o', ' ',
 'W', 'o', 'r', 'l', 'd','"',')',';','<br>'];
const textoArrayB = ['> Hello World'];


async function write(){
    for (let i = 0; i < textoArrayA.length; i++) {
        document.getElementById('h1').innerHTML += textoArrayA[i];
        console.log("Loading...");
        await timer(0.5);
    }
    document.getElementById('h1').innerHTML = " ";
    document.getElementById('h1').innerHTML = textoArrayB;
    console.log("Escrita no cabeçalho.........Ok")
}
async function timer(seconds){
    let time = seconds * 1000;
    return new Promise(res => setTimeout(res, time));
}
write();