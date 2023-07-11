# Informações do Projeto
`TÍTULO DO PROJETO`  

Semeando em Casa

`CURSO` 

Ciência da Computação 

## Participantes

Pedro Tinoco Lanna
Gabriel Samarane Ribeiro
Pedro Afonso Marinho 

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema
 
 É nitido que a agricultura familiar é de grande importância na sociedade brasileira, mas ao consultarmos os agricultores da região, percebemos que boa parte não tem um conhecimento necessário para desenvolver a plantação, ampliar ela de maneira diversificada e mais produtiva, além de não ter acesso a informações confiavéis e seguras para cuidar do próprio cultivo. Logo o projeto “Semear em Casa”, tem como foco principal a agricultura familiar, buscando ajudar pessoas que procuram ter, ou já possuem a sua própria plantação, fornecendo de maneira rápida e direta informações confiáveis sobre os cuidados e dicas.

![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/c204e75b-dcdd-4d38-a0a0-c24fd309da90)

## Objetivos

O objetivo do nosso software, é auxiliar levando informações confiáveis seguras para os agricultores sobre os melhores métodos de cuidados que se deve ter na plantação além de ensinar para aqueles que buscam iniciar uma plantação, todos os pré requisitos e cuidados que se deve ter para começar uma plantação. Além disso buscamos unificar a comunidade de agricultores para que aja um auxílio mútuo para gerar um gama de informações sobre diversos conhecimentos na área por meio de um forúm de perguntas e respostas.



## Justificativa

 É notável que no país o AGRO seja muito importante para a economia do Estado, mas poucos sabem que isto persiste no estado de Minas Gerais, o valor bruto gerado pelos pequenos agricultores é cerca de 25% do valor bruto da produção agropecuária de Minas Gerais. Por meio disto, buscamos auxiliar este nicho da sociedade, ajudando não só em sua ampliação de contribuintes, mas tambémno aumento de valor bruto arrecadado.



## Público-Alvo

Buscamos atingir não só aqueles que pensam em iniciar como agricultor, mas também aqueles que buscam ter uma pequena horta em sua casa ou apartamento, além de alcançar aqueles que estão a mais tempo nesse ramo.


 
# Especificações do Projeto

Nesta seção será apresentado à quem este serviço irá beneficiar. Através das personas, dos mapas de empatia, propostas de valor e a história dos usuário, é possível contextualizar quem será o usuário. Também é apresentado os requisitos e restrições da criação do projeto, visando mostrar com detalhes o foco do projeto, assim como possíveis dificuldades e limitações.


## Personas, Empatia e Proposta de Valor

As personas do serviço "Semeando em Casa" são pessoas que em geral buscam informações para sua plantação, seja pra controle de pragras, ampliação, diversificação entre outras informações. Além disso são personas que variam em seus objetivos, que buscam ter uma vaso ou outro em casa para ter uma pequena horta, até aqueles que buscam ter uma plantação mais sustentável.

![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/8b48d8a7-9c70-4e38-839d-f43b239088a1)
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/cd423a40-a484-4a5d-935f-9e98e265273a)

Baseando nas personas que usaram nosso site, fizemos uma proposta de valor que abrangesse ambas personas.

![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/1e0ee72e-b7d4-4f62-a6f4-012e4a0b7a90)






## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|José Henrique  | Ampliar minha horta          | Aumentar meus lucros               |
|Maria       | Começar uma horta em casa                 | Para ter verduras frescas nos almoços em família |



As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário acesse informações sobre plantas e cuidados em geral | ALTA | 
|RF-002| Um forúm de perguntas e respostas   | ALTA |
|RF-003| Pagina para cadastro de plantas que mostre a saude da planta  | MÉDIA |
|RF-004| IA integrada para analisar possiveis doenças de plantas   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Alterar tema de cor da pagina |  BAIXA |




## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto deve ser constantemente analisado e avaliado pelos professores        |
|04| Todos os membros do grupo devem participar efetivamente        |



# Projeto de Interface

Nosso projeto terá inicialmente 4 paginas. Uma home que fornecera informações osbre plantas além de levar o usuario para outras paginas. Teremos um forum de perguntas e respostas e uma pagina para cadastro plantas. Além de pagina de cadastro e login.



## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes
Home:
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/d3baa838-ee06-40f3-b3cf-73331fc29e07)
Cadastro de Plantas: 
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/de7f1957-c77c-471e-80b7-55353b46fb9f)
Cadastro de Usuario e login: 
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/3a84e58c-e2af-4034-ac7e-ba5e7562c2da)
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/aa255ee0-7f7b-49ad-9419-0007cfb3e17e)
Forum: 
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/1bff7153-ef43-48f0-95cb-43c27aea183c)
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/9795e4cb-3370-4017-8a99-1a89a08f678e)



# Metodologia

A metodologia adotada será uma abordagem scrum, onde o grupo aceita que o problema pode não ser totalmente entendido ou definido no início e que provavelmente os requisitos irão mudar ao longo do tempo.
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/04ddfba1-b2af-48b0-b6a7-5623103955dd)
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/af21fa35-7917-40cf-a0e5-a49de9325a4f)
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/636db638-41fe-462b-84ba-ff11bd62e436)
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/030e77f0-fad0-4877-8111-0cd3d993af6f)
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/8b48d8a7-9c70-4e38-839d-f43b239088a1)
![image](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente/assets/125670404/cd423a40-a484-4a5d-935f-9e98e265273a)


## Divisão de Papéis

Scrum Master - Pedro Tinoco Lanna - Gabriel Samarane Ribeiro - Pedro Afonso Marinho
Equipe de Desenvolvimento - Pedro Tinoco Lanna - Gabriel Samarane Ribeiro - Pedro Afonso Marinho


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  [https://miro.com/XXXXXXX](https://miro.com/app/board/uXjVMW2t9ds=/) | 
|Repositório de código | GitHub | [https://github.com/XXXXXXX](https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-meio-ambiente) | 
|Projeto wireframes | Figma | [[https://figma.com/XXXXXXX](https://www.figma.com/file/kTUOqPXiaZBxd0f8epbwX9/Wireframing-in-Figma?type=design&mode=design) |



## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
