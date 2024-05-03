(function($){

	jQuery( document ).ready(function($) {

		initTimeline();
		initPartnersSlider();
		AOS.init({
			once: true,
		});
		
	});

	// Init timeline
	function initTimeline() {
		$(window).on('scroll', checkPosition);

		function checkPosition() {
			if($(window).scrollTop() > $('.story').offset().top) {
				$(window).off('scroll', checkPosition);
				
				var tabs = $('.story__list__item');
				var currentIndex = 0;
				var timelite = $('.story__timeline li');
				
				function switchTab(index) {
					tabs.removeClass('active');
					$(tabs[index]).addClass('active');
					// $(tabs[index]).addClass('active');

					timelite.removeClass('active');
					$(timelite[index]).addClass('active');
				}
				
				setInterval(function() {
					currentIndex = (currentIndex + 1) % tabs.length;
					switchTab(currentIndex);
				}, 5000);
				
				switchTab(currentIndex);
			}
		}
	}

	// Init Partners Slider
	function initPartnersSlider() {
		var delay = 1500,
			duration = 700;

		$('.partners-list-slider').each(function() {
			const $parent = $(this),
				$images = $parent.find('.partners-list--images .partner-item'),
				$slides = $parent.find('.partners-list--slides'),
				imageCount = getColumnImages(-1).length;
			
			let $columns = $slides.find('.partner-item:visible'),
				currentImageIndex = 0,
				isHiddenColumns = !!$slides.find('.partner-item:hidden').length;

			$(window).on('resize', function() {
				$columns = $slides.find('.partner-item:visible');
				isHiddenColumns = !!$slides.find('.partner-item:hidden').length;
			});

			let activeColumnIndex = -1;

			$columns.each(function() {
				$(this).data('activeImageIndex', 0);
			});
			
			setInterval(function() {
				increaseColumn();
				// if (isHiddenColumns && activeColumnIndex === 0) {
				// 	increaseColumn();
				// }
				setNextImage(activeColumnIndex);
			}, delay);

			function increaseColumn() {
				do {
					activeColumnIndex += 2;
					if (activeColumnIndex > $columns.length - 1) {
						isEven(activeColumnIndex) ? activeColumnIndex = 1 : activeColumnIndex = 0;
					}
				} while (getColumnImages(activeColumnIndex).length < 2);
			}

			function setNextImage(index) {
				const $column = $columns.eq(index),
							activeImageIndex = $column.data('activeImageIndex');

				const $colImages = getColumnImages(index);

				const nextImageIndex = currentImageIndex = !isHiddenColumns ? 
					activeImageIndex + 1 < $colImages.length ? activeImageIndex + 1 : 0
					: currentImageIndex + 1 < imageCount ? currentImageIndex + 1 : 1;

				$column.data('activeImageIndex', nextImageIndex);

				replaceImages($columns.eq(activeColumnIndex), $colImages.eq(nextImageIndex).html());
			}

			function getColumnImages(index) {
				return index > -1 && !isHiddenColumns ? $images.filter(function() {
					return Number($(this).data('column')) === index + 1;
				}) : $images.filter(function() {
					return Number($(this).data('column')) !== 1;
				});
			}
		});

	const isEven = n => !(n % 2);

		function replaceImages($slide, $img) {
			$slide.append($img);
		const $newImg = $slide.find('.partner-item__img:last-child img');
		$newImg.attr('src', $newImg.data('src'));
			setTimeout(function() {
				$slide
					.find('.partner-item__img')
					.eq(0)
					.remove();
			}, duration);
		}
	}

}(jQuery));