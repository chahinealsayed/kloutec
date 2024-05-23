/**
 * website.ts Common Script File
 *
 * @project yii2
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, July 10, 2023 at 11:49 AM GMT+3
 *
 */

import "@scss/tiers/website/website.scss";
import "@/native";
import Swiper from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

(() => {

	function main() {
		AOS.init();
		rotateCircleOnHold();
		swiper();
		numberAnimation();
		wordAnimation();
	}

	document.addEventListener("readystatechange", async (event: any) => {
		if (event.target.readyState === 'complete') {
			// (await import("@/modules/theme"))?.initTheme?.()
			main()
		}
	})



	function rotateCircleOnHold() {
		const circle = document.getElementById("circle");
		let isMouseDown = false;
		let initialMouseX = 0;

		circle?.addEventListener("mousedown", (event) => {
			isMouseDown = true;
			initialMouseX = event.clientX;
		});

		window.addEventListener("mousemove", (event) => {
			if (isMouseDown && circle != null) {
				const currentMouseX = event.clientX;
				const deltaX = currentMouseX - initialMouseX;
				circle.style.transform = `rotate(${deltaX}deg)`;
			}
		});
		window.addEventListener("mouseup", () => {
			isMouseDown = false;
		});
	}

	function swiper() {
		const swiper = new Swiper('.swiper', {
			modules: [Navigation, Autoplay, Pagination],
			direction: 'horizontal',
			breakpoints: {
				640: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 20,
				},
				1366: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 20,
				},
			},

			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar',
			},

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			scrollbar: {
				el: '.swiper-scrollbar',
			},
		});
	}

	function wordAnimation() {
		const words = document.querySelectorAll('.animate');
		let currentIndex = 0;

		function animateWords() {
			words[currentIndex].classList.add('active1');
			setTimeout(() => {
				words[currentIndex].classList.remove('active1');
				currentIndex = (currentIndex + 1) % words.length;
				animateWords();
			}, 2000);
		}
		animateWords();
	}
	function numberAnimation() {
		function animateNumbers(target, start, end, duration) {
			let startTime = null;
			function step(timestamp) {
				if (!startTime)
					startTime = timestamp;
				if (startTime != null) {
					const progress = Math.min((timestamp - startTime) / duration, 1);
					const currentNumber = Math.floor(start + progress * (end - start));
					target.textContent = currentNumber;
					if (progress < 1) {
						requestAnimationFrame(step);
					}
				}
			}
			requestAnimationFrame(step);
		}

		function startAnimation() {
			const numberElements = document.querySelectorAll('.number');
			numberElements.forEach((numberElement) => {
				if (numberElement.textContent != null) {
					const targetValue = parseInt(numberElement.textContent.replace(/\D/g, ''));
					animateNumbers(numberElement, 0, targetValue, 2000);
				}

			});
		}
		setInterval(startAnimation, 10000);
		startAnimation();
	}
})()
