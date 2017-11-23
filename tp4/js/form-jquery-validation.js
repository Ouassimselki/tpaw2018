$( document ).ready(function() {
    
         console.log( "DOM ready!" );
    
         $("#gps").on("click",function(event){
             event.preventDefault();
             console.log("click");  
    
                getLocation();
            
         });


         $("#add").on("click",function(event){
            event.preventDefault();
            console.log("click");  


            if($("#name").val().length==0 || $("#firstname").val().length==0 ||
               $("#adresse").val().length==0 || $("#mail").val().length==0 )
         {


         }
         else{

            contactStore.add($("#name").val(),$("#firstname").val(), $("#birth").val(), $("#adresse").val(), $("#mail").val());
            
            var contactList = contactStore.getList();
            document.querySelector("table tbody").innerHTML = " ";



            for(var index in contactList){
                console.log(contactList[index].name);

                /*
                document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
                '<tr><td>'+contactList[index].name+
                '</td><td>'+contactList[index].firstname+
                '</td><td>'+contactList[index].date+
                '</td><td>'+contactList[index].adress+
                '</td><td>'+contactList[index].mail+
                '</td></tr>';
                */

                var N = contactList[index].name;
                var F = contactList[index].firstname;
                var B = contactList[index].date;
                var A = contactList[index].adress;
                var M = contactList[index].mail;

                var T = `<tr><td> ${N} </td><td> ${F} </td><td> ${B} </td><td><a href="https://maps.google.com/?q=${A}">${A}</a> </td><td> <a href="mailto:${M}">${M}</a> </td></tr>` ;

                document.querySelector("table tbody").innerHTML += T;
                
                
                
              }




         }
           
        });
    
     });