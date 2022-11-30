const project =[
    geomidia = [
        Project = "Geomidia",
        description = "Geomídia é um app-web, criado com intuito de auxiliar os professores de geografia, nas aulas de geopolítica, retendo maior atenção com aulas mais interativas e dinâmicas. Desenvolvido na linguagem R, apresentando dashboards com resumos simples, baseados em artigos e livros geopolíticos.",
        id = "918261802",
        rote = "./images/geomidia.vercel.app.png"
    ]
]

function load_project(proj){

    let title = document.getElementById("name_project");
    let text = document.getElementById("text_project");

    title.innerText = project[proj][0];
    text.innerText = project[proj][1];
}

var i = 0;
function nextPJ(){
    if(i < project.length) {
        load_project(i);
        i++;
    }else if(project.length < 2){
        alert("Lamento! Não possuímos mais projetos :'(. Entre em contato e vamos aumentar essa quantidade juntos! :D");
    } else if(i >= project.length){
        i=0;
        load_project(i);
        i++;
    }
    console.log("oi", i)
}