   // scroll animation functionality
         
         $(document).ready(function(){
             // Add smooth scrolling to all links in navbar + footer link
             $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
               // Make sure this.hash has a value before overriding default behavior
               if (this.hash !== "") {
                 // Prevent default anchor click behavior
                 event.preventDefault();
           
                 // Store hash
                 var hash = this.hash;
           
                 // Using jQuery's animate() method to add smooth page scroll
                 // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                 $('html, body').animate({
                   scrollTop: $(hash).offset().top
                 }, 900, function(){
              
                   // Add hash (#) to URL when done scrolling (default click behavior)
                   window.location.hash = hash;
                 });
               } // End if
             });
             
             $(window).scroll(function() {
               $(".slideanim").each(function(){
                 var pos = $(this).offset().top;
           
                 var winTop = $(window).scrollTop();
                   if (pos < winTop + 600) {
                     $(this).addClass("slide");
                   }
               });
             });
           });
           
           //sidenav toggle functionality
           function openNav() {
             document.getElementById("mySidenav").style.width = "250px";
           } 
         
           function closeNav() {
             document.getElementById("mySidenav").style.width = "0";
           }
         
           //increase, decrease, reset functionality
           $(document).ready(function(){
           var resize = new Array('body');
           var sizeh1 = $("h1").css("font-size");
           var sizeh2 = $("h2").css("font-size");
           var sizeh3 = $("h3").css("font-size");
           var sizeh4 = $("h4").css("font-size");
           resize = resize.join(',');
           
           //resets the font size when "reset" is clicked
           var resetFont = $(resize).css('font-size');
           var reseth1 = sizeh1;
           var reseth2 = sizeh2;
           var reseth3 = sizeh3;
           var reseth4 = sizeh4;
           console.log(reseth4);
             $("#resetFontSize").click(function(){
               $(resize).css('font-size', resetFont);
               $("h1").css('font-size', reseth1);
               $("h2").css('font-size', reseth2);
               $("h3").css('font-size', reseth3);
               $("h4").css('font-size', reseth4);
             });
           
           //increases font size when "+" is clicked
           $("#increase").click(function(){
             var originalFontSize = $(resize).css('font-size');
             var originalFontNumber = parseFloat(originalFontSize, 10);
             var newFontSize = originalFontNumber*1.1;
             $( "h1" ).css( "font-size", "+=1" );
             $( "h2" ).css( "font-size", "+=1" );
             $( "h3" ).css( "font-size", "+=1" );
             $( "h4" ).css( "font-size", "+=1" );
             var test = $( "h4" ).css( "font-size");
             console.log(test);
             $(resize).css('font-size', newFontSize);
             return false;
           });
           
           //decrease font size when "-" is clicked
           $("#decrease").click(function(){
             var originalFontSize = $(resize).css('font-size');
             var originalFontNumber = parseFloat(originalFontSize, 10);
             var newFontSize = originalFontNumber*0.8;
             $( "h1" ).css( "font-size", "-=1" );
             $( "h2" ).css( "font-size", "-=1" );
             $( "h3" ).css( "font-size", "-=1" );
             $( "h4" ).css( "font-size", "-=1" );
             $(resize).css('font-size', newFontSize);
             return false;
           });
         });
         
         $(document).ready(function(){
           var font = $('body').css('font-family');
         
           $("#resetFont").click(function(){
             $("body").css("font-family", font);
           });
         
           $("#lato").click(function(){
             $('body').css("font-family", "Lato");
             var newFont = $('body').css('font-family');
           });
           
           $("#nunito").click(function(){
             $('body').css("font-family", "Nunito");
             var newFont = $('body').css('font-family');
           });
         
           $("#arial").click(function(){
               $('body').css("font-family", "Arial");
               var newFont = $('body').css('font-family');
             });
         
           $("#arimo").click(function(){
             $('body').css("font-family", "Arimo");
             var newFont = $('body').css('font-family');
           });
           console.log(font);
         });
         
         $(document).ready(function(){
         
           $("#grey").click(function(){
             $('body').addClass("greyscale")
           });
         
           $("#resetGrey").click(function(){
             $('body').removeClass("greyscale")
           });
         });
         
           