var vaiMudar = false, cont, valor, historico = Array(), memoria = Array(), fe = false, hyp=false,deg="deg";

function atualizar(){
	$(this).css("background-color", "rgb(192,192,192)");
	valor = $("#valor").text();
	valor = valor.replace(",",".");

};


$(document).on("click",".numeros",function(){
	atualizar();
	if(valor.length < 15)
	$("#valor").html(valor == "0"|| vaiMudar ? $(this).text().trim() :(valor+$(this).text().trim().replace(".",",")));
	vaiMudar = false;
});

$(document).on("click",".opp", function(){
	atualizar();
	if($(this).text()=="(")
	    $("#valor2").html($("#valor2").text()+" " +$(this).text()+"");
	else
	    $("#valor2").html($("#valor2").text()+$("#valor").text()+""+$(this).text()+" ");
	vaiMudar = true;
})

$(document).on("click","#ce", function(){
   atualizar();
   $("#valor").html("0");
  

});

$(document).on("click","#c", function(){
	atualizar();
	$("#valor").html("0");
	$("#valor2").html("");
 
 });

 $(document).on("click","#backspace", function(){
    atualizar();
	if(valor != "0" && valor.length !=1)
	   $("#valor").html(valor.substring(0, valor.length-1).replace(".",","));
	else if($("#valor").text()== "" || $("#valor").text()=="-" || valor.length == 1)
	   $("#valor").html("0");
 });

 $(document).on("click","#xquad", function(){
    atualizar();
	xquad = Math.pow(parseFloat(valor),2)
	$("#valor").html(xquad.ToString().replace(".",",")) 


 });

 $(document).on("click","#elevado", function(){
	atualizar();
	    $("#valor2").html($("#valor2").text()+$("#valor").text()+"^");
	vaiMudar = true;
})

$(document).on("click","#sen", function(){
    atualizar();
	sen = Math.sin(parseFloat(valor));
	$("#valor").html(sen.ToString().replace(".",",")) 


 });

 $(document).on("click","#cos", function(){
    atualizar();
	cos = Math.cos(parseFloat(valor));
	$("#valor").html(cos.ToString().replace(".",",")) 


 });

 $(document).on("click","#tan", function(){
    atualizar();
	tan = Math.tan(parseFloat(valor));
	$("#valor").html(tan.ToString().replace(".",",")) 


 });

 $(document).on("click","#xcubo", function(){
    atualizar();
	xcubo = Math.pow(parseFloat(valor),3)
	$("#valor").html(xcubo.ToString().replace(".",","))


 });

 $(document).on("click","#yroot", function(){
	atualizar();
	    $("#valor").html($("#valor").text() +"yroot");
	
})


$(document).on("click","#sen1", function(){
    atualizar();
	sen = Math.pow(Math.sin(parseFloat(valor)),-1);
	$("#valor").html(sen.ToString().replace(".",",")) 


 });

 $(document).on("click","#cos1", function(){
    atualizar();
	cos =  Math.pow(Math.cos(parseFloat(valor)),-1);
	$("#valor").html(cos.ToString().replace(".",",")) 


 });

 $(document).on("click","#tan1", function(){
    atualizar();
	tan =  Math.pow(Math.tan(parseFloat(valor)),-1);
	$("#valor").html(tan.ToString().replace(".",",")) 


 });

 $(document).on("click","#raiz", function(){
    atualizar();
	raiz = Math.sqrt(parseFloat(valor));
	$("#valor").html(raiz.ToString().replace(".",","))


 });


 $(document).on("click","#dezax", function(){
    atualizar();
	dezax = Math.pow(10, parseFloat(valor));
	$("#valor").html(dezax.ToString().replace(".",","))


 });

 $(document).on("click","#log", function(){
    atualizar();
	log = Math.log(parseFloat(valor));
	$("#valor").html(log.ToString().replace(".",","))


 });

 $(document).on("click","#exp", function(){
    atualizar();
	$("#valor").html($("#valor").text()+",e+");


 });

 $(document).on("click","#mod", function(){
	atualizar();
	    $("#valor").html($("#valor").text()+ "Mod");
	vaiMudar = true;
})

$(document).on("click","#umsobre", function(){
	atualizar();
	umsobre = 1/parseFloat(valor);
	$("#valor").html(umsobre.toString().replace(".",","));
});

$(document).on("click","#eax", function(){
	atualizar();
	eax = Math.pow(2.71828182845904523, parseFloat(valor));
	$("#valor").html(eax.toString().replace(".",","));
});

$(document).on("click","#ln", function(){
atualizar();
ln = Math.log(parseFloat(valor))/Math.log(2.71828182845904523);
$("#valor").html(ln.toString().replace(".",","));

});

$(document).on("click","#dms", function(){
	atualizar();
	dms = valor.split(".")[0]+","+(valor.split(".")[1]*6);
	$("#valor").html(dms);



});

$(document).on("click","#deg", function(){
	atualizar();
    valorSplit = valor.split(".");
	if((valor.split[1]*16).toString().length > 2)
	   deg =(int.parseint(valorSplit[0])+1)+","+(valorSplit[1]*1666666666).substring(1,(valorSplit[1]*1666666666).toString().length);
	else
	   deg = valorSplit[0]+ ","+(valorSplit[1]*1666666666)
	   $("#valor").html(deg.toString().replace(".",","));
});
$(document).on("click","#pi", function(){
	atualizar();
    $("#valor").html("3.141592653589793");
	vaiMudar = true
});

$(document).on("click","#fatorial", function(){
     atualizar();
	if(valor<0)
	   fatorial = "Entrada Inválida";
	else{
		var fatorial =1;
		for(x = valor; x>1; x--)
		  fatorial = fatorial * x;
	}
	$("#valor").html(fatorial.toString().replace(".",","));
})
$(document).on("click","#maismenos", function(){
	atualizar();
	menos = parseFloat(valor)*-1;
	$("#valor").html(menos.toString().replace(".",","));


});

$(document).on("click","#virgula", function(){
   atualizar();
   if(!valor.includes(","))
      $("#valor").html(valor+",");
});

$(document).on("click","#igual", function(){
	atualizar();
	valor2 = $("#valor2").text();
	valor2 = valor2.replace("×","*");
	valor2 = valor2.replace("÷","/");
	conta ="";

	if(valor2.substring(valor2.length-2, valor2.length-1)== ")")
	    conta = valor2;
	else
	    conta = valor2 + $("#valor").text();
		resultado = 0;
		conta = conta.replace(",",".");
	if(conta.includes("^")){
		conta = conta.split("^");
		aux = 0; 
		for(i=0;i<conta.length;i++){
			if(i==0)
			   resultado = eval(conta[0]);
			else
			   resultado = Math.pow(resultado, eval(conta[i]));

		}
	}
   else if(conta.includes("Mod")){
		conta = conta.split("Mod");
		aux = 0;
		for(i=0;i<conta.length; i++){
			if(i==0)
			   resultado = eval(conta[0]);
			else
			   resultado = resultado%eval(conta[i]);
		}
	}

	else if(conta.includes("yroot")){
		conta = conta.split("yroot");
		aux = 0;
		for(i=0;i<conta.length; i++){
			if(i==0)
			   resultado = eval(conta[0]);
			else
			   resultado = Math.pow(resultado,1/eval(conta[i]));
		}
	}

	else{
		resultado = eval(conta);

	}
	$("#valor2").html("");
	vaiMudar = true;
	$("#valor").html(resultado.toString().replace(".",","));
});

document.addEventListener("keydown",function(evt){
	atualizar();
	evt = evt || window.event;
	var key = evt.keyCode || evt.which;
	switch(key){
		case 8:
			$("#bakspace").click();
			break;
		case 27:
			$("#c").click();
			break;
	}
})
