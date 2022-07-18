//Setting where the flies can appear
var height = 0
var width = 0
var lives = 1
var time = 10
var difficulty = window.location.search
difficulty = difficulty.replace('?', '')
var createFlyTime = 2000

    if(difficulty === 'easy'){
        createFlyTime = 2000
    }else if(difficulty === 'normal') {
        createFlyTime = 1000
    }else if(difficulty === 'hard') {
        createFlyTime = 750
    }

    function adjustGameStage(){
        height = window.innerHeight
        width = window.innerWidth

        console.log(height, width)
    }
adjustGameStage()
console.log(height, width)

//Removing the flies automatically
    function randomPosition(){
        if (document.getElementById('fly')){
            document.getElementById('fly').remove()
            if(lives > 3){
            window.location.href = 'game_over.html'
        }else {
            document.getElementById('v' + lives).src = 'imagens/coracao_vazio.png'

            lives ++
        }
        }

//Making the flies appear randomly
        var Y = Math.floor(Math.random() * height - 90)
        var X = Math.floor(Math.random() * width - 90)
        Y = Y < 0 ? 0 : Y
        X = X < 0 ? 0 : X

        var fly = document.createElement('img')
        fly.src = 'imagens/mosca.png'
        fly.className = randomSize() + ' ' + randomSide()
        fly.style.top = Y + 'px'
        fly.style.left = X + 'px'
        fly.style.position = 'absolute'
        fly.id = 'fly'
        fly.onclick = function () {
            this.remove()
        }

        document.body.appendChild(fly)
    }

//Making the flies have different sizes
    function randomSize() {
        var randomClass = Math.floor(Math.random() * 3)

        switch(randomClass) { 
            case 0:
                return 'fly1'

            case 1:
                return 'fly2'
            
            case 2:
                return 'fly3'    
        }
    }

//Making the flies appear in different sides
    function randomSide() {
        var randomSide = Math.floor(Math.random() * 2)

        switch(randomSide) { 
            case 0:
                return 'A'

            case 1:
                return 'B'    
        }
    }    

//making timer
var timer = setInterval(function() {
    time -= 1
    if(time < 0){
        clearInterval(timer)
        clearInterval(createFly)
        window.location.href = 'victory.html'
    }else{
        document.getElementById('time').innerHTML = time
    }   
    }, 1000)