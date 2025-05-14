var length = 0;
var width = 0;
var typeOfWood = "none";
var drawers = 0;
var squareFeet;
var extra = 0;
var additional;
var add = 0;
var total = 0;
var output = "";
var animate = "";

$(document).ready(function()
{
	$("#quote-submit").click(function()
	{
		length = $("#lengths").val() || 0;
		width = $("#widths").val() || 0;
		typeOfWood = $("#select").val() || "None";
		drawers = $("#drawers").val() || 0;
		squareFeet = length * width;
		if(squareFeet > 750)
		{
			extra = 50
		}
		if(typeOfWood == "Mahogany")
		{
			additional = 150;
		}
		else if(typeOfWood == "Oak")
		{
			additional = 125;
		}
		else
		{
			additional = 0;
		}
		add = drawers * 30
		total = 200 + extra + additional + add;
		output = "<h1>Length: "+ length + " in." + "<br>Width: " + width + " in." + "<br>Wood Type: " + typeOfWood + "<br>Drawers: " + drawers + "<br>Total Area: " + squareFeet + " square in." + "<br>Total Price: $" + total.toFixed(2) + "<br><h1>";
		$("#message").html(output);
		console.log(length);
		console.log(width);
		console.log(typeOfWood);
		console.log(drawers);
		console.log(additional);
		console.log(total);
		console.log(extra);
		console.log(add);
	})
	$("#drawers").blur(function() /*jQuery event other than click*/
	{
		drawers = $("#drawers").val();
		if(drawers == "" || drawers == 0)
		{
			drawers = 0
			$("#message-2").html("<h4>Are You Sure You Don't Want Any drawers</h4>")
		}
		else
		{
			$("#message-2").html("<h4>Are You Sure You Only Want " + drawers + " drawers</h4>").fadeOut(2000) /*Fade*/
		}
	});
	$("#quote-submit").click(function()
	{
	 	return "You Finished, Thank You";
	});
	$("#quote-submit").click(function(event)
	{
		$("h4").fadeIn(1000) /*Fade*/
		$("#sub-title").hide()
		$("h3").html(event.result); /*jQuery event other than click*/
		$("#widths").show() /*Show*/
	});
	$("#toggle").click(function()
	{
		$("#contact").animate(
		{
			height: "toggle" /*Toggle*/ /*Animate with CSS*/
		},function()
		{
    		$("#title").fadeIn(2000)  /*callback*/ /*Fade*/
    		$("#message").slideToggle("slow,swing"); /*slideToggle*/
  		}
		)
	})
	$("#lengths").focus(function() /*jQuery event other than click*/
	{
	 	$("#message-3").css("display", "inline").fadeOut(3000); /*Fade*/
	   	$("p").fadeIn(2000); /*Fade*/
	});
	$("#widths").focus(function() /*jQuery event other than click*/
	{
		$("#message-4").css("display", "inline").fadeOut(3000); /*Fade*/
		$("p").fadeIn(2000); /*Fade*/
	});
})
