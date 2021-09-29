function linechartMaker() {
    var myChart = echarts.init(document.getElementById('linechart2'));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
        title: {
            text: 'Traffic Count variation in Bristol',
            left: '5%',
            top: '3%',
            textStyle: {
                fontSize: 20
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


    myChart.showLoading();    //数据加载完之前先显示一段简单的loading动画


    var datetime = [];    //类别数组（实际用来盛放X轴坐标值）
    var counts = [];    //销量数组（实际用来盛放Y坐标值）

    

    $.ajax({
        type: 'get',
        url: 'Dataset\Traffic_counts.json',//请求数据的地址
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            $.each(result, function (index, item) {
                datetime.push($sum(item.Date_Time));    //挨个取出类别并填入类别数组                    
                counts.push(item.Hourly_Flow);    //挨个取出销量并填入销量数组
            });


            myChart.hideLoading();    //隐藏加载动画
            myChart.setOption({        //加载数据图表
                xAxis: {
                    data: datetime,
                },
                series: [{
                    // 根据名字对应到相应的系列
                    name: 'Traffic Count',  //显示在上部的标题
                    data: counts,
                }]
            });
        },
        error: function (errorMsg) {
            //请求失败时执行该函数
            alert(" Failed to load the data !");
            myChart.hideLoading();
        }
    });
};
linechartMaker();
        

