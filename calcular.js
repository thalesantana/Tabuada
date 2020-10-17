function calcular(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    
    if (txtnum.value.length == 0) {
        window.alert('Insira um número, por favor')
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



  


       

        


            
     