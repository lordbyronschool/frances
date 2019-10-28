$(document).ready(function(){
    $("button").hide();
    $("input").click(function(){
        $("button").show();
        
    });

    $("button").click(function(){
      var opcion=$('input[name=op]:checked').val();
       if(opcion=='2')
       {
        $("label").hide();   
      $("button").hide();
        var html = "<div class='next'><h1>Good Job! :)</h1><br><button class='siguiente' >Next</button>  </div>";            
        $("button").before(html);    
        $(".siguiente").click(function(){
            var url = "../index.html"; 
        $(location).attr('href',url);
        } );
        }else
        {
        $("button").hide();
        $("label").hide(); 
        var html = "<div class='error'><h1>I am sad :(</h1><br><button class='volver' >Volver</button>  </div>";            
        $("button").before(html);    
        $(".volver").click(function(){
            var url = "1.html"; 
        $(location).attr('href',url);
        } );
  
        }
        
        
     
    });
     
       
       
       });