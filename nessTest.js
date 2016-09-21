
document.getElementById("add").addEventListener("click", addRow);
function addRow() {
      
    var select = document.getElementById("select");     
    var make   = document.getElementById("make");
    var model  = document.getElementById("model");

    var myDynamicTable = document.getElementById("myDynamicTable");

    var rowCount = myDynamicTable.rows.length;
    var row = myDynamicTable.insertRow(rowCount);

    row.insertCell(0).innerHTML= select.value;
    row.insertCell(1).innerHTML= make.value;
    row.insertCell(2).innerHTML= model.value;
    
    document.getElementById("make").value="";
    document.getElementById("model").value="";
}

document.getElementById("toJson").addEventListener("click", toJson);
function toJson(){
    var cols = ["Type","Make","Model"];
    var tbl = $('table#myDynamicTable tr').map(function(index) {
            var row={};
            $(this).find('td').each(function(index){
            var rowName=cols[index];
            row[rowName]=$(this).text();
            })
            return row;
            }).get();
document.getElementById("view").innerHTML=JSON.stringify(tbl);
console.log(JSON.stringify(tbl));
return JSON.stringify(tbl);
}


document.getElementById("search").addEventListener("change", search);
function search(){

    var val = this.value.trim();
        val = val.replace(/\s+/g, '');
    var input, filter, table, tr, td, i;

         if(val.length % 3 == 0) { 
                filter = val.toUpperCase();
                table = document.getElementById("myDynamicTable");
                tr = table.getElementsByTagName("tr");

                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td");
                      for (j = 0; j < td.length; j++){
                           if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                           tr[i].style.backgroundColor = "yellow";
                          } else {
                           //     tr[i].style.display = "none";
                          }
                        } 

                }
         }
}