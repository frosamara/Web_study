function send(){
    let name = document.getElementById("name").value  //переменная name
    let message = document.getElementById("message").value //переменная message
   document.getElementById("message").value = " "  //если сообщение не вводится
    if (message == ''){
        document.getElementById("error").innerText = 'Ошибка, введите текст.'
        return
    }
    document.getElementById("error").innerText = ``
    document.getElementById("output").innerHTML = `<b>${name}: </b>${message}`

    if (name == ''){
        // document.getElementById("guest").innerText =``
        document.getElementById("output").innerHTML = `<b>Гость, привет </b>`
    }
}

// либо сделать двумя функциями
//function send1(){
//    let message = document.getElementById("name").value
//    document.getElementById("name").value = " "
//     if (message == ''){
//         document.getElementById("error").innerText = 'Ошибка, введите текст.'
//         return
//     }
//     document.getElementById("error").innerText = ``
//     document.getElementById("output").innerText = name
    
// }
//function send2(){
//    let message = document.getElementById("message").value
//    document.getElementById("message").value = " "
//     if (message == ''){
//         document.getElementById("error").innerText = 'Ошибка, введите текст.'
//         return
//     }
//     document.getElementById("error").innerText = ``
//     document.getElementById("output").innerText = message
    
// }

