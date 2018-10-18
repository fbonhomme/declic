
$("#btn1").on('click', (e) =>{
    e.preventDefault()
    $.get("./parole.html",(data) =>{
        const sortie = $("#sortie")
        sortie.html(data);
        })
})


$("#btn2").on('click', (e) =>{
    e.preventDefault()
    $.get("./NosYeusSontSurToi.html",(data) =>{
        const sortie = $("#sortie")
        sortie.html(data);
        })
 })

$("#btn3").on('click', (e) =>{
    e.preventDefault()
    $.get("./CeNomSiMerveilleux.html",(data) =>{
        const sortie = $("#sortie")
        sortie.html(data);
        })  
    })   
  


