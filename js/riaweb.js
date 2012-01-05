$(function(){
	
	// backgroundeffect
	var p = $("<p class='bg'>");
	p.text($("body").html());
	$("body").append(p);
	
	
	// link fixes
	$("a").each(function(i,el){
		var link = $(el);
		if (!link.hasClass("krawlink")){
			link.addClass("doclink");
			if (link.attr("href").substr(0,1) === "#"){
				link.addClass("local")
			} else {
				link.addClass("external").attr("target","_blank");
			}
			
		}
	});
	$("a.krawmenulinkdepth0:nth-child(n+1)").not("a.krawmenulinkdepth0:first-child").css({
		borderTop: "1px dashed #777"
	});
	
});