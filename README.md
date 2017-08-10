# node-angular-electron

* * *

**requisitos**

nodejs e npm instalado

* * *

**para iniciar a aplicação**

npm start

* * *

**estrutura de diretórios**

app

--controllers

--model

--views

--app.js

--routes.js

assets

node_modules

--(todos modulos utilizados)

services

--(todos services core do framework)

storage

--(todos arquivos de armazenamento local)

* * *

**exemplos de consulta sqlite usando o core do framework**

`angularApp.controller('myController', function($model,$db) { //usando db var result = $db.table('mytable').get(); // select * from mytable var result = $db.table('mytable').where(['id','=',1]).get(); // select * from mytable where id=1 var result = $db.table('mytable').find(1).get(); // select * from mytable where id=1 var result = $db.table('mytable').where(['id','=',1]).get(); // select * from mytable where id=1 var result = $db.table('mytable').update("field":"blablabla"}); // update mytable set field='blablabla' var result = $db.table('mytable').where(['id','=',1).update("field":"blablabla"}); // update mytable set field='blablabla'where id=1 var result = $db.table('mytable').find(1).update("field":"blablabla"}); // update mytable set field='blablabla'where id=1 //usando model var result = $model.get(); // select * from mytable var result = $model.where(['id','=',1]).get(); // select * from mytable where id=1 var result = $model.find(1).get(); // select * from mytable where id=1 var result = $model.where(['id','=',1]).get(); // select * from mytable where id=1 var result = $model.update("field":"blablabla"}); // update mytable set field='blablabla' var result = $model.where(['id','=',1).update("field":"blablabla"}); // update mytable set field='blablabla'where id=1 var result = $model.find(1).update("field":"blablabla"}); // update mytable set field='blablabla'where id=1 //para joins basta adicionar $model.join('anotherTable','anotherTable.id','=','myTable') $db.table('myTable).join('anotherTable','anotherTable.id','=','myTable') });`  

* * *

**exemplo de validação de formulários com jquery-validator**

****`angularApp.controller('loginController', function($env,$scope,$location,$users) { $scope.env = $env; $scope.username = ""; $scope.password = ""; $scope.validationOptions = { rules: { username: { required: true, maxlength:50 }, password: { required: true, maxlength:50 } }, messages: { username: { required: "Este campo é obrigatório", maxlength: "O limite de caracteres é 50" }, password: { required: "Este campo é obrigatório", maxlength: "O limite de caracteres é 50" } } }; $scope.login = function (form) { if(form.validate()) { var users = $users .where(["username","=",$scope.username.trim()]) .where(["password","=",$core.md5($scope.password.trim())]) .get(); if (users.length<=0) { return $core.msg("Ooops","Senha incorreta ou usuário inexistente","error"); } else { // salva o auth $location.path("/dashboard"); } } } });`****