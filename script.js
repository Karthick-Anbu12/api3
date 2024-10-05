async function main() {
    try {
        let element = await fetch("https://api.nobelprize.org/2.1/laureates")
        let data = await element.json();
        console.log(data)
        let title = document.createElement('div')
        title.className = 'title d-flex bg-dark text-light justify-content-center fs-1 p-2'
        title.innerText = "Nobel Prize Winners"
        let info = document.createElement('div')
        info.className = 'container mt-5 d-flex flex-wrap'
        data.laureates.map((person,index) => {
            box = document.createElement('div')
            box.className = 'box m-2'
            box.innerHTML = `<div class="card bg-dark text-light" style="width: 18rem height:18rem;">
  <div class="card-body">
    <h5 class="card-title">${person.fullName.en}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${person.nobelPrizes[0].category.en}</h6>
    <p class="card-text"> Quote: ${person.nobelPrizes[0].motivation.en}</p>
    <p>Prize Amount:${person.nobelPrizes[0].prizeAmount}</p>
 
  </div>
</div>`
            info.appendChild(box)
        })
        document.body.appendChild(title)
        document.body.appendChild(info)
    } catch (error) {
        console.log(error)
    }

}
main()