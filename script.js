var playListURL = 'http://gdata.youtube.com/feeds/api/standardfeeds/GB/most_viewed?time=today&v=2&alt=json'; 
var videoURL= 'http://www.youtube.com/watch?v='; 
$.getJSON(playListURL, function(data) { 
    var list_data=""; 
    $.each(data.feed.entry, function(i, item) { 
        var feedTitle = item.title.$t; 
        var feedURL = item.link[1].href; 
        var fragments = feedURL.split("/"); 
        var videoID = fragments[fragments.length - 2]; 
        var url = videoURL + videoID; 
        var thumb = "http://img.youtube.com/vi/"+ videoID +"/default.jpg"; 
        list_data += '<div style="border: 2px solid #000; width: 600px; text-align: center; background: #CCC; padding: 10px; margin: 10px auto; font-family: Arial;"><b><a href="'+ url +'" title="'+ feedTitle +'" style="color: #000; line-height: 40px; font-size: 18px;">'+ feedTitle +'</a></b><br/ ><a href="'+ url +'" title="'+ feedTitle +'"><img alt="'+ feedTitle+'" src="'+ thumb +'" style="border: 4px solid #FF0;" /></a></div>'; 
    }); 
    $(list_data).appendTo("#mybox"); 
}); 
