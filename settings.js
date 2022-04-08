
  var button1 = document.querySelector("#btn-1")
  button1.addEventListener('click', getUsers);

function getUsers(){
  fetch("https://randomuser.me/api/?results=150")
  .then(response => {return response.json();})
  .then(responseJson => {
    let result = responseJson.results;
    let output = "<ul>";

    result.forEach(item =>{

      if (document.querySelector("#select-options").value==1 && item.dob.age>=1 && item.dob.age<=25){
        output += `<li> ${item.name.title}. ${item.name.first} ${item.name.last} : ${item.dob.age} </li>`
      }
      else if (document.querySelector("#select-options").value==2 && item.dob.age>25 && item.dob.age<=40){
        output += `<li> ${item.name.title}. ${item.name.first} ${item.name.last} : ${item.dob.age} </li>`
      }
      else if (document.querySelector("#select-options").value==3 && item.dob.age>40 && item.dob.age<=55){
        output += `<li> ${item.name.title}. ${item.name.first} ${item.name.last} : ${item.dob.age} </li>`
      }
      else if (document.querySelector("#select-options").value==4 && item.dob.age>55 && item.dob.age<=70){
        output += `<li> ${item.name.title}. ${item.name.first} ${item.name.last} : ${item.dob.age} </li>`
      }
      else if (document.querySelector("#select-options").value==5 && item.dob.age>70){
        output += `<li> ${item.name.title}. ${item.name.first} ${item.name.last} : ${item.dob.age} </li>`
      }
      else if (document.querySelector("#select-options").value==6){
        output += `<li> ${item.name.title}. ${item.name.first} ${item.name.last} : ${item.dob.age} </li>`
      }
    });
    output += "</ul>";
    console.log(output)
    document.getElementById("output").innerHTML = output; 
  });
}