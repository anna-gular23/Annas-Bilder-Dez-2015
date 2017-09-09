$.ajax(url0)
		.done(function(response1,response2){
			$('#contentBody').html(response1);
			$('.buttons').on('click', '.skip-photo1', function(){
				$.ajax(url.urlFantasy)
				.done(function(response1,response2){
				$('#contentBody').html(response1); 
				$('.buttons').on('click', '.skip-photo2', function(){
				$.ajax(url.urlParis)
					.done(function(response1,response2){
						$('#contentBody').html(response1); 
						$('.buttons').on('click', '.skip-photo3', function(){
						$.ajax(url.urlFlower)
							.done(function(response1,response2){
								$('#contentBody').html(response1); 
								$('.buttons').on('click', '.skip-photo4', function(){
								$.ajax(url.urlNY)
									.done(function(response1,response2){
										$('#contentBody').html(response1); 
										$('.buttons').on('click', '.skip-photo5', function(){
											$.ajax(url.urlBirds)
												.done(function(response1,response2){
													$('#contentBody').html(response1); 
													$('.buttons').on('click', '.skip-photo6', function(){
														$.ajax(url.urlFlower2)
															.done(function(response1,response2){
																$('#contentBody').html(response1); 
																	$('.buttons').on('click', '.skip-photo7', function(){
																	$.ajax(url.url)
																	.done(function(response1,response2){
																		$('#contentBody').html(response1); 
																		$('.buttons').on('click', '.skip-photo8', function(){
																		$.ajax(url9)
																		.done(function(response1,response2){
																			$('#contentBody').html(response1); 
																			$('.buttons').on('click', '.skip-photo9', function(){
																			$.ajax(url10)
																			.done(function(response1,response2){
																				$('#contentBody').html(response1); 
																				$('.buttons').on('click', '.skip-photo10', function(){
																				$('#contentBody').html(response1); 
																				$.ajax(url11)
																					.done(function(response1,response2){
																						$('#contentBody').html(response1); 
																					});
																				});
																			});
																			});
																		});
																		});
																	});
																	});
															});
													});
												});

										});
									});
								});
							});
						});
					});
				});
			}); 
		});

	});
}