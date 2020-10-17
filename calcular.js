function calcular(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    
    if (txtnum.value.length == 0) {
        window.alert('DIGITA UM NÚMERO NÉ, CARALHO')
    }else{
        var a = Number(num.value)
        tab.innerHTML = ''
        for(var b=0;b<=10;b++){
            let item = document.createElement('option')
            item.value = `tab ${b}`
            item.text = `${a} x ${b} = ${a*b}`
            tab.appendChild(item)
            
        }
    }
    
    
}



    /*var a = 2.1
    for(var b=0;b<=10;b++){
        var c = a * b
        console.log (a,'x',b,'=',c ) 
    }*/
    


       

        


            
     