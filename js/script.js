// Swal.fire("hello world!");
var tasks = [];
function create(){
    var data = "";
    // var tasks = document.getElementById("tasks").innerHTML;
    var plan = document.getElementById("add_plan").value;
    if (plan){
        tasks.push(plan.trim());
        Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Schedule added successfully',
  showConfirmButton: false,
  timer: 1500
})
        document.getElementById("add_plan").value = '';
    }
    if(tasks.length <= 0){
        document.getElementById("sch").innerHTML = "Enter a schedule to begin.";
        document.getElementById("sch").classList.add("sch");
    }
    if (tasks.length>0){
        for(i=0; i<tasks.length; i++){
            data+='<tr>';
            data+='<td>'+(i+1)+'. '+tasks[i]+'</td>';
            data+='<td><button onclick ="edit('+i+')"class="btn btn-warning">Edit</button></td>';
            data+='<td><button onclick ="Delete('+i+')"class="btn btn-danger">Delete</button></td>';
            data+='</tr>';
        }
        document.getElementById("sch").innerHTML = "My holiday schedule: ";
        document.getElementById("sch").classList.remove("sch");
    }
    document.getElementById("tasks").innerHTML = data;
    // console.log(tasks);
}

function Delete(item){
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    tasks.splice(item, 1);
    create();
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
    

}

function edit(item){
    document.getElementById("edit_todo").scrollIntoView();
    document.getElementById("edit_todo").value = tasks[item];
    document.getElementById("edit_plan").style.display = 'block';
    
    document.getElementById("save_todo").addEventListener("click", function(){
        var task = document.getElementById("edit_todo").value;
        if(task){
            Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Schedule edited successfully',
  showConfirmButton: false,
  timer: 1500
})
            tasks.splice(item, 1, task.trim());
            // console.log(tasks);
            create();
            closeinput();
        }
    });
    
    }

create();

function closeinput(){
    document.getElementById("edit_plan").style.display = "none";
}
