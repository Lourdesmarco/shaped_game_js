const ENEMY_HEIGHT = 5,
    ENEMY_SPEED = 5,
    ENEMY_WIDTH = 10,
    KEY_LEFT = "LEFT", // Percentage of screen width
    KEY_RIGHT = "RIGHT", // Percentage of screen height
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 10,
    SHOT_HEIGHT = 3,
    SHOT_WIDTH = 3;

function getRandomNumber (range) {
    return Math.floor(Math.random() * range);
}

function collision (div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);
}

window.onload = function() {
    // views
    let menu = document.querySelector("#menu");
    let settings = document.querySelector("#settings");
    let themes = document.querySelector("#themes");
    let leaderboard = document.querySelector("#leaderboard");
    
    // buttons
    let start = document.querySelector("#startGame");
    const game = new Game();

    start.addEventListener("click", () => {
        menu.style.setProperty("display", "none");
        
        game.start();
    });

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('back')) {
            menu.style.setProperty("display", "flex");
            settings.style.setProperty("display", "none");
            themes.style.setProperty("display", "none");
            leaderboard.style.setProperty("display", "none");
        }
        if (event.target.classList.contains('menu_item')) {
            menu.style.setProperty("display", "none");
            document.querySelector("#"+ event.target.dataset.view).style.setProperty("display", "flex");
        }
        if (event.target.classList.contains('backToGame')) {
            document.querySelector("#pausedGame").style.setProperty("display", "none");
            game.pause();
            //menu.style.setProperty("display", "none");
            //document.querySelector("#"+ event.target.dataset.view).style.setProperty("display", "flex");
        }

        //backToGame
        
    }, false);
};

//prevent reload
window.onbeforeunload = function() {
    return "Are you sure you want to leave? Think of the shapes!";
}
