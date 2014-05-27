function doFirst(){
	var words = document.getElementsByClassName("dragStart");
	for(var i = 0; i<words.length;i++){
		
		words[i].addEventListener("dragstart",startDrag, false);
	
	} 

	var wordsSpanish = document.getElementsByClassName("raw-material-space");
	for(var i = 0; i<wordsSpanish.length;i++){
	wordsSpanish[i].addEventListener("dragenter", function(e){e.preventDefault();}, false)
	wordsSpanish[i].addEventListener("dragover", function(e){e.preventDefault();},false)
	wordsSpanish[i].addEventListener("drop",droppedRawMaterial,false)
	} 
	
	var wordsSpanish = document.getElementsByClassName("manufactured-good-space");
	for(var i = 0; i<wordsSpanish.length;i++){
	wordsSpanish[i].addEventListener("dragenter", function(e){e.preventDefault();}, false)
	wordsSpanish[i].addEventListener("dragover", function(e){e.preventDefault();},false)
	wordsSpanish[i].addEventListener("drop",droppedManufacturedGood,false)
	} 
	
	
	}

function startDrag(e){
	

	e.dataTransfer.setData('Text',this.id);
}

function droppedRawMaterial(e){
	e.preventDefault();
	var id= e.dataTransfer.getData("Text").trim();
	if (this.innerHTML=="" && (id=="bean" || id=="gold" || id=="oil" || id=="steel" || id=="wheat" || id=="wood")) {
		this.appendChild(document.getElementById(id));

	};
	
}

function droppedManufacturedGood (e){
	e.preventDefault();
	var id= e.dataTransfer.getData("Text").trim();
	if (this.innerHTML=="" && (id=="bici" || id=="bp" || id=="mt" || id=="mf" || id=="mc" || id=="mb")) {
		this.appendChild(document.getElementById(id));

	};
	
}
window.addEventListener("load", doFirst, false);