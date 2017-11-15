$( document ).ready(function() {

     console.log( "DOM ready!" );

     $("#submit").on("click",function(event){
         event.preventDefault();
         console.log("click");  

         if($("#Nom").val().length<5 || $("#Prenom").val().length<5 || $("#Date").val().length<5 ||
            $("#Adresse").val().length<5 || $("#Mail").val().length<5 )
         {

            $(".modal-title").text("Désolé");
            $(".modal-body").html('Veuillez Vérifier que vous avez  remplis tout les champs');

         }
         else{

            $(".modal-title").text("Bienvenu   " + $("#Nom").val());

            $(".modal-body").html(' Votre date de naissance est : ' + $("#Date").val() + 
            '</br>'  + 'Et vous habitez : ' + '</br>'  + 
            '<img src="https://maps.googleapis.com/maps/api/staticmap?center='+$('#Ville').val()+'&markers='+$('#Ville').val()+'&size=800x400&zoom=13&key=AIzaSyAoJHUmNryx_XM6JTZIAOV6QyDIafWzsqo"  height="260" width="420"/>' 
             + '</br>' + '<a href="http://maps.google.com/maps?q='+$("#Adresse").val()+' '+$('#Ville').val()+'">' + $("#Adresse").val() + '</br>' + $('#Ville').val() + '</a>' );

         }

         $("#myModal").modal("show");
     });

 });