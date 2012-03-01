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
	
	// krawnav
	var navhtml = setupkrawnav("#main"),
		body = $("body");
	$("#krawnavbutton").click(function(e) {
		body.toggleClass("krawcontentlistshow");
	});
	$("#krawnavcontainer").html(navhtml);
	$("#nonav").on("click",function(){
		body.toggleClass("krawnavsuspend");
		if (!body.hasClass("krawnavsuspend")){
			body.animate({scrollTop:0},200);
		}
	});
	
	//deltagarbit
	var students = [{
		firstname: "Alexander",
		lastname: "Lind",
		blogurl: "http://rialind.blogspot.com/",
		blogfeed: "http://rialind.blogspot.com/feeds/posts/default",
		gituser: "alexanderlind",
		gitrepo: ""
	},{
		firstname: "Overå",
		lastname: "Overå",
		blogurl: "http://homepage.lnu.se/student/bo22bs/blog.html",
		blogfeed: "",
		gituser: "bo22bs",
		gitrepo: "ria"
	},{
		firstname: "Dzemal",
		lastname: "Becirevic",
		blogurl: "http://dzemo.se/category/ria",
		blogfeed: "http://dzemo.se/category/ria/feed",
		gituser: "DzemalBecirevic",
		gitrepo: "Ria"
	},{
		firstname: "Erik",
		lastname: "Nilsson",
		blogurl: "http://eriksria.blogg.se/",
		blogfeed: "http://eriksria.blogg.se/index.rss",
		gituser: "Magnificent",
		gitrepo: "RIA"
	},/*{
		firstname: "Jarmo",
		lastname: "Baltzar",
		blogurl: "http://madebyjarmo.dyndns-blog.com/wordpress/",
		blogfeed: "http://192.168.0.195/wordpress/?feed=rss2",
		gituser: "Jarmo-Baltzar",
		gitrepo: "RIA-Javascript"
	},*/{
		firstname: "Jens",
		lastname: "Evertsson",
		blogurl: "http://jensevertsson.nu/ria",
		blogfeed: "http://jensevertsson.nu/ria/?feed=rss2",
		gituser: "jensevertsson",
		gitrepo: "RiaJS"
	},{
		firstname: "Kim",
		lastname: "Åström Svensson",
		blogurl: "http://kimastrom.se/",
		blogfeed: "http://kimastrom.se/?feed=rss2",
		gituser: "kimastrom",
		gitrepo: "RIA"
	},{
		firstname: "Magnus",
		lastname: "Lindgren",
		blogurl: "http://qben.org/ria/",
		blogfeed: "http://qben.org/ria/?feed=rss2",
		gituser: "Q00b",
		gitrepo: "ml22sb_ria"
	},{
		firstname: "Marta",
		lastname: "Jonsson",
		blogurl: "http://dykpunkten.se/",
		blogfeed: "http://dykpunkten.se/feed/",
		gituser: "martajohnsson",
		gitrepo: "ria"
	},{
		firstname: "Martin",
		lastname: "Cedeskog",
		blogurl: "http://cedeskog.com/",
		blogfeed: "http://cedeskog.com/?feed=rss2",
		gituser: "c3der",
		gitrepo: "contactme"
	},/*{
		firstname: "Martin",
		lastname: "Svanström",
		blogurl: "http://ms22xh.wordpress.com/",
		blogfeed: "http://ms22xh.wordpress.com/feed/",
		gituser: "ms22xh",
		gitrepo: "riarilla"
	},*/{
		firstname: "Oskar",
		lastname: "Eriksson",
		blogurl: "http://www.oskvarg.se/category/ria",
		blogfeed: "http://www.oskvarg.se/category/ria/feed/",
		gituser: "Theodeus",
		gitrepo: "ria"
	},{
		firstname: "Oskar",
		lastname: "Hallén",
		blogurl: "http://oskr.me/ria/",
		blogfeed: "http://oskr.me/ria/feed/",
		gituser: "oskarhallen",
		gitrepo: "RIA"
	},{
		firstname: "Pontus",
		lastname: "Karlsson",
		blogurl: "http://riautveckling.blogspot.com/",
		blogfeed: "http://riautveckling.blogspot.com/feeds/posts/default",
		gituser: "bopontuskarlsson",
		gitrepo: "ria"
	},{
		firstname: "Richard",
		lastname: "Magnusson",
		blogurl: "http://homepage.lnu.se/student/rm22bq/blog/",
		blogfeed: "",
		gituser: "zupher",
		gitrepo: "2DV407"
	},{
		firstname: "Rikard",
		lastname: "Skotnicki",
		blogurl: "http://rs22ef.blogspot.com/",
		blogfeed: "http://rs22ef.blogspot.com/feeds/posts/default",
		gituser: "rs22ef",
		gitrepo: "ria-kurs"
	},/*{
		firstname: "Sebastian",
		lastname: "Lundin",
		blogurl: "http://sebastianlundin.se/ria",
		blogfeed: "http://sebastianlundin.se/ria/?feed=rss2",
		gituser: "sebastianlundin",
		gitrepo: "2DV407"
	}*/{
		firstname: "Viktor",
		lastname: "Karlsson",
		blogurl: "http://virrewp.wordpress.com/",
		blogfeed: "http://virrewp.wordpress.com/feed/",
		gituser: "virre89",
		gitrepo: "ria"
	}];

	var table = "<table><thead><th>Namn &amp; bloglänk</th><th>Githublänk</th></thead><tbody>";
	for(var i=0;i<students.length;i++){
		s = students[i]
		table += "<tr><td><a href='"+s.blogurl+"'>"+s.firstname+" "+s.lastname+"</a></td><td><a href='https://github.com/"+s.gituser+"'>"+s.gituser+"</a></td></tr>";
	}
	table += "</tbody></table>"
	$("#studentstable").html(table);
	
	// syntax highlight
	SyntaxHighlighter.all();
});