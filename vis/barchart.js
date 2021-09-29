function loadbar() {        
    var myChart = echarts.init(document.getElementById('bar'));
  
    myChart.setOption({
        title: {
            text: 'Traffic count  in different areas in bristol',
            textStyle: {
                fontSize: 15
              },
        },

        toolbox: {
            feature: {
            dataZoom: {
            yAxisIndex: 'none'
           },
            restore: {},
            saveAsImage: {}
    }
    },
        dataZoom:[{
            type:'inside'},{
                type:'slider'
            }

        ],
        
        grid:{
            bottom:90
        },




        tooltip: {
            trigger: 'axis',// axis name
            axisPointer: {
            type: 'shadow',
            show: false
            }
            
        },
        legend: {
            data: ['Traffic Count'],
            right: "3%",
            top: "8%",
        },
        
        xAxis: {
            data: [],
            silent:false,
            splitLine:{
                show:false
            },
            splitArea:{
                show:false
            }
            
        },
        yAxis: {
            splitLine: { show: true },
            name: '',
            splitArea :{
                show: false
            }
        },
        series: [{
        
            name: 'Traffic Count',
            type: 'bar',
            large:true,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#333'
                        }
                    }
                }
            },
            data: []
        }]
    });


    myChart.showLoading();    

    var names = [];    
    var nums = [];    
    var locate = [];

    

    $.ajax({
        type: 'get',
        url: 'Dataset/summary.json',
        dataType: "json",        
        success: function (result) {
            //sucessful return the result，result is json the json object
            $.each(result.list, function (index, item) {
                names.push(item.Count_Device_ID);                        
                nums.push(item.Hourly_Flow);    
                locate.push(item.Description);
            });


            myChart.hideLoading();    
            myChart.setOption({       
                xAxis: [
                {
                    data: locate,
                    type:'category',
                    
                },
                {
                    data: names,
                    type:'category',
                }
                
            ],
                series: [{
                    name: 'Traffic Count',  
                    data: nums
                }
            
            
            ],
            });
        },
        error: function (errorMsg) {
            
            alert("Failed to lead the data!");
            myChart.hideLoading();
        }
    });
};

loadbar()