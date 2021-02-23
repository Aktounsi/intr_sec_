/*******************************     PHONE     **********************************/  
$(function () {




    /////////////////////////////////////////////////////////////////////////////////////////                
        $('#nom').keyup(function(){
            nom = $('#nom').val();
            $.ajax({
                type:"POST",
                url:"verif/nom.php",
                data:'nom=' + nom,
                success:function(data){
                        
                        if(data == 4){
                            $('#error').fadeOut();
                                $('#error').fadeIn().text('Champ non valide');
                                    } 
                                    if(data == 3){
                                        $('#error').fadeOut();
                                            $('#error').fadeIn().text('Champ valide');
                                                }           }
                    })
                                  })
    });  