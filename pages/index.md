# ConvORM

![](/LogoWithText.png)

------

**ConvORM** is a simple ORM for C# possibiliting connect to MySql, Sql Server and MariaDB databases.

<br></br>

<div align="center" style={{display: 'flex', justifyContent: 'center', gap:'1rem', width: '100%'}}>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ConvORM/Conv.ORM.NET5?color=%2304D361"></img>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ConvORM/Conv.ORM.NET5"></img>
  
  <a href="https://www.nuget.org/packages/Conv.ORM">
    <img src="https://img.shields.io/nuget/vpre/Conv.ORM.svg"></img>
  </a>
  
  <a href="https://github.com/ConvORM/Conv.ORM.NET5/commits/develop">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ConvORM/Conv.ORM.NET5"></img>
  </a>
    
   <a href="https://github.com/ConvORM/Conv.ORM.NET5stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ConvORM/Conv.ORM.NET5?style=social"></img>
  </a>  
</div>

<h4 align="center">
    ⚠ Still in Development 🚧⚙🔧🖥
</h4>

## 💻 About the project
Conv.ORM is a simple ORM, designed to remove the need for a developer to deal with SQL commands, thus speeding up the development process and facilitating maintenance.

### 🚧 It works?
Yes, but not quite. Currently the following features are functional:
* MySql/MariaDB and MSSQL connection;
* Insert, Update and Search entities for DB mentioned above;

### 🛤 RoadMap
The full roadmap can be found in full [here](https://github.com/ConvORM/Conv.ORM.NET5/projects/1)
- [ ] Delete entities;
- [ ] Inactivation entities;
- [ ] Full select commands;
- [ ] Full conditions for querys commands;
- [ ] Allow relationship between entities;
- [ ] Temporary entities;
- [ ] Read-only entities;
- [ ] Allow to custom events before and after executions;
- [ ] Support for Postgree;
- [ ] Support for Firebird;
- [ ] Support for SQLite;

## 🧭 Firsts Steps
Before you start, you will need to install it on your project:

Using dotnet cli
```bash
$ dotnet add package Conv.ORM
```

Using Nuget Package Manager
```bash
PM> Install-Package Conv.ORM
```

### ⬇ Implements in your app
1. Create a connection:
  - Using connection file:
```csharp
Connection connection = ConnectionFactory.GetConnection();
```
  - Using specified parameters
```csharp
ConnectionParameters connectionParameters = new ConnectionParameters("Default", EConnectionDriverTypes.ecdtMySql, "127.0.0.1", "3306", "databaseTest", "root", "123456");
Connection connection = ConnectionFactory.GetConnection(connectionParameters);
```
2. Create a entity
```cs
[EntitiesAttributes(TableName = "User")]
public class UserEntity : Entity
{
     [EntitiesColumnAttributes(
         Primary = true,
         Default = "0"
     )]
     public int UserId;
     public string Name;
     public string Login;
     public string Password;
     [EntitiesColumnAttributes(Default = "true")]
     public bool Active;
}
```     
3. Create a manipulations methods
  - Save
```cs
public UserEntity Save()
{
    var userRepository = new Repository();
    try
    {
        if (UserId != 0)
            return (UserEntity)userRepository.Update(this);
        else
            return (UserEntity)userRepository.Insert(this);
    }
    catch(Exception ex)
    {
        Console.Write(ex.Message);
        throw;
     }
}
```
  - Find All
```cs
public IList FindAll()
{
    var userRepository = new Repository();
    try
    {
        return userRepository.FindAll(this);
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex);
        throw;
    }
}
``` 
  - Find by conditions
```cs
public IList Find(QueryConditionsBuilder conditionsBuilder)
{
    var userRepository = new Repository();
    try
    {
        return userRepository.Find(this, conditionsBuilder);
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex);
        throw;
    }
}
``` 
  - Find by id
```cs
public UserEntity Find(int id)
{
    var userRepository = new Repository();
    try
    {
        return (UserEntity)userRepository.Find(this, new int[] {id});
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex);
        throw;
    }
}
```
4. Searching
  - For conditions to find registers, you can create a ConditionBuilder:
```cs
var queryConditions = new QueryConditionsBuilder();
queryConditions.AddQueryCondition("name", EConditionTypes.Like, new object[] {"%" + txtTextToSearch.Text + "%"});
queryConditions.AddQueryCondition("active", EConditionTypes.Equals, new object[] { rbOnlyActives.Checked ? 1 : 0 });

dgvRegisters.DataSource = ConvORMHelper.ConvertListToDataTable(userEntity.Find(queryConditions));
```  