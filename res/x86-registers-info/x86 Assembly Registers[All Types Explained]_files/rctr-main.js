/* My Custom Scripts here */

jQuery(document).ready(function( $ ) {
    
	jQuery(document).on('click', '.rctr-copy-btn', function(){
		var n   = '#mainCont';
		var a   = jQuery("<input>");
		jQuery("body").append(a), a.val(jQuery(n).text()).select(), document.execCommand("copy").toString(), a.remove();
	});
	
	jQuery('.rctr-btns-content').hide();
	jQuery(document).on('click', '#masterBulkButton', function(){
		jQuery('.rctr-btns-content').hide();
		jQuery('#mainCont-single').hide();
	});
	
	jQuery(document).on('DOMSubtreeModified', '#mainCont-single', function(){
		jQuery('#mainCont-single').show();
	});

	jQuery(document).on('DOMSubtreeModified', '#myProgress #per', function(){
		if ( '100%' == jQuery(this).html() ) {
			jQuery('.rctr-btns-content').show(); 
			/* if ( '1' == jQuery('#numberOfEntriesHomePage').val() ) {
				htm 	= jQuery('#mainCont').html();
				if ( 'JSON' == jQuery('#typeOfFile').val() ) {
					rctr_display_json_fmt(htm);
				}
				else if ( 'XML' == jQuery('#typeOfFile').val() ) {
					rctr_display_xml_fmt(htm);
				}
				else {
					rctr_display_csv_fmt(htm);
				}
				setTimeout(() => {
					jQuery('#mainCont').attr('style', 'display:none !important;');
				}, 50);
			} */

		}
	});



	jQuery(document).on('click', '#pills-single-tab', function(){
		jQuery('.rctr-progress-bar').html('');
		jQuery('.rctr-progress-bar-single').html('<div id="myProgress" style="display: none;"><div id="myBar"><span id="per">100%</span></div></div>');
	});
	
	jQuery(document).on('click', '#pills-bulk-tab', function(){
		jQuery('.rctr-progress-bar-single').html('');
		jQuery('.rctr-progress-bar').html('<div id="myProgress" style="display: none;"><div id="myBar"><span id="per">100%</span></div></div>');
	});

	jQuery(document).on('click', '.rctr-copy-btn-single', function(){
		var n   = '#inputirandomcardnumber';
		var a   = jQuery("<input>");
		jQuery("body").append(a), a.val(jQuery(n).text()).select(), document.execCommand("copy").toString(), a.remove();
	});

	var sngl_href 	= jQuery(location).attr('href');
	var cc_click 		= '';
	if ( 'undefined' != typeof sngl_href.split('#')[1] ) {
		cc_click 		= sngl_href.split('#')[1];
	}
	else {
		cc_click 		= 'visa';
	}

	setTimeout(function(){
		var dd 	= '.rctr-single-links .cards-links a.' + cc_click ;
		jQuery(dd).click();
	}, 10);


	jQuery(document).on( 'click', '.rctr-single-links ul li', function(e) {
		var gnrt_btn_id 	= jQuery(this).attr('data-gnrt_btn_id');
		jQuery('.card_gen_bank').attr( 'id', gnrt_btn_id );
		
		var gnrt_first_image 	= jQuery(this).attr('data-href');
		var gnrt_title 	= jQuery(this).attr('data-title');
		jQuery('.rctr-single-content .single-card-image').attr( 'src', gnrt_first_image );
		jQuery('.rctr-single-content .single-card-image').attr( 'alt', gnrt_title );

		jQuery('.rctr-single-content .card-icon-incard').attr( 'src', gnrt_first_image );
		jQuery('.rctr-single-content .card-icon-incard').attr( 'alt', gnrt_title );
		jQuery('.rctr-single-content .rctr-btn-snapshot').attr( 'data-name', gnrt_title );
		jQuery('#'+gnrt_btn_id).click();
		
	});


});


var takeScreenShot = function() {
	var n = jQuery("#snapshot").attr("data-name");
	html2canvas(document.getElementById("sample-card-table"), {
			onrendered: function(a) {
					var s = document.createElement("canvas");
					s.width = 360, s.height = 350, s.getContext("2d").drawImage(a, 0, 0, 360, 350, 0, 0, 360, 350);
					var r = document.createElement("a");
					r.href = s.toDataURL("image/jpg"), r.download = n + ".jpg", r.click();
			}
	})
};


function rctr_display_json_fmt( htm ) {
	htm 	 	= htm.split('<br>').join('').split('&nbsp;').join('');
	htm 		= JSON.parse(htm)[0];
	rctr_display_single_credit_card(htm);
}


function rctr_display_xml_fmt( htm ) {
	htm 	 	= htm.split('&lt;').join('<').split('&gt;').join('>');
	htm 	 	= htm.split('<br>').join('').split('&nbsp;').join('');
	var cc = jQuery(htm).find("CreditCard");

	var arr_htm 	= {};
	jQuery.each(cc, function(){
    arr_htm.IssuingNetwork = jQuery(this).find('IssuingNetwork').text();
    arr_htm.CardNumber = jQuery(this).find('CardNumber').text();
    arr_htm.Name = jQuery(this).find('Name').text();
    arr_htm.Address = jQuery(this).find('Address').text();
    arr_htm.Country = jQuery(this).find('Country').text();
    arr_htm.Bank = jQuery(this).find('Bank').text();
    arr_htm.CVV = jQuery(this).find('CVV').text();
    arr_htm.Exp = jQuery(this).find('Exp').text();
	});

	var cc_arr 	= {};
	cc_arr.CreditCard 	= arr_htm;

	rctr_display_single_credit_card(cc_arr);
}


function rctr_display_csv_fmt( allText ) {
	htm 	 	= htm.split('<br>');
	var htm_keys 	= htm[0].split(',');
	var htm_values 	= htm[1].split(',');
	
	var arr_htm 	= {};
	jQuery.each(htm_keys, function(i,v){
		arr_htm[v] 	= htm_values[i];
	});
	var cc_arr 	= {};
	cc_arr.CreditCard 	= arr_htm;

	rctr_display_single_credit_card(cc_arr);
}


function rctr_process_csv(allText) {
	var record_num = 14;  // or however many elements there are in each row
	var allTextLines = allText.split(/\r\n|\n/);
	var entries = allTextLines[0].split(',');
	var lines = [];

	var headings = entries.splice(0,record_num);
	while (entries.length>0) {
		var tarr = [];
		for (var j=0; j<record_num; j++) {
				tarr.push(headings[j]+":"+entries.shift());
		}
		lines.push(tarr);
	}
	return lines;
}


function rctr_display_single_credit_card( htm ) {
	htm 		= htm.CreditCard;
	dhtm 		= '<table class="rctr-display-single-cc">';
	jQuery.each(htm, function(i,v){
		dhtm 	+= '<tr><th>' + i + '</th> <td> ' + v + '</td></tr>';
	});
	dhtm 		+= '</table>';
	jQuery('#mainCont-single').html(dhtm);
}
