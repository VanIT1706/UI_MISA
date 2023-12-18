$(document).ready(function () {
    loadData();
})

function loadData() {
    $.each(data, function (idex, item) {
        var trHTML = $(`<tr>
                         <td>`+ item.employeeCode + `</td>
                         <td>`+ item.employeeNam + `</td>
                         <td>`+ item.Email + `</td>
                         <td>`+ item.Address + `</td>
                         <td>`+ item.Mobile +`</td>
                            </tr>`);
        $('.grid tbody').append(trHTML);
    })
}
function test2{

}
var data = [
    {
        employeeCode : "NV001",
        employeeNam : "Quang Văn",
        Email : "asdasd@gmail.com",
        Address : "Ben Tre",
        Mobile : "035242341"
    },
    {
        employeeCode : "NV:002",
        employeeNam : "Quang Văn 1",
        Email : "gadhiue@gmail.com",
        Address : "Đà Nẵng",
        Mobile : "05234234"
    },
    {
        employeeCode : "NV003",
        employeeNam : "Quang Văn 2",
        Email : "kokoaasd@gmail.com",
        Address : "HCM",
        Mobile : "08832424"
    }
]