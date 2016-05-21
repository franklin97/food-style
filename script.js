 // JavaScript File
$(document).ready(function(){
    
    setTimeout(playJapAudio, 10000);
var currentcountry;
    var countries = {

    Japan: [{name: 'Avocado', image: 'avocados.png'},
            {name: 'Bacon', image: 'Bacon.png'},
            {name: 'Cucumbers', image: 'cucumbers.png'},
            {name: 'Eel', image: 'eel.png'},
            {name: 'Mustard', image: 'mustard.png'},
            {name: 'Rice', image: 'rice.jpg'},
            {name: 'Seaweed', image: 'seaweed.png'},
            {name: 'Shrimp', image: 'shrimp.png'}
            ]
    
    };
    
    function playJapAudio(){
 var TheOne = Math.floor((Math.random() * 2) + 1);
 console.log(TheOne);
 if(TheOne == 1)
 {
      $('#JapSou')[0].play();
 }
 else
 {
      $('#JapSou2')[0].play();
 }
}

    
    currentcountry = countries.Japan;
    
    for(var x=0; x < currentcountry.length; x++)
    {
        
        var ingredient = currentcountry[x];
        
        
        console.log(ingredient.name);
    }
   //$('#plate').css('height', window.innerHeight/2);
    $('.button1').click(function(){
        $('.contained').show();
        $('#result').hide();
    })
    $('.button2').click(function() {
        $('#result').show();
        $('.contained').hide();
    })
    
    var ingredientCount = 1;
    var maxIngredient = 6;
    var userIngredient = [];
    $('.ingredients').click(function(){
        $('#spot' + ingredientCount + ' img').attr('src', this.src);
        userIngredient[ingredientCount]=this.id;
        console.log(userIngredient);
        if(ingredientCount <= maxIngredient){
            ingredientCount++;
        }else {
            ingredientCount = 1;
        }
    })
    
    
    
})