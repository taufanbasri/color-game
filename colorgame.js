var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square')
var pickedColor = pickColor()
var colorDisplay = document.getElementById('colorDisplay')
var messageDisplay = document.getElementById('message')
var h1 = document.querySelector('h1')
var resetButton = document.getElementById('reset')
var modeButton = document.querySelectorAll('.mode')

for (let i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener('click', function () {
        modeButton[0].classList.remove('selected')
        modeButton[1].classList.remove('selected')
        this.classList.add('selected')

        this.textContent === 'Easy' ? numSquares = 3: numSquares = 6

        reset()
    })
}

function reset() {
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    resetButton.textContent = 'New Colors'
    messageDisplay.textContent = ''

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block'
            squares[i].style.backgroundColor = colors[i]
        }else{
            squares[i].style.display = 'none'
        }
    }

    h1.style.backgroundColor = 'steelblue'
}

resetButton.addEventListener('click', function (params) {
    reset()
})

colorDisplay.textContent = pickedColor

for (var i = 0; i < squares.length; i++) {
    // add initial colors to square
    squares[i].style.backgroundColor = colors[i]
    
    // add click listeners to squares
    squares[i].addEventListener('click', function () {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor

        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!'
            resetButton.textContent = 'Play Again?'
            changeColors(clickedColor)
            h1.style.backgroundColor = clickedColor
        }else{
            this.style.backgroundColor = '#232323'
            messageDisplay.textContent = 'Try Again!'
        }
    })
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
        
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)

    return colors[random]
}

function generateRandomColors(num) {
    var arr = []

    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }

    return arr
}

function randomColor() {
    // r for red, g for green & b for blue
    var r = Math.floor(Math.random() * 256 )
    var g = Math.floor(Math.random() * 256 )
    var b = Math.floor(Math.random() * 256 )

    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}