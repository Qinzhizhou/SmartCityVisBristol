var selected_devices = [];
var selected_value = [];
var stack = 0; 
var traffic_counts = [];
var date_time = [];




// Make empty graph 
function selectchartMaker() {
  var myChart = echarts.init(document.getElementById('bar'));
    var option;
        option = {
            title: {
                text: 'Double Click or select the markers to select data to compare',
                textStyle: {
                    fontSize: 15
                  },
            },
        xAxis: {
        type: 'category',
           data: selected_devices
        },
          yAxis: {
        type: 'value'
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
        series: [{
        data: selected_value,
        type: 'bar'
            }]
            };
    
        option && myChart.setOption(option);
  }

  selectchartMaker();

// make empty line graph
function linechartMaker() {
  var myChart = echarts.init(document.getElementById('line'));
    var option;
        option = {
            title: {
                text: 'Double Click or select the markers to  add lines to compare(max 5)',
                textStyle: {
                    fontSize: 15
                  },
            },
        xAxis: {
        type: 'category',
           data: selected_devices
        },
          yAxis: {
        type: 'value'
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
        series: [{
        data: selected_value,
        type: 'bar'
            }]
            };
    
        option && myChart.setOption(option);
  }

  linechartMaker();
// Make empty heatmap
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
        text: 'Calendar Heat map of the device you selected',
        textStyle: {
            fontSize: 15
          },
    },
    tooltip: {
        position: 'top'
    },
    tooltip: {
        trigger: 'axis',// axis name
        axisPointer: {
        type: 'shadow',
        show: false
            }
    
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


// Fill data in bar by click
function putbarchart(){
  var myChart = echarts.init(document.getElementById('bar'));
  
			var option;
				option = {
				xAxis: {
				type: 'category',
				   data: selected_devices
				},
				  yAxis: {
				type: 'value'
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
				series: [{
				data: selected_value,
				type: 'bar'
					}]
					};
			
				option && myChart.setOption(option);
}

// put lines by click

function putlinechart(){
    var myChart2 = echarts.init(document.getElementById('line'));
    var option;
        option = {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            title: {
                text: 'Double Click or select the markers to  add lines to compare(max 5)',
                textStyle: {
                    fontSize: 15
                  },
            },



        xAxis: {
           data: date_time.slice(0, 168),
           type: 'category',
            boundaryGap: false,
        },
          yAxis: {
        type: 'value'
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
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
        series: [
            {
            name: 'Line 1  Devices: ' + area1 + " " + "Traffic Counts: ",
            type: 'line',
            stack: 'Traffic Flow',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(128, 255, 165)'
                }, {
                    offset: 1,
                    color: 'rgba(1, 191, 236)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
                data: traffic_counts.slice(0,168),
                type: 'line'
              },


              {
                name: 'Line 2  Devices: ' + area2 + " " + "Traffic Counts: ",
                type: 'line',
                stack: 'Traffic Flow',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(128, 255, 165)'
                    }, {
                        offset: 1,
                        color: 'rgba(77, 119, 255)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                    data: traffic_counts.slice(168, 168 * 2),
                    type: 'line'
                  }, 

                  {
                    name: 'Line 3 Devices: ' + area3 + " " + "Traffic Counts: ",
                    type: 'line',
                    stack: 'Traffic Flow',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(55, 162, 255)'
                        }, {
                            offset: 1,
                            color: 'rgba(116, 21, 219)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data:  traffic_counts.slice(168*2, 168 * 3),
                },

                {
                  name: 'Line 4 Devices: ' + area4 + " " + "Traffic Counts: ",
                  type: 'line',
                  stack: 'Traffic Flow',
                  smooth: true,
                  lineStyle: {
                      width: 0
                  },
                  showSymbol: false,
                  areaStyle: {
                      opacity: 0.8,
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(255, 0, 135)'
                      }, {
                          offset: 1,
                          color: 'rgba(135, 0, 157)'
                      }])
                  },
                  emphasis: {
                      focus: 'series'
                  },
                  data:  traffic_counts.slice(168*3, 168 * 4)
              },

              {
                name: 'Line 5  Devices: ' + area5 + " " + "Traffic Counts: ",
                type: 'line',
                stack: 'Traffic Flow',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 191, 0)'
                    }, {
                        offset: 1,
                        color: 'rgba(224, 62, 76)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                    },
                    data:  traffic_counts.slice(168*4, 168 * 5)
                    },
                ]
            };
        option && myChart2.setOption(option);

}

// Heatmap put
function putheatmap(){
    var arr = traffic_counts.slice(-168);
    var max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    }, 0);
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
            text: 'Calendar Heat map of the device you selected' + "  Devices:" + areas[times -1],
            textStyle: {
            fontSize: 15
                },
            },
            tooltip: {
                trigger: 'axis',// axis name
                axisPointer: {
                type: 'shadow',
                show: false
                    }
            
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
            max: max,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%'
        },
        series: [{
            name: 'Traffic Counts',
            type: 'heatmap',
            data: inputselect,
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



function selectareasbar(){
    var myChart = echarts.init(document.getElementById('bar'));
			var option;
				option = {
				xAxis: {
				type: 'category',
				   data: selected_devices 
				},
				  yAxis: {
				type: 'value'
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
				series: [{
                    
				    data: selected_value,
				    type: 'bar',
					}]
					};
			
				option && myChart.setOption(option);

}

function linearea(){
    var myChart2 = echarts.init(document.getElementById('linechart'));
    var option;
        option = {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
            title: {
                text: 'DoubleClick the marker to  add lines to compare(max 5)',
                textStyle: {
                    fontSize: 15
                  },
            },
        xAxis: {
           data: date_time.slice(0, 168),
           type: 'category',
            boundaryGap: false,
        },
          yAxis: {
        type: 'value'
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
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
        series: [
            {
            name: 'Line 1',
            type: 'line',
            stack: 'Traffic Flow',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(128, 255, 165)'
                }, {
                    offset: 1,
                    color: 'rgba(1, 191, 236)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
                data: traffic_counts.slice(0,168),
                type: 'line'
              },


              {
                name: 'Line 2',
                type: 'line',
                stack: 'Traffic Flow',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(128, 255, 165)'
                    }, {
                        offset: 1,
                        color: 'rgba(77, 119, 255)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                    data: traffic_counts.slice(168, 168 * 2),
                    type: 'line'
                  }, 

                  {
                    name: 'Line 3',
                    type: 'line',
                    stack: 'Traffic Flow',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(55, 162, 255)'
                        }, {
                            offset: 1,
                            color: 'rgba(116, 21, 219)'
                        }])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data:  traffic_counts.slice(168*2, 168 * 3),
                },

                {
                  name: 'Line 4',
                  type: 'line',
                  stack: 'Traffic Flow',
                  smooth: true,
                  lineStyle: {
                      width: 0
                  },
                  showSymbol: false,
                  areaStyle: {
                      opacity: 0.8,
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(255, 0, 135)'
                      }, {
                          offset: 1,
                          color: 'rgba(135, 0, 157)'
                      }])
                  },
                  emphasis: {
                      focus: 'series'
                  },
                  data:  traffic_counts.slice(168*3, 168 * 4)
              },

              {
                name: 'Line 5',
                type: 'line',
                stack: 'Traffic Flow',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 191, 0)'
                    }, {
                        offset: 1,
                        color: 'rgba(224, 62, 76)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data:  traffic_counts.slice(168*4, 168 * 5)
            },
            
        
            ]
            };
          
    
        option && myChart2.setOption(option);

}


