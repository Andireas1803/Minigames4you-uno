import React from 'react';

function CreatePage(): JSX.Element {
    return (<main className="creategame">
        <div className="container">
            <div className="form">
                <div className="title">
                    Create a New Lobby
                </div>
                <div className="input text" data-validate="Name is required">
                    <label htmlFor="username">Your Name</label>
                    <input type="text" id="username" placeholder="Enter your name" />
                        <span className="focus"/>
                </div>
                <div className="input text">
                    <label htmlFor="turntime">Turn Time</label>
                    <input type="number" id="turntime" value="20" min="5" max="120"/>
                    <span className="focus"/>
                </div>
                <div className="input text">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Leave blank for no password"/>
                    <span className="focus"/>
                </div>
                <div className="input checkbox">
                    <input type="checkbox" id="private"/>
                    <label htmlFor="private">Invite Only</label>
                </div>
                <div className="input checkbox hidden">
                    <input type="checkbox" id="unobefore" checked />
                    <label htmlFor="unobefore">Can do something...</label>
                </div>
                <div className="input checkbox hidden">
                    <input type="checkbox" id="cantake3cardsup"/>
                    <label htmlFor="cantake3cardsup">Can also do something...</label>
                </div>
                <div className="input checkbox hidden">
                    <input type="checkbox" id="drinkuno"/>
                    <label htmlFor="drinkuno">Can do something else...</label>
                </div>
                <div className="input btn">
                    <div className="wrap">
                        <div className="bgbtn"></div>
                        <button className="btn" id="create">
                            <span>Create
							<i className="fas fa-long-arrow-alt-right"/>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="goback">
                    <a href="/"><i className="fas fa-hand-point-left"/>GO BACK</a>
                </div>
            </div>
        </div>
    </main>
);
}

export default CreatePage;
