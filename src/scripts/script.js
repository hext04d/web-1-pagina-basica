$(document).ready(function(){
    
    //variável temporária"para guardar o resultado da imagem 
    var imagemDataUrl = ""; 

    // criando ouvinte de evento, só para o input da imagem.
    $("#imagemProduto").on('change', function(e){
        // Pega o primeiro arquivo que o usuário selecionou
        var file = e.target.files[0]; 

        // Se realmente foi selecionado um arquivo...
        if (file) {
            var reader = new FileReader(); // Cria o "Leitor de Arquivos"
            
            // definindo o que o leitor faz quando terminar de ler
            reader.onload = function(event) {
                imagemDataUrl = event.target.result; 
            }
            
            //o leitor começar a ler o arquivo
            reader.readAsDataURL(file);
        } else {
            // Se clicar em "cancelar", limpa a variável
            imagemDataUrl = "";
        }
    });

    //O seu "ouvinte" do botão "Adicionar" 
    $("#addprod").click(function(e){
        e.preventDefault(); 
        
        var nome = $("#nomeProduto").val();
        
    
        var img = imagemDataUrl; 
        
        var preco = $("#precoProduto").val();
        var categoria = $("#categoriaProduto").val(); 

        if (img === "") {
            alert("Por favor, selecione uma imagem.");
            return;
        }

        var novaDiv = $(`
            <div class="produto-card ${categoria}">
                <img src="${img}" alt="Imagem de ${nome}">
                <p>${nome}</p>
                <p>R$ ${preco}</p>
                <button class="botao-retirar">Retirar</button>
            </div>
        `);
        
        $("#product-list").append(novaDiv);
        
        $("#nomeProduto").val("");
        $("#precoProduto").val("");
        $("#imagemProduto").val(""); 
        imagemDataUrl = "";        
    });


    // Função que mostra a categoria filtrada
    $("#filtroCategoria").change(function(){
        var nav = $(this).val();
        
        if(nav == 'todos') {
            $("#product-list .produto-card").show();
        }
        else{
            $("#product-list .produto-card").hide();
            $("#product-list ." + nav).show();
        }
    });
    
    // Função de Retirar
    $("#product-list").on('click', '.botao-retirar', function(){
        $(this).closest('.produto-card').remove();
    });

});