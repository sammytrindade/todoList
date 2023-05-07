const prompt = require('prompt-sync')();
const readline = require('readline-sync');
console.log('start the project');

function main(){
    const list = ['college', 'house'];
    while(true){
        const options = prompt('Select the option: 1- Create to-do / 2- List to-do / 3- Exit program');

        if(options == 1){
            var newList = readline.question('Name of new to-do list: ');
            list.push(newList);
            //console.log(list);
        }
        else if(options == 2){
            //console.log(list);
            console.log('Here are all the lists: ');
            for (var i = 0; i < list.length; i++){
                console.log (i+1 + ' - ' + list[i]);
            }
        }
        else if(options == 3){
            break;
        }
    };
};
main();

