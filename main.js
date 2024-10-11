// const content = document.querySelector('#content')



// fetch('https://bible-api.com/john 3:16').then(function(res) {
//     return res.json()
// }).then(function(data){
//     console.log(data);
//     console.log(data.reference)
//     console.log(data.text)
//     content.innerHTML= 'reference' : $ {data.reference} <br>
//                        'content' : $ {data.text}
    

// })

const txtverse = document.querySelector('#txtverse')
const btnsearch = document.querySelector('#btnsearch')
const reference = document.querySelector('#reference')
const preview = document.querySelector('#preview')
const screen = document.querySelector('.screen')
screen.style.display='none'
// basepoint
BASE_POINT='https://bible-api.com/'
// create an event for the button
btnsearch.addEventListener('click', getBibleRequest)

function getBibleRequest(){
    let verse = txtverse.value
    if (txtverse.value=='') {
        alert('Enter your Bible verse')
    }
    else{
    // get the verse value
    // console.log(`${BASE_POINT}${verse}`);
    screen.style.display='flex'
    fetch(`${BASE_POINT}${verse}`).then(function(res){
        return res.json()
    }).then(function(data){
        reference.innerHTML=data.reference
        preview.innerHTML=data.text
        screen.style.display='none'

    })
    }
}
