var weight=[35,38,40,45,25,63];

function setup() 
{
  createCanvas(400,400);
  var sum=weight[0]+weight[1]+weight[2]+weight[3]+weight[4]+weight[5];
  var average=sum/weight.length;
  console.log(average);
}

function draw() 
{
background(51);

}

