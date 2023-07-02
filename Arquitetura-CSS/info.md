# Arquitetura CSS: descomplicando os problemas

- Este arquivo contém os arquivos de aula presentes no curso "Arquitetura CSS: descomplicando os problemas" da Alura
- Será aplicado conveções CSS que visam a melhora de organização das folhas de estilo em cascata

#### Introdução

- Iremos criar um site sobre receitas, no qual será responsivo e na qual iremos utilizar __Atomic Design__, além de boas práticas com CSS, e como organizaremos e arquitetaremos nosso projeto de maneira mais eficiente e de fácil manutenção

#### Conhecendo o projeto

- Geralmente, quando vamos adicionar todos os arquivos estáticos, como CSS (os arquivos de estilo), imagens (logo, imagens do produto, fotos de pessoas), arquivos JavaScript, ícones, fontes e assim por diante, adicionamos na pasta __assets__
- Dentro dela, iremos ter pastas nas quais especificam todo o conteúdo da nossa página
- O `normalize.css` ele é um __arquivo responsável por resetar estilos do nosso navegador__. Por padrão, o navegador, quais quer que seja ele, ele tem uma __implementação `default`__, na qual o `normalize` irá __resetar o estilos do navegador, simplesmente vai pegar todas as diferenças entre os navegadores e vai redefini-las__

#### Criando um cabeçalho

- iremos adicionar a base do cabeçalho, além da barra de navegação e logo do website

#### Estilizando cabeçalho

- Durante a execução desta parte, é estilizado o cabeçalho, porém de forma errônea, na qual é corrigida e que será melhor desenvolvida no próximo capítulo

#### Simplificando os seletores

- Se nós criarmos estilos para a `tag`, como `<header>`, `<nav>`, `<ul>` por exemplo, __estaremos prendendo nosso HTML ao CSS__. Caso alguma `tag` tenha uma alteração, __os estilos irão ser separados e nao funcionarão__
- A maneira correta de realizarmos isto, e que nossas folhas de estilos continuem aplicadas, __temos que usar as classes__
- Quando nós temos duas classes em um elemento:
- `<li class="menu-item"><a class="menu-link ativo" href="#">Início</a></li>`
  - Quando um elemento ter a classe ativo, acontecerá dela estar ativa. Para isso, no CSS quando __termos a classe `menu-link` e essa classe, também possuir uma classe ativa, ele irá aplicar os estilos que queremos__:

 ```css
    .menu-link.ativo {
    color: #333333;
    font-weight: bold;
    }
 ```

- Um fator importante sobre nosso CSS, __é que sempre o arquivo tende a se extender muito, tendo um acumulado de linhas, o que pode dificultar nossa organização em relação ao código. Podemos facilitar isso separando cada parte do nosso site em arquivos separados, sendo uma boa prática__
- Iremos então, criar __arquivos css para cada parte específica da nossa página, sendo `menu-lista` relacionada a classe por exemplo__
- Com cada arquivo criado, iremos guardá-los em uma pasta `menu`, __já que é nela que todos os estilos relacionados ao menu ficaram__
- Esta forma de __criar um arquivo css para cada elemento e componente da nossa página, é chamado de Atomic Design__
  - Ele __facilita a organização dos nossos componentes, as pastas e estruturas do nosso css. Ele possui princípios de átomos. Um átomo é uma tag HTML. E quando os juntamos, serão formados moléculas, que representam um elemento completo, como por exemplo um formulário de pesquisa__
  - Os __organismos são as junções de várias moléculas, criando as seções da página__
  - Estas seções são os __templates da página, que são as junções dos organismos__
  - E quando juntamos todos nossos organismos, __iremos ter nossas páginas__ 
  - A diferença entre templates e páginas, é que __templates são feitos de informações não reais, enquanto nas páginas temos informações reais__
- De volta ao projeto, vemos que as tags` <header>, <img>, <nav> e <ul>` são todas átomos; a junção dos átomos `<nav>` e seus filhos `(<ul> e <lu>)` forma uma molécula; e a junção dessa molécula com outros átomos e moléculas define o organismo "cabeçalho". 
- __Com isso, conseguiremos simplificar bastante a manutenção e evolução do nosso projeto, podendo simplesmente criar novas pastas e/ou arquivos para adicionarmos novos componentes.__

- Devemos seguir basicamente essa regra: __se o componente é composto por apenas um arquivo, ele pode ser criado na própria raiz da pasta "css"; do contrário, se for composto por vários arquivos, deveremos criar uma nova pasta para comportá-los.__

#### Criando o banner e sobre

- Após criarmos as classes para os elementos, nos deparamos com o fator de __nomeamento de classes, seu padrão de escrita__. Para resolvermos estes problemas, nós utilizaremos o padrão __BEM, ou, Block Element Modifier_
- Bloco, elemento e modificador, é uma metodologia __onde podemos ter um padrão de nomeamento de classes__
- Block é nosso `<header>`, podendo ser __qualquer `tag` do HTML__, porém, quando __este bloco possui conteúdo dentro, temos um `Element`, ou seja, um elemento dentro deste bloco. Praticamente os filhos da tag__
- O padrão se comporta dessa forma: 
  - bloco
  - bloco__elemento
  - bloco--modificador
  - bloco__elemento--modificador
- __temos uma classe normal para o bloco. Se quisermos adicionar um elemento para esse bloco, utilizamos `__`, se for um modificador, `--`__
- Fazendo esta padronização, teremos como resultado:

```html
  <section class="banner">
        <img class="banner__imagem" src="" alt="" srcset="">
        <h2 class="banner__titulo">Reaproveite melhor os alimentos!</h2>
  </section>
  <section class="sobre">
        <h2 class="sobre__titulo">Receitas para economizar e ganhar saúde</h2>
        <p class="sobre__descricao">Nossas receitas ajudam você a aproveitar melhor os alimentos, economizar, ganhar tempo e praticidade
        </p>
  </section>
```

#### Estilizando o banner

- Iremos criar uma pasta `banner` contendo __todos os arquivos de estilo relacionados ao banner da página, sendo `banner.css`, `banner-imagem.css` e `banner-titulo.css`__
- Após isso, iremos definir os estilos do banner assim como texto que iremos inserir dentro dele
- Há um fator importante. Utilizaremos __position__ para alinhá-lo corretamente. Porém faremos da seguinte forma:
  - Para o título, nós iremos __definir `position: absolute` e alinhá-lo em relação ao centro com `left` e `top`__. Porém, o `absolute` está __dizendo que o texto está absoluto em relação a página, ou seja, alinhado ao centro, não do seu elemento pai, `banner`__
  - Para resolvermos isto, iremos no `banner.css` e nele iremos adicionar o parâmetro __`Position: relative`__
  - Isto fará com que __o título seja relativo ao seu pai, fazendo com que todos os filhos do `banner` sejam posicionados relativamente a ele__

#### Estilziando o sobre

- 