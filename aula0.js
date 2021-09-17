//Seguranca Virtual

function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan']
        if(ConvidadosCristian.includes(NomeConvidado)){
            document.getElementById('PermissaoDeEntrada').innerText ='Voce pode Entrar!'
        } else {
            document.getElementById('PermissaoDeEntrada').innerText ='Voce nao pode Entrar!'
        }
}