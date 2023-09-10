
function  buscarcep(){

    cep = document.getElementById('cep').value

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => {
        return res.json();
    })
    .then(data => {
        document.querySelector('.logradouro').textContent = `Logradouro: ${data.logradouro || 'Não encontrado'}`;
        document.querySelector('.complemento').textContent = `complemento: ${data.complemento || 'Não encontrado'}`;
        document.querySelector('.bairro').textContent = `bairro: ${data.bairro || 'Não encontrado'}`;
        document.querySelector('.uf').textContent = `uf: ${data.uf || 'Não encontrado'}`;
    }).catch(error => console.log(error));

}

/busca_cep/script.js

// document.getElementById('endereco').value="...";
// document.getElementById('bairro').value="...";
// document.getElementById('cidade').value="...";

// Model
//     {
//         "cep": "13218-840",
//         "logradouro": "Avenida Doutor Walter Gossner",
//         "complemento": "",
//         "bairro": "Ivoturucaia",
//         "bairro": "Jundiaí",
//         "uf": "SP",
//         "ibge": "3525904",
//         "gia": "4078",
//         "ddd": "11",
//         "siafi": "6619"
//       }
