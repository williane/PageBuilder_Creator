
export function getAll() {
    return fetch('http://localhost:8080/pagebuilders')
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados :(');
      });
  }