var btn = document.createElement('button');
btn.style.margin = '50px';
btn.innerHTML = 'Hello World';
document.body.appendChild(btn);

// schijf hier tussen je code
var x = 0 
btn.addEventListener('click',shitJavaS)
// btn.onclick(shitJavaS)
function shitJavaS(){
    if(x == 0){
        document.body.style.backgroundColor = 'green'
        btn.style.backgroundColor = 'black'
        console.log('test1')
        btn.style.color = 'white'
        x++
    }
    else if (x == 1){
        document.body.style.backgroundColor = 'red'
        btn.style.backgroundColor = 'blue'
        btn.style.color = 'white'
        console.log('test2')
        x-- 
    }
    
}


// schijf hier tussen je code