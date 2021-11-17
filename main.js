function draw() {
    // canvas definition
    var canvas = document.getElementById("canva");
    var notepad = canvas.getContext("2d");

    // This is the code for the roof of the house
    notepad.fillStyle = "DarkRed";
    notepad.fillRect(300, 0, 200, 50);

    notepad.fillStyle = "DarkRed";
    notepad.fillRect(250, 50, 300, 50);

    notepad.fillStyle = "DarkRed";
    notepad.fillRect(200, 100, 400, 50); 

    // This is the code for the body of the house
    notepad.fillStyle = "Tan";
    notepad.fillRect(250, 150, 50, 200);

    notepad.fillStyle = "Tan";
    notepad.fillRect(300, 150, 50, 200);

    notepad.fillStyle = "Tan";
    notepad.fillRect(350, 150, 50, 200);

    notepad.fillStyle = "Tan";
    notepad.fillRect(400, 150, 50, 200);

    notepad.fillStyle = "Tan";
    notepad.fillRect(450, 150, 50, 200);

    notepad.fillStyle = "Tan";
    notepad.fillRect(500, 150, 50, 200);

    // This is the code for the door of the house
    notepad.fillStyle = "black";
    notepad.fillRect(350, 250, 100, 100);
}
   draw()






