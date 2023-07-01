# Arquitetura CSS: descomplicando os problemas

- Este arquivo contém os arquivos de aula presentes no curso "Arquitetura CSS: descomplicando os problemas" da Alura
- Será aplicado conveções CSS que visam a melhora de organização das folhas de estilo em cascata

#### Introdução

- Iremos criar um site sobre receitas, no qual será responsivo e na qual iremos utilizar __Atomic Design__, além de boas práticas com CSS, e como organizaremos e arquitetaremos nosso projeto de maneira mais eficiente e de fácil manutenção

#### Conhecendo o projeto

- Geralmente, quando vamos adicionar todos os arquivos estáticos, como CSS (os arquivos de estilo), imagens (logo, imagens do produto, fotos de pessoas), arquivos JavaScript, ícones, fontes e assim por diante, adicionamos na pasta __assets__
- Dentro dela, iremos ter pastas nas quais especificam todo o conteúdo da nossa página
- O `normalize.css` ele é um __arquivo responsável por resetar estilos do nosso navegador__. Por padrão, o navegador, quais quer que seja ele, ele tem uma __implementação `default`__, na qual o `normalize` irá __resetar o estilos do navegador, simplesmente vai pegar todas as diferenças entre os navegadores e vai redefini-las__