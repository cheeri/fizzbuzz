$( document ).ready(function() {
    

        var divideby3 ;
        var divideby5 ;
        var display;

    	

        for(counter = 1; counter<=100; counter++){

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
            
            $('.content ul').append("<li><label>"+display+"</label></li>");   
           

        };
    	
    		
   	});   	   

    

