var id = 0;

function krawnav(frag,depth){
	frag = $(frag || "body");
	depth = depth || 1;
	var headings = $("h"+depth,frag),
		navid = id++;
	headings.each(function(i,el){
		var me = $(el),
			next = i < headings.length-1 ? $(headings[i+1]) : me.nextAll("h"+(depth-1)+":first"),
			section = me.nextUntil(next).andSelf();
		section.wrapAll("<div class='krawsection krawsection"+navid+(i?"":" krawsectionactive")+"' id='krawnav"+(id++)+"'>");
	});
	var html = "<ul class='krawnav' id='krawsection"+navid+"'>"
	frag.find(".krawsection").each(function(i,el){
		var $el = $(el);
		html += "<li><a class='krawlink"+(i?"":" krawlinkactive")+"' id='"+el.id+"link'>"+$(headings[i]).text()+"</a></li>"
		krawnav(el,depth+1);
	});
	html+="</ul>";
	frag.find(".krawsection:first").before(html);
}

$(function(){
	krawnav("#main");
	$("body").on("click",".krawlink",function(e){
		var $el = $(this),
			navid = this.id,
			navpartid = "#"+navid.substr(0,navid.length-4),
			ul = $el.parent().parent(),
			secid = ul.attr("id"),
			sections = $("body").find("."+secid),
			targetsection = sections.filter(navpartid);
		if ($el.hasClass("krawlinkactive")){
			return;
		}
		
		ul.find(".krawlinkactive").removeClass("krawlinkactive");
		$el.addClass("krawlinkactive");
		
		sections.removeClass("krawsectionactive");
		targetsection.addClass("krawsectionactive");
	});
});
