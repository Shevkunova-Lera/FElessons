//Task 1
function showTextarea() {
    document.getElementById("div").style.display = "none";
    document.getElementById("textarea").style.display = "block";
    }
function showDiv() {
    document.getElementById("textarea").style.display = "none";
    document.getElementById("div").style.display = "block";
    document.getElementById("div").innerHTML = document.getElementById("textarea").value;
}
document.onkeydown = function(e) {
    if (e.ctrlKey && e.keyCode == 69) {
        e.preventDefault();
        showTextarea();
    }
    if (e.ctrlKey && e.keyCode == 83) {
        e.preventDefault();
        showDiv();
    }
}

//Task 2
function sortTable(n) {
var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
table = document.getElementById("table");
switching = true;
dir = "asc"; 
while (switching) {
    switching = false;
    rows = table.rows;
for (i = 1; i < (rows.length - 1); i++) {
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];
    if (dir == "asc") {
    if (isNaN(x.innerHTML) && isNaN(y.innerHTML)) {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
        }
        } else {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
        }
    }
    } else if (dir == "desc") {
    if (isNaN(x.innerHTML) && isNaN(y.innerHTML)) {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
        }
    } else {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
        }
        }
    }
}
if (shouldSwitch) {
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    switchcount ++;      
} else {
    if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
    }
}
}
}

//Task 3
var textBlock = document.getElementById("text-block");
var resizeHandle = document.getElementById("resize-handle");
var isResizing = false;

resizeHandle.addEventListener("mousedown", function(e) {
    isResizing = true;
});

document.addEventListener("mousemove", function(e) {
    if (isResizing) {
        textBlock.style.width = (e.clientX - textBlock.getBoundingClientRect().left) + "px";
        textBlock.style.height = (e.clientY - textBlock.getBoundingClientRect().top) + "px";
    }
});

document.addEventListener("mouseup", function(e) {
    isResizing = false;
});