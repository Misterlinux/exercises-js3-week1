function greetPeople(people) {
  let greeting;
  
    people.forEach(function(person) {
        const div = document.getElementById('main');
        const para = document.createElement('p')
        para.innerHTML = greeting =  `Hello ${person}`;
        div.appendChild(para)
    console.log(greeting);
    });
  
  }
  
  /*
    Let's trace this piece of code - what is the value of result with this input
    
    */
    var mentors = ['Irina', 'Ashleigh', 'Etza'];
    var result = greetPeople(mentors)
  
  
    
    div.appendChild(p)
