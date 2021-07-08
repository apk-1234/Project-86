var canvas = new fabric.Canvas('myCanvas');
var block_width = 30;
var block_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";

function player_update()
{
    fabric.Image.fromURL("player.jpg", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_img)
{
    fabric.Image.fromURL(get_img, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
