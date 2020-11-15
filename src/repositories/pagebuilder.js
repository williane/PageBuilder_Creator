import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/pagebuilders`;

function create(pagebuilders) {
    return fetch(`${URL_VIDEOS}/1`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(pagebuilders),
    })
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível cadastrar os dados :(');
      });
  }
  
  export default {
    create,
  };