function change() { 
	if (document.body.style.backgroundColor === ""){
	$('body').css("background-color",'lightblue')}
	else $('body').css("background-color", '')
}

// var results = {
// 	0: 0,
// 	5: 1,
// 	10: 2,
// 	15: 3,
// 	20: 4,
// 	25: 5,
// 	30: 6
// }
var counter=0;


function result(){
	var talk = ["You've field Humanity, you scored nothing!", "You scored "];
	var i=1
	 while(i<=6)
{
	if($("input[name="+i+"]:checked").val()==="correct")
	{
		counter+=5;
		i++
	
	}
	else{
		i++
	}
}

if(counter===0){
	alert(talk[0])
}else{
	alert(talk[1]+counter) 
}


}

var back = ['"Apollo 11.jpg"','"Apollo 11-1.jpg"', '"Apollo 11-2.jpg"','"Apollo 11-3.jpg"','"Apollo 11-4.jpg"','"Apollo 11-5.jpg"']
var mgc = 0
function next(){
	mgc++
	if (mgc > 5){
		mgc = 0
		$('#bodqz').css("background-image", 'url('+back[mgc]+')')
		
	} else{
	$('#bodqz').css("background-image", 'url('+back[mgc]+')')
	}
}

function previous(){
	mgc--
	if (mgc < 1){
		mgc = 5
		$('#bodqz').css("background-image", 'url('+back[mgc]+')')
	} else{
	$('#bodqz').css("background-image", 'url('+back[mgc]+')')
	}
}
