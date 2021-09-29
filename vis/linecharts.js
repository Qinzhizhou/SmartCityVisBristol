function linechartMaker() {
    var myChart = echarts.init(document.getElementById('line'));
    myChart.setOption({
        title: {
            text: 'Traffic Count variation in Bristol',
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
            },

        ],
        
        grid:{
            bottom:90
        },

        tooltip: {
            trigger: 'axis',// axis name
            axisPointer: {
            type: 'shadow'
            }
        },
        legend: {
            data: ['Traffic Count'],
            right: "3%",
            top: "10%"

            
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
            type: 'line',
            large:true,
            smooth: true,
            symbol: 'none',
            areaStyle: {},
            data: []
        }]
    });


    myChart.showLoading();    


    var datetime = [];    
    var counts = [];    
    

    $.ajax({
        type: 'get',
        url: 'Dataset/TimeVScount.json',
        dataType: "json",        
        success: function (result) {
            
            $.each(result.list, function (index, item) {
                datetime.push(item.Date_Time);                      
                counts.push(item.Hourly_Flow);    
            });


            myChart.hideLoading();   
            myChart.setOption({        
                xAxis: {
                    data: datetime,
                },
                series: [{
                    name: 'Traffic Count',  
                    data: counts,
                }]
            });
        },
        error: function (errorMsg) {
            alert(" Failed to load the data !");
            myChart.hideLoading();
        }
    });
};

linechartMaker() 