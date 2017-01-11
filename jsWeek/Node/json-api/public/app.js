$(function(){
getIndex();
function getIndex(){
 $.getJSON("http://localhost:3000/api/wines",    //getting JSON object from database
 function(data) {
 	$('.wine').html("");
    console.log(data);
    for(var i =0; i < data['length']; i++) //loops through the objects aray
    {
    $('.wine').append("<div id='"+data[i]._id+"'><h2>"+data[i]['name']+"</h2><p> Origin: "+data[i]['origin']+"</br> Vintage: "+data[i]['vintage']+"</p></div>");}  
          // appends .wine class with h2's of the ojects retrieved through the api/wines array
  });

 $('.wine').on("click", "div", function(event) {

   console.log(this.id);
   $.getJSON("http://localhost:3000/api/wines/"+this.id,    //getting JSON object from database
 	function(data) {
    	console.log(data);
   	
   		$('.wine').hide();
  		$('.show').html("<div id='"+data._id+"'><h2>"+data['name']+"</h2><p> Origin: "+data['origin']+"</br> Vintage: "+data['vintage']+"</p><button class = \"delete\">DELETE!</button> </div>");
  	  }        // appends .wine class with h2's of the ojects retrieved through the api/wines array
 	);

 })
} 
// delete
 $('.show').on("click", "div", function(event){
	var target = $( event.target );
 	if(target.is("button"
 		)){
 	console.log(this.id);
   $.ajax({
            url: "http://localhost:3000/api/wines/"+this.id,
            type: "DELETE",
            // contentType: "application/json; charset=utf-8",
            // dataType: "json",
        })
   	$('.show').hide();
   	$('.wine').html('');
   	getIndex();
   	$('.wine').show();
   	}
 });

 $('.createLink').on("click",function(event){
 	$('.wine').hide();
 	$('.create').show();
 	$( "#form" ).submit(function( event ) {
 	
 			var wine = {
 				name:$('#name').val(),
 				origin:$('#origin').val(),
 				abv:$('#abv').val(),
 				vintage:$('#vintage').val(),
 				colour:$('#colour').val(),
 				price:$('#price').val()
 			}
 			console.log(wine);
 		$.ajax({
            url: "http://localhost:3000/api/wines",
            type: "POST",
            data: JSON.stringify({"wine": wine}),
            contentType: 'application/json'
            
        });
       
 	$(getIndex());
 	$('.create').hide();
 	$('.wine').show();
 	});
 })
});