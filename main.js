//global  
var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var siteArr;


(function () {
    if (localStorage.getItem('siteStorage') == null)
        siteArr = []
    else {
        siteArr = JSON.parse(localStorage.getItem('siteStorage'));
        display()
    }
}
)()

function submit() {
    var site = {
        sName: siteName.value,
        sUrl: siteUrl.value
    };
    siteArr.push(site);
    localStorage.setItem('siteStorage', JSON.stringify(siteArr));
    display();
    clear();
   
}

function clear() {
    siteName.value = "";
    siteUrl.value = "";
}

function display() {
    var box = ``
    for (var i = 0; i < siteArr.length; i++) {
        box += `
        <tr>
        <td>${i + 1}</td>
        <td>${siteArr[i].sName}</td>
        <td><button class="btn btn-danger" onclick="delet(${i})">delete</button></td>
        <td><a href="${siteArr[i].sUrl.startsWith('https://') ? siteArr[i].sUrl : 'https://' +  siteArr[i].sUrl}"><button class="btn btn-primary shadow" onclick="visit(${i})">visit</button><a/></td>
    </tr>
        `
    }
    document.getElementById('siteTable').innerHTML = box;
}

function delet(index) {
    console.log(index);
    siteArr.splice(index, 1);
    localStorage.setItem('siteStorage', JSON.stringify(siteArr));
    display();
} 




