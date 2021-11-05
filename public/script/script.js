function active(id){
    
    let f=document.querySelector('#home');
    f.classList.remove('active');
    let d=document.querySelector('#'+id);
    d.classList.add('active');
}
