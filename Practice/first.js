$(document).ready(function(){
    $('#btn').on(
        'click',
        {
            firstName:'Raheel',
            lastName:'Saleem'
        }
        ,
        function(event){
            $('#main').html(event.data.firstName+' '+event.data.lastName);
        }
    )

});