let input = prompt('What would you like to do?')
const todos = ['Print money', 'Hate harder', 'Pray to God to save me', 'Finish this course']


while (input !== 'quit' && input !== 'q'){

  if (input === 'list') {
    console.log('********')
    for (let i = 0; i < todos.length; i++) {
       console.log( `${i}: ${todos[i]} `);[i]};

    // for (let listed of todos){
    //   console.log( `${listed}`)
    // }
    console.log('********');
  } 

 
  
  else if (input === 'new') {
    const newTodo = prompt(`OK, let's add a new todo`);
    todos.push(newTodo);
    console.log(`${newTodo} added to the list champ!`)  ;     
  }

  else if (input === 'delete') {
    const index = parseInt( prompt(`OK, enter the index of the item you want to delete`));

    if (!Number.isNaN(index)){
    
    const deleted = todos.splice(index, 1);
    
    console.log(`ok bro you deleted ${index}: ${deleted[0]}`);
  }  else{
    console.log('Invalid index')
    console.log('Dawg, you deleted undefined')
  }
  }

  

  input = prompt('What would you like to do?')
}

console.log("OK Dawg, you quit & you lazy af")