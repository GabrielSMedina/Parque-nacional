function enviarMensagem(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  const mensagemSucesso = document.getElementById('mensagem-sucesso');
  const mensagemErro = document.getElementById('mensagem-erro');

  if (nome && email && mensagem) {
      mensagemSucesso.style.display = 'block';
      mensagemErro.style.display = 'none';

      document.getElementById('form-contato').reset();

      setTimeout(() => {
          mensagemSucesso.style.display = 'none';
      }, 4000);
  } else {
      mensagemSucesso.style.display = 'none';
      mensagemErro.style.display = 'block';

      setTimeout(() => {
          mensagemErro.style.display = 'none';
      }, 4000);
  }
}

  
