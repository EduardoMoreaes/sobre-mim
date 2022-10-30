import projetos from "./003_page.js";
var msg = 0;

async function send_msg1(){
    if (msg == 0){
        document.getElementById('mensages').innerHTML += "<p class='visitor'>Olá, qual o seu nome?</p>";
        await timer(1);
        document.getElementById('mensages').innerHTML += "<p class='me'>Olá, Me chamo Eduardo muito prazer!</p>";
        document.getElementById('buttons_send_mensage').innerHTML = '<input type="button" value="O que você faz?" id="option" onClick="send_msg1()">'
        msg++;
    }
    else if (msg == 1){
        document.getElementById('mensages').innerHTML += "<p class='visitor'>O que você faz?</p>";
        await timer(1);
        document.getElementById('mensages').innerHTML += "<p class='me'>Sou desenvolvedor full-stack, eu mesmo que fiz tudo o que está vendo aqui.</p>";
        document.getElementById('buttons_send_mensage').innerHTML = '<input type="button" value="Que legal Eduardo!" id="option" onClick="send_msg1()">'
        msg++;
    }
    else if (msg == 2){
        document.getElementById('mensages').innerHTML += "<p class='visitor'>Que legal Eduardo!</p>";
        await timer(1);
        document.getElementById('mensages').innerHTML += "<p class='me'>Obrigado.</p>";
        document.getElementById('buttons_send_mensage').innerHTML = '<input type="button" value="Tem quantos anos?" id="option" onClick="send_msg1()">'
        msg++;
    }
    else if (msg == 3){
        let dataAtual = new Date();
        let ano = dataAtual.getYear();
        const idade = (ano-100+2000)-2003;
        document.getElementById('mensages').innerHTML += "<p class='visitor'>Tem quantos anos?</p>";
        await timer(1);
        document.getElementById('mensages').innerHTML += "<p class='me'>Atualmente tenho " + idade + " anos.</p>";
        document.getElementById('buttons_send_mensage').innerHTML = '<input type="button" value="Por que virou programador?" id="option" onClick="send_msg1()">'
        msg++;
    }
    else if (msg == 4){
        document.getElementById('mensages').innerHTML += "<p class='visitor'>Por que virou programador?</p>";
        await timer(1);
        document.getElementById('mensages').innerHTML += "<p class='me'>Acredite se quiser, mas eu me apaixonei em criar sites e aplicativos, me divirto muito tanto estudando a área, quanto programando de fato, é como um quizz para resolver, e o final sempre é satisfatório.</p>";
        document.getElementById('buttons_send_mensage').innerHTML = '<input type="button" value="Quais tecnologias tu conhece?" id="option" onClick="send_msg1()">'
        msg++;
    }
    else if (msg == 5){
        document.getElementById('mensages').innerHTML += "<p class='visitor'>Quais tecnologias tu conhece?</p>";
        await timer(1);
        document.getElementById('mensages').innerHTML += "<p class='me'>As que eu mais domino são essas: <br> <img src='https://96renato96.files.wordpress.com/2014/10/javascript-logo-png1.png' class='tecnology'> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' class='tecnology'> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' class='tecnology'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/800px-R_logo.svg.png' class='tecnology'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' class='tecnology'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' class='tecnology'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png' class='tecnology'></p>";
        document.getElementById('buttons_send_mensage').innerHTML = '<input type="button" value="Contato" id="option" onClick="send_msg1()">'
        msg++;
    }
    else if (msg == 6){
        document.getElementById('mensages').innerHTML += "<p class='visitor'>Gostei de você, qual o seu contato para negociarmos um projeto?</p>";
        await timer(1);
        document.getElementById('mensages').innerHTML += "<p class='me'>Opa! Meu e-mail é <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCGDBhwpHbBtFcQJTKgknxqhmXXMKLBlbVhzghMVQhchzxTHsxpHxxngzGHJlrkmDxSRwg'>lmoraeseduardo@gmail.com</a></p>";
        document.getElementById('buttons_send_mensage').innerHTML = '<p class="placeholder">A conversa encerrou...</p>'
        msg++;
    }

    console.log('Escrita de mensagens.........Ok');
}
async function timer(seconds){
    let time = seconds * 1000;
    return new Promise(res => setTimeout(res, time));
}


function moving(i) {
    if(i == 1){
        document.getElementById('all_projects').innerHTML = projetos.geomidia
        console.log('right')
    }else if(i==2){
        console.log('left')
    }
}
