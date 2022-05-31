// const Swal = require('sweetalert2');

// Swal.fire("hello world!");
var tasks = [];
function create(){
    var data = "";
    // var tasks = document.getElementById("tasks").innerHTML;
    var plan = document.getElementById("add_plan").value;
    if (plan){
        tasks.push(plan.trim());
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
    tasks.splice(item, 1);
    create();

}

function edit(item){
    document.getElementById("edit_todo").value = tasks[item];
    document.getElementById("edit_plan").style.display = 'block';
    
    document.getElementById("save_todo").addEventListener("click", function(){
        var task = document.getElementById("edit_todo").value;
        if(task){
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
