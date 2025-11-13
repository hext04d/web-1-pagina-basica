$(document).ready(function(){
    //ao clicar no botão adicionar um novo produto com os dados preenchidos
    $("#addprod").click(function(){

    });

    //função que mostra a categoria filtrada
    $("#content-navbar-main").change(function(){
    nav = $("#content-navbar-main").val();
    if(nav == 'todos') {
        $("#produtos div").show();
    }
    else{
        $("#produtos div").hide();
        $("." + nav).show(600);
    }
    });
// hide: esconde objetos / elementos do documento
// show: mostra objetos escondidos 

}); 