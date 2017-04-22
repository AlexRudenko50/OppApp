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



