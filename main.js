let malumotlar
$.ajax("http://myjson.dit.upm.es/api/bins/emgj", {
    type: "GET",
    success: function (ress) {
        console.log(ress)
        render(ress)
        malumotlar=ress
    },
    error: function (err) {
        console.log(err)
    }
})

function render(data) {
    $(".row1").html("")
    data.map(item =>{
        let col=`
        <div class="col-4">
                <div class="card m-3 p-3 text-center box">
                    <div class="heart">
                        <p><i class="fa-solid fa-heart"></i></p>
                    </div>
                    <img src="${item.img}" alt="">
                    <p>${item.name}</p>
                    <p>${item.cost} $</p>
                    <button class="btn btn-primary buy">Sotib olish</button>
                </div>
            </div>
        `
        $(".row1").append(col)
    })
}

let searchResult=""
$(".search").on("input", () => {
    searchResult=malumotlar.filter(item =>{
        return item.name.toLowerCase().includes($(".search").val().toLowerCase())
    })
    render(searchResult)
    })