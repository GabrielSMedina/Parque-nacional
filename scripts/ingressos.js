function reservarIngresso(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const data = document.getElementById('data').value;
  const email = document.getElementById('email').value;

  const mensagemSucesso = document.getElementById('mensagem-sucesso');
  const mensagemErro = document.getElementById('mensagem-erro');

  if (nome && data && email) {
      mensagemSucesso.style.display = 'block';
      mensagemErro.style.display = 'none';

      document.getElementById('form-ingresso').reset();

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
