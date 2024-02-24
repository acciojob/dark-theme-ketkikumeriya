//your code here
function swapTheme() {
        var appDiv = document.getElementById('app');
        var swapButton = document.getElementById('swap');

        // Check the current theme class
        if (appDiv.classList.contains('night')) {
            // If the current theme is theme1, switch to theme2
            appDiv.classList.remove('night');
            appDiv.classList.add('button_night');
        } else {
            // If the current theme is theme2 or any other, switch to theme1
            appDiv.classList.remove('button_night');
            appDiv.classList.add('night');
        }
    }

