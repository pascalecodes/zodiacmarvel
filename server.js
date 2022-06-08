const express = require('express')
const app = express()
// const cors= require('cors')
const PORT = 8000

// app.use(cors())

const zodiac = {
    'aquarius':{
        'character': 'Shuri',
        'personality': 'She is sometimes shy, but a genius and fighter at heart,she has a forward looking mentality and is always in need of her next project, all traits of an aquarius',
        'date range': '1/20 - 2/18'
    },
    'pisces':{
        'character': 'Scarlet Witch',
        'personality': 'She has a desire to take revenge on those who hurt her loved ones. She is sensitive and feels overwhelmed just a pisces',
        'date range': '2/19 - 3/20'
    },
    'aries':{
        'character': 'Captain Marvel',
        'personality': 'She dons the personality of an Aries, she is fiere, passionate and strong belief',
        'date range': '3/21 - 4/19'
    },
    'taurus':{
        'character': 'Iron Man',
        'personality': 'Billionaire, philanthropist and playboy. All that is the epitome of a taurus',
        'date range': '4/20 - 5/20'
    }, 
    'gemini':{
        'character': 'Loki',
        'personality': 'He is playful, clever and often two-faced. He truly personifies a gemini',
        'date range': '5/21 - 6/20'
    },
    'cancer':{
        'character': 'Spiderman',
        'personality': 'He is loyal, protective and very caring towards his close ones. He will do anything for them, just liek a cancer would',
        'date range': '6/21 - 7/22'
    },
    'leo':{
        'character': 'Captain America',
        'personality': 'He is loyal, protective, stern and also a bit dramatic just like a leo',
        'date range': '7/23 - 8/22'
    },
    'virgo':{
        'character': 'Doctor Strange',
        'personality': 'He is the perfect virgo, he can creat4e strategies in a matter of seconds while achieving near perfection in every situation. He also loves smaller details like a typical virgo.',
        'date range': '8/23 - 9/22'
    },
    'libra':{
        'character': 'Ant-Man',
        'personality': 'He is the friendly avenger who navigates problems with ease and will do anything to save his family, similar to what a libra does most of the time',
        'date range': '9/23 - 10/22'
    },
    'scorpio':{
        'character': 'Black Widow',
        'personality': 'She is intriguing, good at hiding her feelings and waits for the right moment to attack and win effectively just like a scorpio.',
        'date range': '10/23 - 11/21'
    },
    'sagittarius':{
        'character': 'Star-Lord',
        'personality': 'He had a lust for travelling the universe in his spaceship, which indicates freedom, he earns for adventure and indepence like all sagittarus',
        'date range': '11/22 - 12/21'
    },
    'capricorn':{
        'character': 'Thor',
        'personality': 'He is tenacious, a bit egoistic and incredibly resilient, his dry sense of humour are all just like capricorns',
        'date range': '12/22 - 1/19'
    },
    'unknown':{
        'character': 'unkown',
        'personality': 'unknown',
        'date range': 'null'
    }
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/', (request, response) =>{
    response.json(zodiac)
})

app.get('/api/:sign', (request, response) =>{
    const sign =request.params.sign.toLowerCase()
    if(zodiac[sign]){
        response.json(zodiac[sign])
    }else{
        response.json(zodiac['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch it!`)
})