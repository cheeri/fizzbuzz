$( document ).ready(function() {
    
    $('#fizzbizzcalculate').click(function(){

        var fizzbizzvalue;

        //$('#itemlist').remove();

        fizzbizzvalue = $('#fizzbuzzcounter').val();
        fizzbizzvalue = parseInt(fizzbizzvalue,10); 
        if (!isNaN(fizzbizzvalue))
            {
                fizzbizzgenerator(fizzbizzvalue );
            }
            

    });
    		
});  

function fizzbizzgenerator(uppercountervalue ) {
            
            var divideby3 ;
            var divideby5 ;
            var display;
            var counter;
            

            for(counter = 1; counter<=uppercountervalue; counter++){

                divideby3 = counter % 3;
                divideby5 = counter % 5;
                
                if (divideby5 === 0 && divideby3 === 0)
                {
                    display = "fizzbuzz";
                }
                else if (divideby3 === 0) {
                    display = "fizz";
                }
                else if (divideby5 === 0) {
                    display = "buzz";
                }
                else display = counter;

                display = display.toString();
                
                $('ul').append('<li><label>'+display+'</label></li>');  
         
            };

   }; 	   

    

