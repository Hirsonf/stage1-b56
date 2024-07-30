const xhr = new XMLHttpRequest()
// http request => suatu cara untuk melakukan proses ke server / API 
// POST => creat data (C= creat data)
// GET => mendapatkan data (R = read)
// PATCH / PUT => update data(U = update)
// DELLETE => delete (D = delete)

xhr.open("GET", "https://api.npoint.io/27fe843b4402d3dfc780",true)

xhr.onerror = () => {
    console.log("network error")
}
xhr.onload = () => {
    console.log(xhr.responseText)
}
xhr.send()