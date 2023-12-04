//TODO: sección para mostrar detalles de los proyectos
var title = document.getElementById("title"), titleDetails = document.getElementById("titleDetails"), text = document.getElementById("text");
var titulo = "", detallesTitulo = "", texto = "";

var js = document.getElementById("js"), java = document.getElementById("Java"),htmlYcss = document.getElementById("htmlYcss"), php = document.getElementById("Php"), sql = document.getElementById("SQL");
var vs = document.getElementById("VScode"),  pho = document.getElementById("Photo"),  ill = document.getElementById("Illus"), krita = document.getElementById("Krita"), net = document.getElementById("Net"), and = document.getElementById("And");
var DevTime = document.getElementById("DevTime"), tiempoDesarrollo = "";

var GameEvidence = document.getElementById("GameEvidence"), ShopEvidence = document.getElementById("ShopEvidence"), AppEvidence = document.getElementById("AppEvidence"), ThisEvidence = document.getElementById("ThisEvidence");
var backEvidence = document.getElementById("BackEvidence"), nextEvidence = document.getElementById("NextEvidence");
var EvidencesIndex = 0, EvidencesLimit = 0, ConcurrentEvidence;

function ViewProject(ProjectName){
    quitAll();
    
    switch(ProjectName){
        case "GAME":
            titulo = "Guess the picture";
            detallesTitulo = "Juego de ingles";
            texto = "fue un juego de ingles desarrollado en java para la materia de programación visual, la intención era crear un juego atractivo visualmente para todo publico, con una interfaz limpia pero que pueda divertir a sus usuarios, el juego usa base de datos local para guardas los progresos del juego, aunque era poco su contenido podia guardarse los resultados obtenidos.";

            java.classList.remove("quit"); sql.classList.remove("quit");
            net.classList.remove("quit"); pho.classList.remove("quit");

            tiempoDesarrollo = "20 de noviembre de 2021 - 15 de diciembre de 2021 aprox";

            document.getElementById("RAR").href="https://www.google.com";
            document.getElementById("EXE").href="https://www.google.com";

            GameEvidence.classList.remove("quit");
            SetNewCarrouselIndex(GameEvidence);
        break;

        case "SHOP":
            titulo = "Duvet";
            detallesTitulo = "Sistema de tienda de ropa";
            texto = "es un sistema que simula a una tienda de ropa (porque no podia cobrar de verdad), fue un proyecto desarrollado para la materia de comercio electrónico, la tienda contaba con un sistema de login, carrito de compras, historial de pedidos, guardar tarjetas y métodos de pago, he incluso personalización de interfaz, lo que caracterizaba a este proyecto era poder personalizar los componentes de la pagina, desde la forma de los componentes hasta los colores.";

            js.classList.remove("quit"); htmlYcss.classList.remove("quit"); sql.classList.remove("quit"); php.classList.remove("quit");
            vs.classList.remove("quit"); pho.classList.remove("quit"); krita.classList.remove("quit"); 

            tiempoDesarrollo = "10 de septiembre de 2022 - 12 de enero 2023 aprox";
        
            document.getElementById("RAR").href="https://www.google.com";
            document.getElementById("EXE").href="https://www.google.com";

            ShopEvidence.classList.remove("quit");
            SetNewCarrouselIndex(ShopEvidence);
        break;
        
        case "APP":
            titulo = "Melodix";
            detallesTitulo = "App reproductora de música";
            texto = "Una aplicación desarrollada en android studio para la materia de desarrollo de aplicaciones móviles, la aplicación era para dispositivos android de la version 11 a la 13 (en esas versiones fue puesta a prueba y funciono sin problemas), con este proyecto me propuse crear la interfaz mas atractiva posible con un estilo visual diferente, y muestre sugerencias a partir de las tendencias del usuario, la app usa los archivos de música del dispositivo y tiene una base de datos de local ";

            java.classList.remove("quit"); sql.classList.remove("quit");
            and.classList.remove("quit"); ill.classList.remove("quit"); pho.classList.remove("quit");

            tiempoDesarrollo = "20 de marzo de 2023 - 3 de enero 2023 ";
        
            document.getElementById("RAR").href="https://www.google.com";
            document.getElementById("EXE").href="https://www.google.com";
            
            AppEvidence.classList.remove("quit");
            SetNewCarrouselIndex(AppEvidence);
        break;
        
        case "THIS":
            titulo = "Mi portafolio";
            detallesTitulo = "una muestra de mi trabajo";
            texto = "con esta pagina mi intención es dar a conocer lo que se hacer, esta pagina fue realizada en mis tiempos libres y trate de no buscar lo menos posible de información y hacer la pagina con el con mi propio conocimiento";

            js.classList.remove("quit"); htmlYcss.classList.remove("quit");
            vs.classList.remove("quit"); krita.classList.remove("quit");

            tiempoDesarrollo = "16 de octubre de 2023 - ... ";
            
            document.getElementById("RAR").href="https://www.google.com";
            document.getElementById("EXE").href="https://www.google.com";
            
            ThisEvidence.classList.remove("quit");
            SetNewCarrouselIndex(ThisEvidence);
        break;

        default:
            titulo = "Que gracioso";
            titleDetails = "Tal vez demasiado";
            texto = "Es gracioso que puedas ver este contenido, ya que ni siquiera es posible ver este texto sin alterar el código, si puedes ver esto no solo significa que sabes como funciona mi código, o solo cambiaste alguna opción desde inspeccionar, si se te descompone la pagina recuerda... una reiniciada arregla todo :)";
            
            document.getElementById("RAR").href="";
            document.getElementById("EXE").href="";
    }

    title.innerHTML = titulo;
    titleDetails.innerHTML = detallesTitulo;
    text.innerHTML = texto;

    DevTime.innerHTML = tiempoDesarrollo

    document.getElementById("ProjectDetails").classList.add("show");
    document.getElementById("Real_body").style.overflow="hidden";
}


function SetNewCarrouselIndex(IdElement){
    EvidencesLimit = IdElement.getElementsByTagName("dd").length;
    ConcurrentEvidence = IdElement;
    EvidencesIndex = 0;
}

function NextEvidence(){
    if((EvidencesLimit-1) != EvidencesIndex){
        EvidencesIndex++;
        ConcurrentEvidence.style.marginLeft = "-"+EvidencesIndex+"00%";
        if((EvidencesLimit-1) == EvidencesIndex){ nextEvidence.classList.add("opaco"); }
        if(backEvidence.classList.contains("opaco")){backEvidence.classList.remove("opaco")}
    }
}
function LastEvidence(){
    if(0 != EvidencesIndex){
        EvidencesIndex--;
        ConcurrentEvidence.style.marginLeft = "-"+EvidencesIndex+"00%";
        if(0 == EvidencesIndex){ backEvidence.classList.add("opaco"); }
        if(nextEvidence.classList.contains("opaco")){nextEvidence.classList.remove("opaco")}
    }
}

function CloseProjectInfo(){ 
    document.getElementById("ProjectDetails").classList.remove("show"); 
    document.getElementById("Real_body").style.overflow="visible"
}

function quitAll(){
    js.classList.add("quit");
    java.classList.add("quit");
    htmlYcss.classList.add("quit");
    php.classList.add("quit");
    sql.classList.add("quit");

    vs.classList.add("quit");
    pho.classList.add("quit");
    ill.classList.add("quit");
    krita.classList.add("quit");
    Net.classList.add("quit");
    and.classList.add("quit");

    GameEvidence.classList.add("quit");
    GameEvidence.style.marginLeft = "0px";

    ShopEvidence.classList.add("quit");
    ShopEvidence.style.marginLeft = "0px";
    
    AppEvidence.classList.add("quit");
    AppEvidence.style.marginLeft = "0px";
    
    ThisEvidence.classList.add("quit");
    ThisEvidence.style.marginLeft = "0px";

    backEvidence.classList.add("opaco");
    nextEvidence.classList.remove("opaco");
}