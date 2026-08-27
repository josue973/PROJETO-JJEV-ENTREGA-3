document.addEventListener("DOMContentLoaded", function () {
    // 1. Lógica da Tela de Login (index.html)
    const formularioLogin = document.querySelector('.login-form');
    if (formularioLogin) {
        formularioLogin.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = "dashboard.html";
        });
    }

    // 2. Lógica da Tela de Cadastro (cadastro.html)
    const formularioCadastro = document.querySelector('.cadastro-form');
    if (formularioCadastro) {
        formularioCadastro.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const senha = document.getElementById('senha-cadastro').value;
            const confirmaSenha = document.getElementById('senha-confirma').value;

            // Validação simples: verifica se as senhas são iguais
            if (senha !== confirmaSenha) {
                alert('Atenção: As senhas digitadas não são iguais!');
                return;
            }

            alert('Cadastro realizado com sucesso na JJEV Vendas Online!');
            // Redireciona de volta para o login para o usuário se autenticar
            window.location.href = "index.html";
        });
    }
});
