let urlApi = 'https://6536415ec620ba9358ed32c1.mockapi.io/users'
let qatorDiv = document.querySelector('.qator')


fetch(urlApi)
.then(res => res.json())
.then((res)=>{
    console.log(res);

    res.map((item,index) =>{
        let blockDiv = document.createElement('div')
        blockDiv.classList.add('block')

        blockDiv.innerHTML=`
        <p>Name: ${item.name}</p>
        <p>League: ${item.league}</p>
        <p>Total: ${item.total}</p>
        `
        qatorDiv.prepend(blockDiv)
    })
})

