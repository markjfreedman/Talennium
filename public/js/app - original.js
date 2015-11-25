console.log('test');
    
    $('#chart').kendoChart({
      
    title: {  text: 'Kendo Chart Example' },
    categoryAxis: { categories: [2000,2001,2002,2003],},
  	series: [{ 
      type: 'line',
      data:[200,450,300,125],
      name: 'Example series'
    }]
  
  
  
});
