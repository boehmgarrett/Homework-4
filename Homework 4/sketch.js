var pick;
var xImage = 100, yImage = 25;
var speedX, speedY;
var myFont;

var myTime = 10;

var pick2;
var xImage2 = 300, yImage2 = 25;

var pick3;
var xImage3 = 200, yImage3 = 25;

function setup()
{
    createCanvas(600,400);
    pick = loadImage("images/Pizza3.png");

    pick2 = loadImage("images/Pizza2.png");

    pick3 = loadImage("images/Pizza.png")

    myFont = loadFont("fonts/ProtestRiot-Regular.ttf");
    speedX = random(1, 5);
    speedY = random(1, 5);

    speedX2 = random(1, 5);
    speedY2 = random(1, 5);

    speedX3 = random(1, 5);
    speedY3 = random(1, 5);

    setInterval(changeTime, 1000);
}
// this runs continuously
function draw()
{
    background(120);
    image(pick, xImage,yImage);

    xImage += speedX;
    yImage += speedY;

    if(xImage >= width-100 || xImage <= 0)
    {
        speedX *=-1;
    }

    if(yImage >= height-100 || yImage <= 0)
    {
        speedY *=-1;
    }

    image(pick2, xImage2,yImage2);

    xImage2 += speedX2;
    yImage2 += speedY2;

    if(xImage2 >= width-100 || xImage2 <= 0)
    {
        speedX2 *=-1;
    }

    if(yImage2 >= height-100 || yImage2 <= 0)
    {
        speedY2 *=-1;
    }

    image(pick3, xImage3,yImage3);

    xImage3 += speedX3;
    yImage3 += speedY3;

    if(xImage3 >= width-100 || xImage3 <= 0)
    {
        speedX3 *=-1;
    }

    if(yImage3 >= height-100 || yImage3 <= 0)
    {
        speedY3 *=-1;
    }

    fill(100, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Garrett Boehm", 400, 300);



    fill(36,250,100);
    textSize(15);

    text(myTime + " seconds", 50, 50);

   if(checkCollision(xImage, yImage, 100, 100, xImage2, yImage2, 100, 100))
   {
       speedX *= -1;
       speedX2 *= -1;
       speedY *= -1;
       speedY2 *= -1;
   }
   
}

function checkCollision(x,y,w,h, x2,y2,w2,h2)
{
  
   if (
       x - w/2 < x2 + w2/2 &&
       x + w2/2 > x2 -w/2 &&
       y - h2/2 < y2 + h/2 &&
       y + h2/2 > y2 - h/2
   
   ){
    return true;
   } else {
    return false;
   }
}

function changeTime()

{
    myTime--;
    if(myTime < 0)
    {
        // reset
        myTime = 10;
    }
    //myTime -= 1;
    //myTime = myTime - 1;
}

