<?php

	function responseGet($item){
		$data = file_get_contents('data/' . $item . '.json');
		echo $data;
	}


	if( $_GET['item'] === 'common_bulletin' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'cuizhenkuan_works' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'cuizhenkuan_treatise' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'cuizhenkuan_video' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'exhibition_permanent' ){
		responseGet($_GET['item']);
	}

	if( $_GET['item'] === 'gallery_works' ){
		responseGet($_GET['item']);
	}


?>
