function limpaFormulario() {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
}

async function pesquisacep(valor) {
    const cep = valor.replace(/\D/g, '');

    if (cep.length !== 8) {
        limpaFormulario();

        if (cep !== '') {
            alert('Formato de CEP inválido.');
        }

        return;
    }

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const endereco = await resposta.json();

        if (endereco.erro) {
            limpaFormulario();
            alert('CEP não encontrado.');
            return;
        }

        document.getElementById('rua').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('uf').value = endereco.uf;
    } catch (erro) {
        limpaFormulario();
        alert('Não foi possível consultar o CEP.');
    }
}
