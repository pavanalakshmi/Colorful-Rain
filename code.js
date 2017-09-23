window.onload = function() {

var canvas = document.createElement("canvas"),
    c = canvas.getContext("2d"),
    rains = {},
    rainIndex =0,
    drips = 15;
    
    canvas.width = window.innerWidth;
    canvas.height =window.innerHeight;
    
    document.body.appendChild(canvas);
    
    c.fillStyle = "black";
    c.fillRect(0,0,canvas.width,canvas.height);
    
    function rain() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.vy = Math.random() * 10 + 5;
        this.w = Math.random() * 2;
        this.h = Math.random() * 10 + 3;
        rainIndex++;
        rains[rainIndex] = this;
        this.id = rainIndex;
        this.life = 1;
        this.maxLife = 100;
    }
    
    var xy = 5;
    rain.prototype.draw = function() {
       this.y += this.vy;
       
         if (this.y > 495) {
             delete rains[this.id];
         }
       
       c.fillStyle = 'hsla(' + xy++ + Math.floor((Math.random() * 10) + 1) + ',100%, 55%,2)';
       c.fillRect(this.x, this.y, this.w, this.h);
    };
    
    setInterval(function() {
    c.fillStyle = "black";
    c.fillRect(0,0,canvas.width,canvas.height);
    
    for (var i = 0; i < drips; i++) 
    {
       new rain();
    } 
    
    for (var i in rains) 
    {
        rains[i].draw();
    }  
    
    }, 25);
    
};
