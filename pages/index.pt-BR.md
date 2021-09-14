import Callout from 'nextra-theme-docs/callout'

# ConvORM

![](/LogoWithText.png)

------

**ConvORM** é um simples ORM para C# possibilitando a conexão com banco de dados MySQL e MariaDB.

<br></br>

<div align="center" style={{display: 'flex', justifyContent: 'center', gap:'1rem', width: '100%'}}>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ConvORM/ConvORM"></img>
  
  <a href="https://www.nuget.org/packages/Conv.ORM">
    <img src="https://img.shields.io/nuget/vpre/Conv.ORM.svg"></img>
  </a>
  
  <a href="https://github.com/ConvORM/ConvORM/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ConvORM/ConvORM"></img>
  </a>
    
   <a href="https://github.com/ConvORM/ConvORMstargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ConvORM/ConvORM?style=social"></img>
  </a>  
</div>

<Callout type="warning" emoji=" ⚠️ ">
    Em desenvolvimento 🚧⚙🔧🖥
</Callout>

### 💻 Sobre o projeto
Conv.ORM é um simples OMR, feito para remover a necessidade de um desenvolvedor de lidar com comandos SQL, assim, agilizando o desenvolvimento e facilitando a manutenção.

#### 🚧 Funciona?
~~Sim, mas não está completo. As seguintes features estão funcionais:~~
* ~~Conexão com MySQL/MariaDB e MSSQL;~~
* ~~Inserção, Alteração e Busca para os bancos citados acima;~~

O componente está sendo inteiramente refeito, possibilitando que seja escolhido qual/quais drivers será utilizados, incluindo testes unitário para garantir a confiabilidade, fluxos reestruturados para uma melhor performance e uma usabilidade melhorada.

#### 🛤 RoadMap
O RoadMap completo pode ser encontrado [aqui](/roadmap)
- [ ] Mecanismo de conexão;
- [ ] Migrações;
- [ ] Mapeamento de Entidades;
- [ ] Operações com Entidades;
- [ ] Relacionamento entre Entidades;
- [ ] Todos os comandos de Query;
- [ ] Entidades temporárias;
- [ ] Entidades somente leitura;
- [ ] Eventos customizados no pré e pós execuções;
- [ ] Suporte para SQLServer;
- [ ] Suporte para Postgree;
- [ ] Suporte para Firebird;
- [ ] Suporte para SQLite;