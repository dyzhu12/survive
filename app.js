var day = 1;
var bunker = 1;
var bombedBunker = 4;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

while (parseInt(bunker) !== bombedBunker) {
    bunker = prompt('Which bunker will you hide in?', bunker);
    bombedBunker = getRandomInt(1,4);
    document.getElementById('bunker').innerHTML = bunker;
    document.getElementById('bomb-bunker').innerHTML = 'Bunker ' + bombedBunker;
    
    if (parseInt(bunker) === bombedBunker) {
        alert('You lose');
    } else {
        document.getElementById('day').innerHTML = ++day;    
    }
    
}