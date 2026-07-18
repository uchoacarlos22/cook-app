# Cook-App

## Sobre o Projeto

O Cook-App é uma aplicação mobile desenvolvida para resolver o dilema comum de "o que cozinhar com o que tenho em casa?". Imagine chegar em casa após um longo dia e perceber que esqueceu de fazer as compras, ou simplesmente estar sem inspiração culinária. O Cook-App vem para solucionar esse problema, sugerindo receitas deliciosas com base nos ingredientes que o usuário já possui. A aplicação oferece uma experiência intuitiva, permitindo a seleção de ingredientes disponíveis e apresentando uma lista de receitas compatíveis, com detalhes de preparo e tempo estimado.

## Tecnologias Utilizadas

O projeto Cook-App foi construído utilizando um conjunto robusto de tecnologias modernas para desenvolvimento mobile e backend:

*   **React Native:** Framework para construção de aplicações móveis nativas usando JavaScript e React.
*   **Expo:** Plataforma que facilita o desenvolvimento, build e deploy de aplicativos React Native, incluindo ferramentas e serviços essenciais.
*   **Expo Router:** Solução de roteamento baseada em arquivos para aplicações Expo e React Native, simplificando a navegação entre telas.
*   **Supabase:** Backend open-source que oferece funcionalidades de banco de dados (PostgreSQL), autenticação, armazenamento de arquivos e APIs em tempo real, utilizado para gerenciar ingredientes, receitas e preparações.
*   **React Native Reanimated:** Biblioteca para criar animações e interações fluidas e de alta performance em aplicações React Native.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e manutenibilidade do código.

## Funcionalidades

O Cook-App oferece as seguintes funcionalidades principais:

1.  **Seleção de Ingredientes:** O usuário pode navegar por uma lista de ingredientes disponíveis e selecionar aqueles que possui em casa. A interface é visual e interativa, com ícones representativos para cada ingrediente.
2.  **Busca de Receitas por Ingredientes:** Com base nos ingredientes selecionados, o aplicativo filtra e exibe uma lista de receitas que podem ser preparadas. Um contador indica quantos ingredientes selecionados são utilizados em cada receita.
3.  **Visualização Detalhada da Receita:** Ao selecionar uma receita, o usuário tem acesso a uma tela detalhada contendo:
    *   Imagem da receita.
    *   Nome da receita.
    *   Tempo estimado de preparo.
    *   Lista dos ingredientes necessários.
    *   Passos detalhados do modo de preparo.
4.  **Interface Intuitiva e Animada:** A aplicação conta com um design limpo e animações suaves, proporcionadas pelo React Native Reanimated, que enriquecem a experiência do usuário, especialmente na seleção de ingredientes e na transição entre telas.
5.  **Gerenciamento de Dados com Supabase:** Todos os dados de ingredientes, receitas e passos de preparo são armazenados e gerenciados via Supabase, garantindo escalabilidade e facilidade de acesso.

## Fluxo do Usuário

O fluxo de uso do Cook-App é simples e direto:

1.  **Início:** O usuário abre o aplicativo e é apresentado à tela de seleção de ingredientes.
2.  **Escolha:** Seleciona os ingredientes que possui em sua geladeira ou despensa.
3.  **Busca:** Um painel inferior animado aparece, mostrando a quantidade de ingredientes selecionados e um botão para "Encontrar Receitas".
4.  **Resultados:** Ao clicar em "Encontrar Receitas", o aplicativo exibe uma lista de pratos que podem ser feitos com os itens escolhidos.
5.  **Detalhes:** O usuário clica em uma receita para ver seus detalhes, incluindo ingredientes e o passo a passo de preparo.

## Como Rodar o Projeto

Para configurar e executar o Cook-App em seu ambiente de desenvolvimento, siga os passos abaixo:

### Pré-requisitos

*   Node.js e npm (ou Yarn) instalados.
*   Expo CLI instalado globalmente (`npm install -g expo-cli`).
*   Uma conta Supabase e um projeto configurado com as tabelas `ingredients`, `recipes`, `preparations` e `recipes_ingredients`.

### Configuração do Supabase

1.  Crie um novo projeto no Supabase.
2.  Crie as tabelas necessárias (`ingredients`, `recipes`, `preparations`, `recipes_ingredients`) conforme o modelo de dados do projeto.
3.  Preencha as tabelas com dados de exemplo de ingredientes e receitas.
4.  Obtenha a `URL` do seu projeto Supabase e a `Anon Key`.
5.  No arquivo `.env` (ou diretamente no `app.json` do Expo, se preferir), configure as variáveis de ambiente:
    ```
    EXPO_PUBLIC_SUPABASE_URL="SUA_URL_SUPABASE"
    EXPO_PUBLIC_SUPABASE_ANON_KEY="SUA_ANON_KEY_SUPABASE"
    ```

### Instalação e Execução

1.  Clone o repositório do projeto:
    ```bash
    git clone [URL_DO_REPOSITORIO]
    cd cook-app
    ```
2.  Instale as dependências:
    ```bash
    npm install
    # ou yarn install
    ```
3.  Inicie o aplicativo Expo:
    ```bash
    expo start
    ```
4.  Use o aplicativo Expo Go no seu celular ou um emulador para escanear o QR code e rodar a aplicação.

## Links Úteis

*   **Figma:** [https://www.figma.com/community/file/1346604268107725445/cook-app](https://www.figma.com/community/file/1346604268107725445/cook-app)
*   **Vídeo Demonstrativo/Aula:** [https://www.youtube.com/watch?v=xmtDatG6SZk](https://www.youtube.com/watch?v=xmtDatG6SZk)

---
