(function(global) {

	var id = 0;


	function makeid(text) {
		text = encodeURIComponent("_" + text.replace(/\W/g, ""));
		return text;
	}



	function buildmenusection(branch, depth) {
		var html = "<a class='krawmenulink krawmenulinkdepth" + depth + "' href='#" + branch.id + "'>" + branch.text + "</a>";
		$.each(branch.subs,function(i,subtree) {
			html += buildmenusection(subtree, depth + 1);
		});
		return html;
	}



	function setupkrawnav(contentid, navbuttonid, containerid) {
		var tree = krawnav(contentid),
			menu = "",
			container = $(containerid).addClass("krawcontentlist"),
			button = $(navbuttonid);
		$.each(tree,function(i,branch) {
			menu += buildmenusection(branch, 0);
		});

		setInterval(checkHash, 100);
		return menu;
	}



	function krawnav(frag, depth, path) {
		frag = $(frag || "body");
		depth = depth || 1;
		path = path || [];
		var headings = $("h" + depth, frag),
			navid = id++,
			arr = [];
		headings.each(function(i, el) {
			var me = $(el),
				next = i < headings.length - 1 ? $(headings[i + 1]) : me.nextAll("h" + (depth - 1) + ":first"),
			section = me.nextUntil(next).andSelf();
			section.wrapAll("<div class='krawsection krawsection" + navid + (i ? "" : " krawsectionactive") + "' id='" + makeid($(headings[i]).text()) + "'>");
		});
		var html = "<ul class='krawnav' id='krawsection" + navid + "'>"
		frag.find(".krawsection").each(function(i, el) {
			var $el = $(el),
				headtext = $.trim($(headings[i]).text());
			html += "<li><a href='#" + el.id + "' class='krawlink" + (i ? "" : " krawlinkactive") + "' id='" + el.id + "link'>" + headtext + "</a></li>"
			arr.push({
				id: el.id,
				text: headtext,
				subs: krawnav(el, depth + 1, path.concat(["<a href='#"+el.id+"' class='krawlink krawpathlink'>"+headtext+"</a>"]))  // recursion call3
			});
//			$el.prepend("<div class='krawpath'>"+path.join(" &rarr; ")+" &rarr; </div>");
		});
		html += "</ul>";
		frag.find(".krawsection:first").before(html);
		return arr;
	}



	function makesectionchoise(sec) {
		sec.siblings(".krawsection").removeClass("krawsectionactive");
		sec.addClass("krawsectionactive");
		var link = $("#" + sec.attr("id") + "link");
		link.parent().parent().find(".krawlinkactive").removeClass("krawlinkactive");
		link.addClass("krawlinkactive");
	}



	function bubblefromel(el) {
		sec = $(el).closest(".krawsection");
		if (sec.length) {
			makesectionchoise(sec);
			bubblefromel(sec.parent());
		}
	}

	var currenthash = ""
	function checkHash() {
		if (window.location.hash !== currenthash) {
			bubblefromel(window.location.hash)
		}
	}

	global.setupkrawnav = setupkrawnav;

} (window))
