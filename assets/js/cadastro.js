// 4. Lógica de Redirecionamento de Cadastro
document.addEventListener("DOMContentLoaded", function() {
    const cadastroForm = document.querySelector('.form-grid');

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            // 1. Impede o comportamento padrão de recarregar a página
            e.preventDefault(); 
            
            // 2. Mostra o alerta (opcional, mas ajuda a saber se o código rodou)
            console.log("Cadastro concluido com sucesso!");

            // 3. Redireciona para o login
            // IMPORTANTE: Verifique se o seu arquivo se chama exatamente login.html
            window.location.href = "login.html"; 
        });
    }
});