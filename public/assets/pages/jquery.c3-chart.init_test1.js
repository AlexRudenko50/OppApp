/**
* Theme: Ubold Dashboard
* Author: Coderthemes
* Chart c3 page
*/

!function($) {
    "use strict";

    var ChartC3 = function() {};
	
    ChartC3.prototype.init = function () {
        
		
        //Pie Chart
		c3.generate({
            bindto: '#combine-chart',
            data: {
                columns: [
                    ['data1', 30, 20, 50, 40, 60, 50],
                    ['data2', 200, 130, 90, 240, 130, 220],
                    ['data3', 300, 200, 160, 400, 250, 250],
                    ['data4', 200, 130, 90, 240, 130, 220],
                    ['data5', 130, 120, 150, 140, 160, 150]
                ],
                types: {
                    data1: 'bar',
                    data2: 'bar',
                    data3: 'spline',
                    data4: 'line',
                    data5: 'bar'
                },
                colors: {
                    data1: '#dcdcdc',
                    data2: '#5d9cec',
                    data3: '#36404a',
                    data4: '#fb6d9d',
                    data5: '#5fbeaa'
                },
                groups: [
                    ['data1','data2']
                ]
            },
            axis: {
                x: {
                    type: 'categorized'
                }
            }
        });
		c3.generate({
            bindto: '#combine-chart1',
            data: {
                columns: [
                    ['data1', 30, 20, 50, 40, 60, 50],
                    ['data2', 200, 130, 90, 240, 130, 220],
                    ['data3', 300, 200, 160, 400, 250, 250],
                    ['data4', 200, 130, 90, 240, 130, 220],
                    ['data5', 130, 120, 150, 140, 160, 150]
                ],
                types: {
                    data1: 'bar',
                    data2: 'bar',
                    data3: 'spline',
                    data4: 'line',
                    data5: 'bar'
                },
                colors: {
                    data1: '#dcdcdc',
                    data2: '#5d9cec',
                    data3: '#36404a',
                    data4: '#fb6d9d',
                    data5: '#5fbeaa'
                },
                groups: [
                    ['data1','data2']
                ]
            },
            axis: {
                x: {
                    type: 'categorized'
                }
            }
        });

        c3.generate({
             bindto: '#pie-chart',
            data: {
                columns: [
                    [sales, a],
                    [back, b],
                    [mann, c]
                ],
                type : 'pie'
            },
            color: {
            	pattern: [ "#5d9cec", "#5fbeaa","#f4f8fb"]
            },
            pie: {
		        label: {
		          show: false
		        }
		    }
        });      
        

    },
    $.ChartC3 = new ChartC3, $.ChartC3.Constructor = ChartC3

}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.ChartC3.init()
}(window.jQuery);



