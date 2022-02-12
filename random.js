function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";

}


function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
circle(620,100,40);
circle(20,100,40);
rect(300,250,105,55,20);
triangle(30,75,58,20,86,75);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}

