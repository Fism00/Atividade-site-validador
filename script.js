function validadorjs() {
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const nascimento = document.getElementById('nascimento').value.trim();
    const idade = parseInt(document.getElementById('idade').value, 10);
    
    console.log(/^[a-zA-Z\s]+$/.test(nome));


    if (!nome || !/^[a-zA-Z\s]+$/.test(nome)){
        alert('Por Favor, Preencha Corretamente o nome! lembre-se so usé espaços não use qualquer caractere especial');
        return;
    }

    if (isNaN(idade) || idade<18 ){
        alert('A Idade Sua idade não bate o minimo da empresa!');
        return;
    }

    if(!nascimento){
    }

    if(!cpf || cpf.length !== 11 || isNaN(cpf)){
        alert('Por Favor, Preencha Corretamente o cpf!');
        return;
    }
}

