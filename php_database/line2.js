var  myChart = echarts.init(document.getElementById('line2'));
              var time = [], value = [];
              function arrTest(){
                //这个功能块的作用就是读取json数据。
                $.ajax({
                  type:"get",//请求服务器载入数据
                  async:false,//异步属性
                  url:"process.php",
                  data:{},
                  dataType:"json",
                  success:function(result){
                    if (result) {
                      for (var i = 0; i < result.length; i++) {
                          value.push(result[i].HF);
                          time.push(result[i].Date_Time);
                           //这边更新字段，可以只写你需要展示的字段。 
                      }
                    }
                  }
                })
                return time, value;
              }
              arrTest();


              var  option = {
                title: {
                    text: 'Traffic Count varation for a device in bristol',
                    left: 100
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
                    data: ['Traffic Count']
                },
                xAxis: {
                    data: time,
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
                    areaStyle: {
                        opacity: 0.8,
                        color: 'rgba(255, 0, 135)'

                        
                    },
                    data: value
                }]
            };

                    myChart.setOption(option, true);