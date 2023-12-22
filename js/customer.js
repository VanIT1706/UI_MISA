$(document).ready(function () {
    //loadData();
    var customerJS = new Customer();
    customerJS.loadData();
})

class Customer{
    constructor() {

    }
    loadData() {
        $.each(data, function (idex, item) {
            var trHTML = $(`<tr>
                         <td>`+ item.employeeCode + `</td>
                         <td>`+ item.employeeName + `</td>
                         <td>`+ item.Email + `</td>
                         <td>`+ item.Address + `</td>
                         <td>`+ item.Mobile + `</td>
                            </tr>`);
            $('.grid tbody').append(trHTML);
        })
    }
    add() {

    }
    edit() {

    }
    delete() {

    }

}
var data = [
    {
        employeeCode : "NV001",
        employeeName : "Quang Văn",
        Email : "asdasd@gmail.com",
        Address : "Ben Tre",
        Mobile : "035242341"
    },
    {
        employeeCode : "NV002",
        employeeName : "Tran Quang",
        Email : "gadhiue@gmail.com",
        Address : "Đà Nẵng",
        Mobile : "05234234"
    },
    {
        employeeCode : "NV003",
        employeeName : "Cam Van",
        Email : "kokoaasd@gmail.com",
        Address : "HCM",
        Mobile : "08832424"
    },
    {
        employeeCode: "NV004",
        employeeName: "Quang Hung",
        Email: "kokoaasd@gmail.com",
        Address: "HCM",
        Mobile: "08832424"
    }
]