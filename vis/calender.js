function sumcalendar(){
    var data =  Traffic_count
    var sum = 0
    var timeperiod =["2021/3/1 0:00", "2021/3/1 1:00","2021/3/1 2:00", "2021/3/1 3:00",
                     "2021/3/1 4:00", "2021/3/1 5:00","2021/3/1 6:00", "2021/3/1 7:00",
                     "2021/3/1 8:00", "2021/3/1 9:00","2021/3/1 10:00", "2021/3/1 11:00",
                     "2021/3/1 12:00", "2021/3/1 13:00","2021/3/1 14:00", "2021/3/1 15:00",
                     "2021/3/1 16:00", "2021/3/1 17:00","2021/3/1 18:00", "2021/3/1 19:00",
                     "2021/3/1 20:00", "2021/3/1 21:00","2021/3/1 22:00", "2021/3/1 23:00",
                     "2021/3/2 0:00", "2021/3/2 1:00","2021/3/2 2:00", "2021/3/2 3:00",
                     "2021/3/2 4:00", "2021/3/2 5:00","2021/3/2 6:00", "2021/3/2 7:00",
                     "2021/3/2 8:00", "2021/3/2 9:00","2021/3/2 10:00", "2021/3/2 11:00",
                     "2021/3/2 12:00", "2021/3/2 13:00","2021/3/2 14:00", "2021/3/2 15:00",
                     "2021/3/2 16:00", "2021/3/2 17:00","2021/3/2 18:00", "2021/3/2 19:00",
                     "2021/3/2 20:00", "2021/3/2 21:00","2021/3/2 22:00", "2021/3/2 23:00",
                     "2021/3/3 0:00", "2021/3/3 1:00","2021/3/3 2:00", "2021/3/3 3:00",
                     "2021/3/3 4:00", "2021/3/3 5:00","2021/3/3 6:00", "2021/3/3 7:00",
                     "2021/3/3 8:00", "2021/3/3 9:00","2021/3/3 10:00", "2021/3/3 11:00",
                     "2021/3/3 12:00", "2021/3/3 13:00","2021/3/3 14:00", "2021/3/3 15:00",
                     "2021/3/3 16:00", "2021/3/3 17:00","2021/3/3 18:00", "2021/3/3 19:00",
                     "2021/3/3 20:00", "2021/3/3 21:00","2021/3/3 22:00", "2021/3/3 23:00",
                     "2021/3/4 0:00", "2021/3/4 1:00","2021/3/4 2:00", "2021/3/4 3:00",
                     "2021/3/4 4:00", "2021/3/4 5:00","2021/3/4 6:00", "2021/3/4 7:00",
                     "2021/3/4 8:00", "2021/3/4 9:00","2021/3/4 10:00", "2021/3/4 11:00",
                     "2021/3/4 12:00", "2021/3/4 13:00","2021/3/4 14:00", "2021/3/4 15:00",
                     "2021/3/4 16:00", "2021/3/4 17:00","2021/3/4 18:00", "2021/3/4 19:00",
                     "2021/3/4 20:00", "2021/3/4 21:00","2021/3/4 22:00", "2021/3/4 23:00",
                     "2021/3/5 0:00", "2021/3/5 1:00","2021/3/2 2:00", "2021/3/2 3:00",
                     "2021/3/5 4:00", "2021/3/5 5:00","2021/3/2 6:00", "2021/3/2 7:00",
                     "2021/3/5 8:00", "2021/3/5 9:00","2021/3/2 10:00", "2021/3/2 11:00",
                     "2021/3/5 12:00", "2021/3/5 13:00","2021/3/2 14:00", "2021/3/2 15:00",
                     "2021/3/5 16:00", "2021/3/5 17:00","2021/3/2 18:00", "2021/3/2 19:00",
                     "2021/3/5 20:00", "2021/3/5 21:00","2021/3/2 22:00", "2021/3/2 23:00",
                     "2021/3/6 0:00", "2021/3/6 1:00","2021/3/6 2:00", "2021/3/6 3:00",
                     "2021/3/6 4:00", "2021/3/6 5:00","2021/3/6 6:00", "2021/3/6 7:00",
                     "2021/3/6 8:00", "2021/3/6 9:00","2021/3/6 10:00", "2021/3/6 11:00",
                     "2021/3/6 12:00", "2021/3/6 13:00","2021/3/6 14:00", "2021/3/6 15:00",
                     "2021/3/6 16:00", "2021/3/6 17:00","2021/3/6 18:00", "2021/3/6 19:00",
                     "2021/3/6 20:00", "2021/3/6 21:00","2021/3/6 22:00", "2021/3/6 23:00",
                     "2021/3/7 0:00", "2021/3/7 1:00","2021/3/7 2:00", "2021/3/7 3:00",
                     "2021/3/7 4:00", "2021/3/7 5:00","2021/3/7 6:00", "2021/3/7 7:00",
                     "2021/3/7 8:00", "2021/3/7 9:00","2021/3/7 10:00", "2021/3/7 11:00",
                     "2021/3/7 12:00", "2021/3/7 13:00","2021/3/7 14:00", "2021/3/7 15:00",
                     "2021/3/7 16:00", "2021/3/7 17:00","2021/3/7 18:00", "2021/3/7 19:00",
                     "2021/3/7 20:00", "2021/3/7 21:00","2021/3/7 22:00", "2021/3/7 23:00",                ]
    
    var dataVScounts = []
    
    function sumtime(array1,array2){
        for (var t = 0; t < array1.length; t++){
            for (var i = 0; i < array2.length; i++){
            if (array2[i]["Date Time"] == timeperiod[t] ) 
            {
            sum += parseInt(array2[i]["Hourly Flow"]);
            }
    
        } 
        dataVScounts.push(sum);
        sum = 0
    
        }
        return dataVScounts;
    }
    //////////////////////////////////////////////////////
    sumtime(timeperiod, data)
    
            var chartDom = document.getElementById('calendar2');
            var myChart = echarts.init(chartDom);
            var option;
    
            var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
                         '7a', '8a', '9a','10a','11a',
                         '12p', '1p', '2p', '3p', '4p', '5p',
                         '6p', '7p', '8p', '9p', '10p', '11p'];
    
            var day = ['Saturday', 'Friday', 'Thursday',
                        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
    
            function makeinput(){
                inpu = []
                for(var d = 0; d < 7; d++)
                {
                    for(var i = 0; i < 24; i++ ){
                    days =[d, i, dataVScounts[d *24 + i]];
                    inpu.push(days)
                }
                
            }return inpu
        }
            
    
    
         input = makeinput()
        
    
                input = input.map(function (item) {
                return [item[1], item[0], item[2] || '-'];
            });
    
            option = {
                title: {
                    text: 'Calendar Heat map',
                    textStyle: {
                        fontSize: 15
                      },
                },
    
            tooltip: {
                position: 'top'
            },
            grid: {
                height: '50%',
                top: '10%'
            },
            xAxis: {
                type: 'category',
                data: hours,
            splitArea: {
                show: true
            }
        },
            yAxis: {
                type: 'category',
                data: day,
                splitArea: {
                    show: true
            }
        },
            visualMap: {
                min: 0,
                max: 195784,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%'
        },
        series: [{
            name: 'Traffic Count',
            type: 'heatmap',
            data: input,
            label: {
                show: true
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    option && myChart.setOption(option);
}


function emptycalendar(){
    var chartDom = document.getElementById('calendar');
    var myChart = echarts.init(chartDom);
    var option;

var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];


option = {
    title: {
        text: 'Calendar Heat map of the device you clicked',
        textStyle: {
            fontSize: 15
          },
    },
    tooltip: {
        position: 'top'
    },
    grid: {
        height: '50%',
        top: '10%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 0,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
    },
    series: [{
        name: 'Traffic Counts',
        type: 'heatmap',
        data: [],
        label: {
            show: true
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

option && myChart.setOption(option);

}

emptycalendar()

