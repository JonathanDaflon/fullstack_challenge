Esse projeto consiste em um CRUD front-end em Angular, uma API Restful em Nodejs (Typescript) e o banco de dados MongoDB.

Para utilizar esse projeto você precisará das ferramentas acima e seguir os passos abaixo:

1) Baixar o repositório em seu computador;
2) Para subir a API você precisará utilizar os comandos:
      - cd back-end
      - npm i
      - cd dist
      - node main

Com esses passos a API mostrará no console as rotas utilizadas para ser consumida, além de criar automaticamente um usuário
com as seguintes características: 
  
      { 
        name: admin,
        email: admin@admin.com,
        password: admin,
        gender: Male
      }
      
3) Abrindo outro terminal na raíz do projeto agora você precisa subir o front-end:
      - cd front-end
      - npm i
      - ng s
      
Agora a rota localhost:4200 será mostrada no terminal, ao chegar entrar nesse endereço você será redirecionado à tela de login:

Login: https://prnt.sc/tosy2a

Para ter acesso às outras views por favor insira o email: admin@admin.com e a senha: admin. Você será direcionado à rota crud/home.
Nela você poderá realizar as operações: criar, editar e excluir nos botões inferiores e uma tabela que mostra todos os dados que você cadastrar.

Home: https://prnt.sc/tosxp1

Você também verá um menu de navegação com tabs na parte superior, assim como um botão de logout. O botão de logout elimina o token da memória
e faz com que você seja redirecionado à pagina de login. Na tab de navegação o botão Gráfico redirecionará para a view de um gráfico gerado
a partir dos dados inseridos na tab Home.

Gráfico: https://prnt.sc/tosyyo

Pronto! você conseguiu utilizar esse projeto. Qualquer dúvida por favor entre em contato pelo email: joanthandaflon@yahoo.com
