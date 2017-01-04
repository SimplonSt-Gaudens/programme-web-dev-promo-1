function todoList(){

  var item = document.getElementById("todoInput").value;

  var newItem = document.createElement("li");


  newItem.innerHTML = "<input type='checkbox' id='cbox2' value='checkbox1' name='test'><span>" + item.toString() + "</span><label for='cbox2'>"

  document.getElementById("todoList").appendChild(newItem);
  document.getElementById("todoInput").value = "";

}

function removeFinished(){
  var checkboxes = document.getElementsByName("test");
  for (var i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked){
      //checkboxes[i].parentElement.remove();
      checkboxes[i].parentElement.style.display = "none";
    }
  }

}
