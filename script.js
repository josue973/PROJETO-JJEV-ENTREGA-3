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
    // 3. Lógica de busca no Dashboard
const campoBusca = document.getElementById('busca-produto');

if (campoBusca) {
    campoBusca.addEventListener('input', function () {
        const termo = campoBusca.value.toLowerCase();
        const categorias = document.querySelectorAll('.grid-item');
const mensagemSemResultados = document.getElementById('sem-resultados');
let encontrouResultado = false;
        categorias.forEach(function (categoria) {
            const nome = categoria.innerText.toLowerCase();

            if (nome.includes(termo)) {
    categoria.style.display = '';
    encontrouResultado = true;
} else {
    categoria.style.display = 'none';
}
        });
        if (mensagemSemResultados) {
    mensagemSemResultados.style.display =
        encontrouResultado ? 'none' : 'block';
}
    });
}
// 4. Filtro pelas categorias do menu
const filtroCategorias = document.getElementById('filtro-categorias');

if (filtroCategorias) {
    const linksCategorias = filtroCategorias.querySelectorAll('a');

    linksCategorias.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const categoriaSelecionada = link.innerText.toLowerCase();
            const categorias = document.querySelectorAll('.grid-item');

            categorias.forEach(function (categoria) {
                const nome = categoria.innerText.toLowerCase();

                if (nome.includes(categoriaSelecionada)) {
                    categoria.style.display = '';
                } else {
                    categoria.style.display = 'none';
                }
            });
        });
    });
}
// 5. Botão para limpar a busca
const botaoLimpar = document.getElementById('limpar-busca');

if (botaoLimpar && campoBusca) {
    botaoLimpar.addEventListener('click', function () {
        campoBusca.value = '';

        const categorias = document.querySelectorAll('.grid-item');

        categorias.forEach(function (categoria) {
            categoria.style.display = '';
        });
    });
}
// 6. Atualiza o título ao selecionar uma categoria
const tituloCategorias = document.getElementById('titulo-categorias');

if (filtroCategorias && tituloCategorias) {
    const links = filtroCategorias.querySelectorAll('a');

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            tituloCategorias.innerText = 'Categoria: ' + link.innerText;
        });
    });
}

// 7. Botão para sair do Dashboard
const botaoSair = document.getElementById('btn-sair');

if (botaoSair) {
    botaoSair.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
}
// 8. Mensagem ao selecionar uma categoria
const mensagemCategoria = document.getElementById('mensagem-categoria');

if (filtroCategorias && mensagemCategoria) {
    const links = filtroCategorias.querySelectorAll('a');

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            mensagemCategoria.innerText =
                'Você selecionou a categoria ' + link.innerText + '.';
        });
    });
}
});
