/*******************************     PHONE     **********************************/  
$(function () {




    /////////////////////////////////////////////////////////////////////////////////////////                
        $('#prenom').keyup(function(){
            prenom = $('#prenom').val();
            $.ajax({
                type:"POST",
                url:"verif/prenom.php",
                data:'prenom=' + prenom,
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