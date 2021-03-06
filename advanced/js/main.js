
var list = [
    {"desc":"rice","amount":"1","value":"5.40"},
    {"desc":"beer","amount":"12","value":"1.99"},
    {"desc":"meat","amount":"1","value":"15.00"}
];

//function that make's acount value ena amount
function getTotal(list){
    var total = 0;
    for(var key in list){
        total += list[key].value * list[key].amount;
    }
    return total;
}

//fnction that put data in tables
function  setList(list) {
    var table = '<thead>\n' +
        '        <tr>\n' +
        '            <td>Description</td>\n' +
        '            <td>Amount</td>\n' +
        '            <td>Value</td>\n' +
        '            <td>Action</td>\n' +
        '        </tr>\n' +
        '        </thead>\n' +
        '        <tbody>';

        for (var key in list){
            table += '<tr><td>'+ formatDesc(list[key].desc) +'</td><td>'+ list[key].amount +'</td><td>'+ formatValue(list[key].value) +'</td><td>Edit | Delete</td></td></tr>'
        }
        table += '</tbody>';
        document.getElementById('listTable').innerHTML = table;
}

//function that format description
function formatDesc(desc){
  var str = desc.toLowerCase();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}

//function that format value
function formatValue(value){
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".",",");
    str = "R$ " + str;
    return str;
}


function addData(){
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({"desc":desc, "amount":amount, "value":value});
    setList(list);
}
setList(list);
console.log(getTotal(list));