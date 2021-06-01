let input = document.querySelector('form input[type="file"]');

input.addEventListener('input',showimg);

function showimg(e){
    
    document.querySelector('main').innerHTML="";
    
    for(val of e.target.files){
        
        let reader = new FileReader();

        reader.onload  = function(){
            
            let img = this.result;

            let bend = document.querySelector('main').appendChild(document.createElement('img'));
            bend.src = img; 
        }
        
        reader.readAsDataURL(val);
    }
}

let form = document.querySelector('form');

form.addEventListener('submit',send);

function send(e){
    
    e.preventDefault();
    
    let form = new FormData();
    
    let file = document.querySelector('form input[type="file"]');
    let i =1;
    
    for(val of file.files){
        
        form.append(`img${i}`,val);
    }
    
    let user = document.querySelector('form input[name="user"]');
    
    form.append('user',user.value);
    
    fetch('/send-data',{
        method:'POST',
        body:form
    });
//        .then(res => return res.json())
//    .then(result => console.log(result));
    
}