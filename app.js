//const figlet = require('figlet');
const chalk = require('chalk');
const clear = require('clear');
const inquirer = require('inquirer');
const shell = require('shelljs');


clear();
console.log('');
console.log('');
/*console.log(
chalk.yellow(

    figlet.textSync('GIT-CLI', { font : 'standard', horizontalLayout: "full"})
)
);*/

inquirer.prompt([
    {
        name: 'list',
        type: 'list',
        message: 'Que quieres hacer?',
        choices:[
            {
                name:'Crear un repositorio',
                type:'checkbox',
                message: 'crea',
                value:'1'
            },
            {
                name:'Clonar un repositorio',
                type:'checkbox',
                message: 'clona',
                value:'2'
            },
            {
                name:'Crear ramas',
                type:'checkbox',
                message: 'eliminar',
                value:'3'
            },
            {
                name:'Eliminar ramas',
                type:'checkbox',
                message: 'eliminar',
                value:'4'
            },
            {
                name:'salir',
                type:'checkbox',
                message: 'salir',
                value:'5'
            },
    
        ]
    }
    ]).then(answers =>{
        if(answers.list==1){
            crearRepo()
       
                }if(answers.list==2){
                   clonarRepo()
                }if(answers.list==3){
                    wget()
                }
                if(answers.list==4){
                    wget()
                }
                if(answers.list==5){
                    salir()
                }
    });
     
    function crearRepo(){
        inquirer.prompt({
            name:'Create',
            type: 'input',
            message:'Ingresa la ruta de donde quieres inicializar tu repo '
    
        }).then(answer => {
            console.log(answer)
            shell.exec('sudo ' + 'git init '+ ' ' + answer.Create)
            
            console.log('');
        inquirer.prompt({
            name:'Create',
            type: 'input',
            message:'Ingresa el nombre del commit entre comillas'
    
        }).then(answer => {
            
            shell.exec('sudo ' + 'git add . ');
            console.log("se hizo el add")
            shell.exec('sudo ' + 'git commit -m ' + ' ' + answer.Create)
            console.log('');
        }).then(answer => {
            inquirer.prompt({
                name:'Create',
                type: 'input',
                message:'Ingresa tu email de github entre comillas'
                
            }).then(answer => {
                shell.exec('sudo git config --global user.email ' + answer.Create)
                inquirer.prompt({
                    name:'Create',
                    type:'input',
                    message:'Ingresa tu name de github entre comillas '
                }).then(answer => {
                    shell.exec('sudo git config --global user.name ' + answer.Create)
                    inquirer.prompt({
                        name:'Create',
                        type: 'input',
                        message:'Ingresa la url de tu repositorio en github '
                
                    }).then(answer => {
                        console.log(answer)
                        shell.exec('sudo git remote add origin ' + ' ' + answer.Create)
                        shell.exec('sudo git push -u origin master ');
            
                      
                    });
                })
            })
        })
            
        });

       
        
        
    }
    function clonarRepo(){
       var ruta = " "
        inquirer.prompt({
            name:'Clonar',
            type:'input',
            message:'Ingresa el directorio en donde quieres clonar tu repositorio de github'
        }).then(answer => {
            ruta = answer.Clonar
            console.log(ruta)
            inquirer.prompt({
               name:'urlClonar',
               type:'input',
               message:'Ingresa la url del repositorio en github'
           }).then(answer => {
               shell.exec('sudo ' + ' ' + 'git clone ' + answer.urlClonar + ' ' + ruta )
           }) 
        })
    }
    
    