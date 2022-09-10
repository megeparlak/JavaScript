let addBtn = document.getElementById("liveToastBtn");
let inputTask = document.getElementById("task");
let list = document.getElementById("list");




addBtn.addEventListener("click", function(){newElement});

function newElement(){
    console.log(inputTask.value);
    if (!(inputTask.value.trim() == ""))
        {
            var li = document.createElement("li");
            li.innerHTML = inputTask.value;
            list.appendChild(li);
            $(".success").toast("show");
            del();
        }
    else {
        $(".error").toast("show");
    }
}

list.addEventListener("click", function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
})

function del(){
    var myNodelist = document.getElementsByTagName("LI");
    for (let i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
        deletenow();
    }
}
del();

function deletenow(){
    var close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
