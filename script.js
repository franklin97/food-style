 // JavaScript File
$(document).ready(function(){
    
    
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
    
    
    currentcountry = countries.Japan;
    
    for(var x=0; x < currentcountry.length; x++)
    {
        
        var ingredient = currentcountry[x];
        
        
        console.log(ingredient.name);
    }
   //$('#plate').css('height', window.innerHeight/2);
   /* $('#next').click(function(){
        $('.container-fluid').show();
        $('')
    })
    */
    var ingredientCount = 1;
    var maxIngredient = 6;
    $('.ingredients').click(function(){
        $('#spot' + ingredientCount + ' img').attr('src', this.src);
        
        if(ingredientCount <= maxIngredient){
            ingredientCount++;
        }else {
            ingredientCount = 1;
        }
    })
    
    
    
})