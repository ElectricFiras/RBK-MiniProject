function change() {
	$('body').css("background-color",'lightblue')
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
