import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import '../styles/component.css';

function HomePage(): JSX.Element {
	useEffect(() => {
		let rand = Math.floor(Math.random() * 20) + 1;
		let bg = 0;
		if (rand === 19) {
			rand = 5;
		}
		const nav = document.querySelector('nav');
		if (nav) {
			nav.classList.add('cl-effect-' + rand);
			if (rand === 1 || rand === 8 || rand === 14 || rand === 20) {
				bg = 1;
			} else if (rand === 2 || rand === 6 || rand === 11 || rand === 17) {
				bg = 4;
			} else if (rand === 3 || rand === 13 || rand === 18) {
				bg = 6;
			} else if (rand === 4 || rand === 21) {
				bg = 7;
			} else if (rand === 5 || rand === 19) {
				bg = 5;
			} else if (rand === 7) {
				bg = 8;
			} else if (rand === 9) {
				bg = 9;
			} else if (rand === 10) {
				bg = 10;
			} else if (rand === 12) {
				bg = 5;
			} else if (rand === 15) {
				bg = 3;
			} else if (rand === 16) {
				bg = 11;
			}
			nav.classList.add('color-' + bg);
			if (rand === 2 || rand === 5) {
				document.querySelectorAll('nav a').forEach(item => {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					const text = item.innerText;
					item.innerHTML = `<span data-hover='${text}'>${text}</span>`;
				});
			} else if (rand === 9) {
				document.querySelectorAll('nav a').forEach(item => {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					const text = item.innerText;
					item.innerHTML = `<span>${text}</span><span>${text}</span>`;
				});
			} else if (rand === 10 || rand === 19 || rand === 20) {
				document.querySelectorAll('nav a').forEach(item => {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					const text = item.innerText;
					item.innerHTML = `<span>${text}</span>`;
					item.setAttribute('data-hover', text);
				});
			} else if (rand === 11 || rand === 15 || rand === 16 || rand === 17 || rand === 18) {
				document.querySelectorAll('nav a').forEach(item => {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					const text = item.innerText;
					item.setAttribute('data-hover', text);
				});
			}
		}
	}, []);

	return (
		<main className="home">
			<div className="content">
				<div className="title">
					<h1>UNO</h1>
					<h2>With Friends</h2>
				</div>
				<Navigation />
			</div>
		</main>
	);
}

export default HomePage;
