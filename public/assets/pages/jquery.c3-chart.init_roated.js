/**
* Theme: Ubold Dashboard
* Author: Coderthemes
* Chart c3 page
*/

!function($) {
    "use strict";

    var ChartC3 = function() {};

    ChartC3.prototype.init = function () {
               
        //roated chart
		
		var data1=['Individual Stock Age', 30, 200, 100, 400, 150, 50];		
		var data2=['Mean Stock Age', 50, 20, 10, 40, 15, 25];
		
        c3.generate({
            bindto: '#roated-chart',
            data: {
                columns: [
                data1,
                data2
                ],
                types: {
                'Individual Stock Age': 'bar'
                },
                colors: {
	                'Individual Stock Age': '#5fbeaa',
	                'Mean Stock Age': '#5d9cec'
	            },
            },
            axis: {
				rotated: true,
				x: {
				type: 'category',
				categories: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6']
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



