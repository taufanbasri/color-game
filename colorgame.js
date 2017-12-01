var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square')
var pickedColor = pickColor()
var colorDisplay = document.getElementById('colorDisplay')
var messageDisplay = document.getElementById('message')
var h1 = document.querySelector('h1')
var resetButton = document.getElementById('reset')
var easyBtn = document.getElementById('easyBtn')
var hardBtn = document.getElementById('hardBtn')

easyBtn.addEventListener('click', function () {
    hardBtn.classList.remove('selected')
    easyBtn.classList.add('selected')
    numSquares = 3
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i]
        }else{
            squares[i].style.display = 'none'
        }
    }
})

hardBtn.addEventListener('click', function () {
    easyBtn.classList.remove('selected')
    hardBtn.classList.add('selected')
    numSquares = 6
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = 'block'
    }
})

resetButton.addEventListener('click', function (params) {
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    messageDisplay.textContent = ''
    this.textContent = 'New Colors'

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        
    }

    h1.style.backgroundColor = 'steelblue'
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