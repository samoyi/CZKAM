<?php

	function responseGet($item){
		$data = file_get_contents('data/' . $item . '.json');
		echo $data;
	}


	if( $_GET['item'] === 'common_bulletin' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'cuizhenkuan_chronology' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'cuizhenkuan_works' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'cuizhenkuan_treatise' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'cuizhenkuan_activity' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'cuizhenkuan_video' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'exhibition_permanent' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'public_ssgyb' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'public_ysdjt' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'public_exchanges' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'public_volunteering' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'research_events' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'collection_chinese' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'gallery_works' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'gallery_derivatives' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'service_bulletin' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'service_download' ){
		responseGet($_GET['item']);
	}

	// 文章详情
	if( strtok($_GET['item'], '_') === 'article' ){
		responseGet($_GET['item']);
	}


?>
