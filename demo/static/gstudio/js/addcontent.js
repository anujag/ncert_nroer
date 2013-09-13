
   var isWikipage=false;
   var editWikipage=false;
   var objid;
   var isSection=false;
   var editSection=false;
   var isSubsection=false;
   var editSubsection=false;
   var isNode=false; 
   var isObject=false;
function notifyedit(pageid,username)
{
var response_content = "Edited wikipage"
$.ajax({
        url: '/gstudio/ajax/notifyuser/',
        type: 'GET',
        data: {response_content:response_content,pageid:pageid,username:username},
        beforeSend: function() {
              $("#ajax_load_image").show();
              $("#content").css({"opacity":"0.1",})
                              },
        success: function(data){
                alert("Edit notification send");
                $(".savepagecontent").hide();
                $(".orgitdownContainer").hide();
                var org_data = $("#gnoweditor").val();
                var elmts = document.getElementsByClassName("reptext");
                var encode_data = encodeURIComponent(org_data);
                var decode_data = decodeURIComponent(encode_data.replace(/\+/g, " "));
                for (var i = 0; i < elmts.length; i++){
                     elmts[i].setAttribute("value",decode_data);}
                $(".pagedit").trigger('click');
                },
        complete: function(){
                $("#ajax_load_image").hide();
                }
 });
}
function subsecsave(objid){
       var org_data = $("#gnoweditor").val();
       var encode_data = encodeURIComponent(org_data);
       var decode_data = decodeURIComponent(encode_data.replace(/\+/g, " "));
       $("#sectionreply"+objid).val(decode_data);
       $("#subsecsubmit"+objid).trigger('click');
       $(".savesubsec1").hide();
       
   }
function moveUp() {
    
        $('#lstBox1 :selected').each(function (i, selected) {
            $(this).insertBefore($(this).prev());
	    $("#lstbox2").options.att("selected",false);
        });
        $('#lstBox1 select').focus().blur();
      $('#lstBox2 :selected').each(function (i, selected) {
            $(this).insertBefore($(this).prev());
	  $("#lstbox1").options.att("selected",false);
        });
        $('#lstBox2 select').focus().blur();
}

function moveDown() {
    $('#lstBox1 :selected').each(function (i, selected) {
        $(this).insertAfter($(this).next());
	$("#lstbox2").options.att("selected",false);	
    });
    $('#lstBox1 select').focus().blur();
       $('#lstBox2 :selected').each(function (i, selected) {
            $(this).insertAfter($(this).next());
	   $("#lstbox1").options.att("selected",false);
        });
        $('#lstBox2 select').focus().blur();
    }

    
  jQuery(document).ready(function($) {
//        $('#btnUp').click(moveUp);
	    $(document).on('click','#btnUp',moveUp);
//     	 $('#btnDown').click(moveDown);
	    $(document).on('click','#btnDown',moveDown);

      $(document).on('click','#cancel',function(){
	    $("#collection").hide();
            $("#collectionimg").hide();
            $("#coll input").show();
//            $(".addtoimgdrawer").show();
//css({"display":""});
            $("#imagecollections").show();
           
	});
  
        $("#addcontent").one("click",function(){
 	
	   isSection=true;
	          $("#addcontent").hide();
	          //$("#save").show();
		  $("#chart").hide();
	    $("#content").css({"width":"300px",})
	         document.getElementById('gnoweditor').style.visibility="visible";
	        $("#gnoweditor").orgitdown(mySettings);
		 var orgtext = $("#gnoweditor").val();

	   });
	$("#save").one("click",function() {
		var org_data = $("#gnoweditor").val();
		document.getElementById("orgpage").value = org_data;
		var encode_data = encodeURIComponent(org_data);
		$('#submitsec').trigger('click');
	    $("#save").hide();
		});

	$("#pagecontent1").one("click",function() {
 	    $(this).replaceWith('<textarea id="gnoweditor" style="visibility:hidden;width:450px"></textarea>');
	    isWikipage=true;
	    $("#chart").hide();
	    document.getElementById('gnoweditor').style.visibility="visible";
	    $("#gnoweditor").orgitdown(mySettings);
            $(".orgitdownContainer").css({"margin-top":"0px","margin-left":"10px"});
	//$("#save1").show();
	    $("#pagecontent1").hide();
	    $("#content").css({"width":"300px",})
	    });
        $("#save1").one("click",function() {
	var org_data = $("#gnoweditor").val();
	document.getElementById("orgpage1").value = org_data;
	var encode_data = encodeURIComponent(org_data);

	$(".orgitdownContainer").hide();
	$("#pagedata").val(encode_data);
	if ($("#coll").is(":checked")) {
	    }
	    else {
		 $('#submitpage').trigger('click');}


	});
//        $("#cancel").one("click",function() {
      $(".editseccontent").one("click",function(){
          editSection=true;
	 // $(".saveseccontent").show();
	   $("#content img").css({"max-width":"600px",})
	   $("#content").css({"width":"600px",})
	  $("#chart").hide();
	  document.getElementById('gnoweditor').style.visibility="visible";
	  $("#gnoweditor").orgitdown(mySettings);
	  var a = this.name;
	  $("#gnoweditor").val(a);
	  var elmts = document.getElementsByClassName("editval");
	  for (var i = 0; i < elmts.length; i++){
	      elmts[i].setAttribute("value","edited");}
	  var screenTop = $(document).scrollTop();
	  $(".orgitdownContainer").css({
	      "margin-top":screenTop,});
	  $("#newsection1").hide();
	  $(".editseccontent").hide();
	  $(".createsubsection").hide();
	  $("#rating").hide();
	  $(".chkbox").hide();
	  $(".deletesec").hide();
	  $(".tag").hide();
	  $(".tagtext").hide();
	  $(".editpagecontent").hide();
	  $(".editsubsec").hide();
      });
       $(".saveseccontent").one("click",function(){
	   var org_data = $("#gnoweditor").val();
	   var elmts = document.getElementsByClassName("reptext");
	   var encode_data = encodeURIComponent(org_data);
	   var decode_data = decodeURIComponent(encode_data.replace(/\+/g, " "));
	   for (var i = 0; i < elmts.length; i++){
	       elmts[i].setAttribute("value",decode_data);}
	   $(".submitresponse").trigger('click');
	   $(".saveseccontent").hide();
		  
       });

       $(".editsubsec").one("click",function(){
	   editSubsection=true;
	   var each_id=$(this).attr("id");
	   $("#chart").hide();
	   $("#content img").css({"max-width":"600px",})
	   
	   $("#content").css({"width":"600px",})
	   document.getElementById('gnoweditor').style.visibility="visible";
	   $("#gnoweditor").orgitdown(mySettings);
	   var org_data=$("#subsec"+each_id).val();
	   $("#edit"+each_id).val("edited");
	   $("#sectionreply"+each_id).val(org_data);
	   $("#gnoweditor").val(org_data);
	   var screenTop = $(document).scrollTop();
	   $(".orgitdownContainer").css({
	       "margin-top":screenTop,});
	    //$("#save"+each_id).show();
	   objid=each_id;
	   $(".editsubsec").hide();
	   $(".submitsubsec1").hide();
	   $(".tag").hide();
	   $(".tagtext").hide();
	   $(".editpagecontent").hide();
	   $("#newsection1").hide();
	   $(".editseccontent").hide();
	   $(".createsubsection").hide();
	   $("#rating").hide();
	   $(".chkbox").hide();
	   $(".deletesec").hide();
       });
//      $(".editpagecontent").live("click",function(){
	    $(document).on('click','.editpagecontent',function(){
	    $(this).replaceWith('<textarea id="gnoweditor" style="visibility:hidden;width:450px"></textarea>');
	    editWikipage=true;
      	    $("#chart").hide();
	    $(".editpagecontent").hide();
      	  //  $(".savepagecontent").show();
 	    $("#content img").css({"max-width":"600px",})
	   
	    $("#content").css({"width":"600px",})
	    document.getElementById('gnoweditor').style.visibility="visible";
	    $("#gnoweditor").orgitdown(mySettings);
            var a = this.name;
	    $("#gnoweditor").val(a);
	    var elmts = document.getElementsByClassName("editval");
	    for (var i = 0; i < elmts.length; i++){
		elmts[i].setAttribute("value","edited");}
	   //var screenTop = $(document).scrollTop();
      	    $(".orgitdownContainer").css({
      		"margin-top":"0px","margin-left":"10px"});
	   //$(".tag").hide();
	   //$(".tagtext").hide();
	   $("#newsection1").hide();
	   $(".createsubsection").hide();
	   $("#rating").hide();
	   $(".chkbox").hide();
	   $(".deletesec").hide();
	   $(".editseccontent").hide();
	   $(".editsubsec").hide();
	  
		    
       });
	
       $(document).on('click',".addtodrawer",function(){
	
	  $(".addtodrawer").hide();
	  var getdrawer=$(".getdrawer").val();
	  $("#collection").show();
	 
       });
        $(".addtoimgdrawer").click(function(){
          $("#imagecollections").hide();
          $("#imagediv").css({"position":"relative","margin-top":"335px"})
          $(".addtoimgdrawer").hide();
          var getdrawer=$("#drawer").val();
          $("#collectionimg").show();

      });



      $("#resetdrawer").click(function(){
	  $('#lstBox2').empty();
      });

     
      //  $('#btnRight').click(function(e) {
    $(document).on('click','#btnRight',function(){
        var selectedOpts = $('#lstBox1 option:selected');
        if (selectedOpts.length == 0) {
            alert("Nothing to move.");
            e.preventDefault();
        }

        $('#lstBox2').append($(selectedOpts).clone());
        $(selectedOpts).remove();
        e.preventDefault();
    });
//      $('#btnLeft').click(function(e) {
    $(document).on('click','#btnLeft',function(){
        var selectedOpts = $('#lstBox2 option:selected');
        if (selectedOpts.length == 0) {
            alert("Nothing to move.");
            e.preventDefault();
        }

        $('#lstBox1').append($(selectedOpts).clone());
        $(selectedOpts).remove();
        e.preventDefault();
    });

   	
//       $(".savepagecontent").one("click",function(){
    $(document).on('click','.savepagecontent',function(){
           if (editWikipage==true){
               pageid=$("#ptitle").val();
               username=$(".username").val();
              // alert(pageid);
             //  alert(username);
               notifyedit(pageid,username);
	   }
	   
           
      	  
       });
      $("#editnodecontent").one("click",function(){
	  isNode=true;
      	    $("#chart").hide();
	    $("#content img").css({"max-width":"600px",})
	   
	    $("#content").css({"width":"600px",})
	    document.getElementById('gnoweditor').style.visibility="visible";
	    $("#gnoweditor").orgitdown(mySettings);
            var a = this.name;
	 
	    $("#gnoweditor").val(a);
	   var screenTop = $(document).scrollTop();
      	    $(".orgitdownContainer").css({
      		"margin-top":screenTop,});
	   $("#editnodecontent").hide();
	   //$("#savenodecontent").show();
           $("#nodedit").hide();
		    
       });
       $("#savenodecontent").one("click",function(){
	   var org_data = $("#gnoweditor").val();
	   var encode_data = encodeURIComponent(org_data);
	  
	   var decode_data = decodeURIComponent(encode_data.replace(/\+/g, " "));
	   $("#reptext").val(decode_data);
	   $("#nodedit").trigger('click');
	   $("#nodedit").hide();
	   
       });


      $("#editobjectcontent").one("click",function(){
	  isObject=true;
      	    $("#chart").hide();
	    $("#content img").css({"max-width":"600px",})
	   
	    $("#content").css({"width":"600px",})
	    document.getElementById('gnoweditor').style.visibility="visible";
	    $("#gnoweditor").orgitdown(mySettings);
            var a = this.name;
	 
	    $("#gnoweditor").val(a);
	   var screenTop = $(document).scrollTop();
      	    $(".orgitdownContainer").css({
      		"margin-top":screenTop,});
	   $("#editnodecontent").hide();
	   //$("#savenodecontent").show();
           $("#objectedit").hide();
		    
       });
       $("#saveobjectcontent").one("click",function(){
	   var org_data = $("#gnoweditor").val();
	   var encode_data = encodeURIComponent(org_data);
	  
	   var decode_data = decodeURIComponent(encode_data.replace(/\+/g, " "));
	   $("#reptext").val(decode_data);
	   $("#objectedit").trigger('click');
	   $("#objectedit").hide();
	   
       });
       $(".createsubsection").one("click",function(){
	           isSubsection=true;
	           //$(".savesubsec").show();
	           //$(".submitsubsec").show();
	           $(".createsubsection").hide();

	           $("#content img").css({"max-width":"600px",})
	           $("#content").css({"width":"600px",})   
		    $("#chart").hide();
		    document.getElementById('gnoweditor').style.visibility="visible";
		    $("#gnoweditor").orgitdown(mySettings);
		    $("#gnoweditor").val('');
		    var screenTop = $(document).scrollTop();
		    $(".orgitdownContainer").css({
			    "margin-top":screenTop,});
		  
	   });
       $(".savesubsec").one("click",function() {
	   var org_data = $("#gnoweditor").val();
	   var elmts = document.getElementsByClassName("reptext");
	   var encode_data = encodeURIComponent(org_data);
	   var decode_data = decodeURIComponent(encode_data.replace(/\+/g, " "));
	   for (var i = 0; i < elmts.length; i++){
	       elmts[i].setAttribute("value",decode_data);}
	   $(".savesubsec").hide();
	   $(".submitsubsec").trigger('click');
       });

      $("#savecontent").one("click",function() {
	      var org_data = $("#gnoweditor").val();
	      var id =  document.getElementById("objectid").value
	       document.getElementById("orgcontent").value = org_data;
	      var encode_data = encodeURIComponent(org_data);
          $("#savecontent").hide();
		         $.ajax({
			       url: '/nodetypes/ajax/contentorgadd/?id=' + id + '&contentorg=' + encode_data,
			       success: function(data) {
			         $.ajax({
				    url: '/nodetypes/ajax/ajaxcreatefile/?id=' +id+ '&content_org=' +encode_data,
				    success: function(data) {
				    	$.ajax({
				    		url: '/nodetypes/ajax/ajaxcreatehtml/',
				    		success: function(data) {
				    		    $.ajax({
				    			    url: '/nodetypes/ajax/contentadd/?id=' +id,
                                                            success: function(data) {
								// alert("Data Saved");
                                                              location.reload();}
				    			});
				    		}      
				     	    });
				     }
				}); 
			    
			       }
			 });
		    
      });

  });
       
    
