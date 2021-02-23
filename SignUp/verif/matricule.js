/*******************************     PHONE     **********************************/  
$(function () {




/////////////////////////////////////////////////////////////////////////////////////////                
    $('#matricule').keyup(function(){
        matricule = $('#matricule').val();
        $.ajax({
            type:"POST",
            url:"verif/matricule.php",
            data:'matricule=' + matricule,
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