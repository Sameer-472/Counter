console.log("this is test")

let btns1 = document.querySelectorAll('.btn');
// console.log(btns)
console.log(number)


let count = 0; 

btns1.forEach(function(btn){ 
    // console.log(btn)
    btn.addEventListener('click' , (e)=>{
        let color = document.querySelector('.container')
        // console.log(color)
        let style = e.currentTarget.classList;
        if(style.contains('Increase')){
            console.log(style)
            count++;
            color.style.background = 'red'    
        }
        else if(style.contains('Decrease')){
            count--
            color.style.background = 'yellow'
        } 
        else{
            count = 0;
            color.style.background = 'purple'
        }
        
        
    let number = document.querySelector('#number').innerHTML = count;
    // number.innerHtml += count;
    })
    // console.log(style)
})