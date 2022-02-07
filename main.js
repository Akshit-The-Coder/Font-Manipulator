 noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function preload()
{

}
function setup()
{
    canvas = createCanvas(450,450);
    canvas.position(550,152)

    video = createCapture(VIDEO);
    video.size(500,500);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose", gotPoses)
}
function modelLoaded()
{
    console.log("PoseNet Is Initialised!");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX = " + noseX + ",NoseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX); 
        
        console.log("leftWristX = " + leftWristX + ",rightWristX = " + rightWristX + ",Difference = " + difference);
    }
}
