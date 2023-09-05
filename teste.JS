
function  buscarcep(){

    cep = document.getElementById('cep').value

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => {
        return res.json();
    })
    .then(data => {
    // console.log(data)
    }).catch(error => console.log(error));
    
}



// document.getElementById('endereco').value="...";
// document.getElementById('bairro').value="...";
// document.getElementById('cidade').value="...";

// Model
//     {
//         "cep": "13218-840",
//         "logradouro": "Avenida Doutor Walter Gossner",
//         "complemento": "",
//         "bairro": "Ivoturucaia",
//         "localidade": "Jundiaí",
//         "uf": "SP",
//         "ibge": "3525904",
//         "gia": "4078",
//         "ddd": "11",
//         "siafi": "6619"
//       }
