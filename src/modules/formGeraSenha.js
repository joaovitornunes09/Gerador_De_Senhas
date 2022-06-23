import geraSenha from './gerador_senha';

const senhaGerada = document.querySelector('.senha-gerada');
const quantidadeCaracteres = document.querySelector('.quantidade_caracteres');
const adicionarNumeros = document.querySelector('.adicionar_numeros');
const letraMaiuscula = document.querySelector('.letra_maiuscula');
const letraMinuscula = document.querySelector('.letra_minuscula');
const simbolos = document.querySelector('.simbolos');
const gerarSenha = document.querySelector('.gerar-senha')

export default () => {
    
    gerarSenha.addEventListener('click', () => {
        
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(quantidadeCaracteres.value,
                            letraMaiuscula.checked,
                            letraMinuscula.checked,
                            adicionarNumeros.checked,
                            simbolos.checked
        ) 

        return senha || 'Nada selecionado';

    
}