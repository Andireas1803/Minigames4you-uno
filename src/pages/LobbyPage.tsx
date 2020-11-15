import React from 'react';

function LobbyPage(): JSX.Element {
	return (
		<>
			<main className="lobby">
				<div className="container">
					<div className="title">
						<h1>Players In This Lobby</h1>
					</div>
					<div className="players">
						<div className="content">
							<div className="player noplayers">
								<h2>No Players Yet</h2>
							</div>
						</div>
					</div>
					<div className="start hidden">
						<input type="submit" id="start" value="START" />
					</div>
					<div className="title">
						<h1>Invite Your Fictional Friends</h1>
					</div>
					<div className="share">
						<input id="share" type="text" value="https://uno.minigames4you.com/lobby/unknown_lobby" />
						<a href="#" id="copyshare">
							COPY LINK
						</a>
					</div>
				</div>
			</main>
			<div className="chaticon unread">
				<span className="text">CHAT</span>
				<i className="fas fa-comments" />
				<span id="unread" />
			</div>
			<div className="chat disabled">
				<h2>Chat</h2>
				<div className="close">
					<a href="#">
						<i className="fas fa-times" />
					</a>
				</div>
				<div id="messages"></div>
				<div className="createmessage">
					<textarea placeholder="Skriv en besked..." />
				</div>
			</div>
		</>
	);
}

export default LobbyPage;
