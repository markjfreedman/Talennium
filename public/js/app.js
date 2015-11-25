$(document).ready(function () {
//JSON data 
 mydata = new kendo.data.DataSource({
    transport: {
      read: {
         url: '/data.json', 
         dataType: "json"
      }
    },
    columns:{
        data: "DeptName"
    }
  });

$('#grid').kendoGrid({
scrollable: true,
sortable: true,
pageable: true,
selectable: "row",
filterable: true

, dataSource: { data: mydata, pageSize: 10 } //binding JSON data with grid

});
});