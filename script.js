// Teste básico para garantir que o JavaScript está funcionando
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar
    alert('Tentativa de login enviada! Próximo passo: construir a Dashboard da JJEV.');
});
// Aguarda a página carregar completamente
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector('.login-form');

    // Se o formulário de login existir na tela atual, adiciona a ação
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede a página de recarregar
            
            // Faz a troca de tela para o novo painel
            window.location.href = "dashboard.html";
        });
    }
});
