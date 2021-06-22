MouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;
    MouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;
    if (MouseEvent == "mouseDown") {
        ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = width_of_line; 
        console.log("Last position of x and y coordinates = "); 
        console.log("x = " + last_position_of_x + " " + "y = " + last_position_of_y); 
        ctx.moveTo(last_position_of_x, last_position_of_y);
         console.log("Current position of x and y coordinates = "); 
         console.log("x = " + current_position_x + " " + "y = " + current_position_of_mouse_y);
          ctx.lineTo(current_position__x, current_position_of_mouse_y); ctx.stroke();
    } last_position_of_x = current_position_of_mouse_x; last_position_of_y = current_position_of_mouse_y;
    
    
    
    
    
    canvas = document.getElementById("MyCanvas");
    ctx = canvas.getContext("2d");
    
    color = "deeppink";
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(400, 250, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e) {
        color = document.getElementById("color").value;
        mouse_x = e.clientX - canvas.offsetLeft;
        mouse_y = e.clientY - canvas.offsetTop;
        circle(mouse_x, mouse_y);
    
    }
    
    function circle(mouse_x, mouse_y) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 5;
        ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    function cleararea(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }

