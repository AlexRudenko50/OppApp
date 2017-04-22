/**
* Theme: Ubold Dashboard
* Author: Coderthemes
* Chart c3 page
*/

!function($) {

    "use strict";

    var ChartC3 = function() {};
	
    ChartC3.prototype.init = function () {
        
		//overall stock pie chart
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
            	pattern: [ "#227cb8", "#ead85a","#b61245"]
            },
            pie: {
		        label: {
		          show: false
		        }
		    }
        });   

        //Donut Chart
		//var stockrate=98;
		//var stockrate_rest=100-hitrate;
		c3.generate({
             bindto: '#donut-chart-stock',
            data: {
                columns: [
                    ['Stock Accuracy', stockrate],
                    ['', stockrate_rest]
                ],
                type : 'donut'
            },
            donut: {
                title: stockrate+"%",
                width: 15,
				label: { 
					show:false
				}
            },
            color: {
            	pattern: ["#35a35b","#cccccc"]
            }
        });	
		
		//var onfloorrate=89;
		//var onfloorrate_rest=100-onfloorrate;
		c3.generate({
             bindto: '#donut-chart-infloor',
            data: {
                columns: [
                    ['On-floor-Availability', onfloorrate],
                    ['', onfloorrate_rest]
                ],
                type : 'donut'
            },
            donut: {
                title: onfloorrate+"%",
                width: 15,
				label: { 
					show:false
				}
            },
            color: {
            	pattern: ["#35a35b","#cccccc"]
            }
        });	
		
		//var inboundrate=96.27;
		//var inboundrate_rest=100-inboundrate;
        c3.generate({
             bindto: '#donut-chart-inbound',
            data: {
                columns: [
                    ['Inbound Accurcy', inboundrate],
                    ['', inboundrate_rest]
                ],
                type : 'donut'
            },
            donut: {
                title: inboundrate+"%",
                width: 15,
				label: { 
					show:false
				}
            },
            color: {
            	pattern: ["#35a35b","#cccccc"]
            }
        });	

		//var hitrate=86.7;
		//var hitrate_rest=100-hitrate;
		c3.generate({
             bindto: '#donut-chart-hitrate',
            data: {
                columns: [
                    ['Hit rate', hitrate],
                    ['', hitrate_rest]
                ],
                type : 'donut'
            },
            donut: {
                title: hitrate+"%",
                width: 15,
				label: { 
					show:false
				}
            },
            color: {
            	pattern: ["#35a35b","#cccccc"]
            }
        });	
		
		//stock by division
		
		//var stock_data1=['Footwear',  150, 471, 8];
		//var stock_data2=['Apparel', 2075, 5729, 19];
		//var stock_data3=['Accessories',  210, 521, 12];
        c3.generate({
            bindto: '#combine-chart1',
            data: {
                columns: [				
                    stock_data1,
					stock_data2,
                    stock_data3,                    
                ],
                types: {
                    'Footwear': 'bar',
                    'Apparel': 'bar',
                    'Accessories': 'bar',
                   
                },
                colors: {
                    'Footwear': '#c55841',
                    'Apparel': '#227cb8',
                    'Accessories': '#d8a651'
                   
                },
                groups: [
                    ['Footwear','Apparel','Accessories']
                ],
				order:null
            },
			tooltip: {
				show: false
				 // Default true
			},
            axis: {
                x: {
                    type: 'category',
					categories: [ 'Back Room', 'Sales Floor','Shopping Window']
                }
            }
        });
		
		
		//stock by gender
		//var gender_data1=['man',  739,2621,  14];
		//var gender_data2=['woman',  1431,3462, 24];
		//var gender_data3=['kids',  125,341,  1];
		//var gender_data4=['unisex', 140,297,  0];
		c3.generate({
            bindto: '#combine-chart',
            data: {
                columns: [
				
                    gender_data1,
					gender_data2,
					gender_data3,
					gender_data4
                    
                ],
                types: {
                    'man': 'bar',
                    'woman': 'bar',
                    'kids': 'bar',
                   'unisex': 'bar',
                },
                colors: {
                    'man':'#35a35b' ,
                    'woman': '#c55841',
                    'kids': '#ead85a',
					'unisex': '#003456'
                   
                },
                groups: [
                    ['man','woman','kids','unisex']
                ],
				order:null
            },
			tooltip: {
				show: false
				 // Default true
			},
            axis: {
                x: {
                    type: 'category',
					categories: ['Back Room', 'Sales Floor', 'Shopping Window']
                }
            }
        });
		
				//optional
		//var optional_data1=['InBound',250,351,555,690,342,295,107];
		//var optional_data2=['OutBound',5,12,55,74,99,124,149];
		//var optional_data3=['Sales',190,224,495,237,401,120,297];
		//var optional_data4=['Returns',0,2,2,3,10,5,3];
		//var optional_x_axis=['1/19/2017','1/20/2017','1/21/2017','1/22/2017','1/23/2017','1/24/2017','1/25/2017'];
		c3.generate({
            bindto: '#combine-chart_opotional',
            data: {
                columns: [
				
                    optional_data1,
					optional_data2,
					optional_data3,
					optional_data4
                    
                ],
                types: {
                    'InBound': 'bar',
                    'OutBound': 'bar',
                    'Sales': 'bar',
                   'Returns': 'bar',
                },
                colors: {
                    'InBound': '#003456',
                    'OutBound': '#227cb8',
                    'Sales': '#d8a651',
					'Returns': '#ead85a'
                   
                },
                groups: [
                    ['InBound','OutBound','Sales','Returns']
                ],
				order:null
            },
			tooltip: {
				show: false
				 // Default true
			},
            axis: {
                x: {
                    type: 'category',
					categories: optional_x_axis
                }
            }
        });
		
	
		//Number of store visitors (integer) on a particular day
		//var store_data1=['Number of visitors', 30, 200, 100, 400, 150, 250];
		//var store_x_axis=[1, 2, 3,4,5,6];
		
		//var store_data11=['Number of visitors',413,399,1128,379,898,145,549];
		//var store_x_axis1=['1/19/2017','1/20/2017','1/21/2017','1/22/2017','1/23/2017','1/24/2017','1/25/2017'];
        c3.generate({
             bindto: '#line-regions',
            data: {
                columns: [
		            store_data11,
		        ],
		        
		        colors: {
	                'Number of visitors': '#b61245',
	                
	            },
            },
			tooltip: {
				show: false
				 // Default true
			},
			zoom:{
				enabled: true
			},
			axis: {
                x: {
                    type: 'category',
					categories: store_x_axis1,
					tick:{
						count:5
					}
                }
            }
            
        });
		
		//Number of items being brought into fitting rooms on a particular day
		
		//var fitting_data1=['Number of Items',209,514,592,921,282,138,513];
		//var fitting_x_axis=['1/19/2017','1/20/2017','1/21/2017','1/22/2017','1/23/2017','1/24/2017','1/25/2017'];
        c3.generate({
             bindto: '#line-regions1',
            data: {
                columns: [
		            fitting_data1
		            
		        ],
		        colors: {
	                'Number of Items': '#003456'
	            },
            },
			zoom:{
				enabled: true
			},
			tooltip: {
				show: false
				 // Default true
			},
			axis: {
                x: {
                    type: 'category',
					categories: fitting_x_axis,
					tick:{
						count:5
					}
                }
            }
            
        });
		
		//percentage of consumers that actually bought something
		//var consumer_data1=['percentage of consumers',23.02,33.02,25.81,36.78,26.27,48.68,31.82];
		//var consumer_x_axis=['1/19/2017','1/20/2017','1/21/2017','1/22/2017','1/23/2017','1/24/2017','1/25/2017'];
        c3.generate({
             bindto: '#line-regions2',
            data: {
                columns: [
		            consumer_data1
		            
		        ],
		        colors: {
	                'percentage of consumers': '#35a35b'
	            },
            },
			tooltip: {
				show: false
				 // Default true
			},
			zoom:{
				enabled: true
			},
			axis: {
                x: {
                    type: 'category',
					categories: consumer_x_axis,
					tick:{
						count:5
					}
                }
            }
            
        });
		
		//percentage of items that have been brought into the fitting rooms and then have been sold0
 		//var sold_data1=['percentage of items', 26.00, 33.00, 20.00, 10.00, 0.00, 15.00,18.00];
		//var sold_x_axis=['1/19/2017','1/20/2017','1/21/2017','1/22/2017','1/23/2017','1/24/2017','1/25/2017'];
        c3.generate({
             bindto: '#line-regions3',
            data: {
                columns: [
		            sold_data1
		            
		        ],
		        colors: {
	                'percentage of items': '#c55841'
	            },
            },
			tooltip: {
				show: false
				 // Default true
			},
			zoom:{
				enabled: true
			},
			
			axis: {
                x: {
                    type: 'category',
					categories: sold_x_axis,
					tick:{
						count:5
					}
                }
            }
            
        });
        
		//stock age chart
		//var stock_age=['number of Items',2,2,18,1,1,4,2,460,910,1360,1837,4598];
		//var stock_age_x_axis=['12week', '11week', '10week', '9week', '8week', '7week','6week', '5week', '4week', '3week', '2week', '1week'];
		var chart = c3.generate({
			bindto: '#chart',		
			data: {
				columns: [
					stock_age,
				],
				types: {
						'number of Items': 'bar'
						},
				colors: {
                    'number of Items': '#d8a651'
                                      
                },
			},
			tooltip: {
				show: false
				 // Default true
			},
			axis: {
				rotated: true,
				x: {
					type: 'category',
					categories: stock_age_x_axis
				}
			}
		});		

				//refill performance
		//var refill_data1=['refilled number(10 min)',81,96,382,52,76,59,209];
		//var refill_data2=['refilled number(30 min)',45,53,32,81,143,25,30];
		//var refill_data3=['refilled number(60 min)',45,53,32,81,142,24,29];
		//var refill_x_axis=['1/19/2017','1/20/2017','1/21/2017','1/22/2017','1/23/2017','1/24/2017','1/25/2017'];
		c3.generate({
            bindto: '#combine-chart3',
            data: {
                columns: [				
					refill_data1,
					refill_data2,
                    refill_data3 					
                ],
                types: {
                    'refilled number(10 min)': 'bar',
                    'refilled number(30 min)': 'bar',
                    'refilled number(60 min)': 'bar'                   
                },
                colors: {
                    'refilled number(10 min)': '#227cb8',
                    'refilled number(30 min)': '#35a35b',
                    'refilled number(60 min)': '#ead85a',
					//'Infants': '#ffff00'                   
                },
                groups: [
                    ['refilled number(10 min)','refilled number(30 min)','refilled number(60 min)']
                ],
				order:null
				
            },
			tooltip: {
				show: false
				 // Default true
			},
            axis: {
                x: {
                    type: 'category',
					categories: refill_x_axis
                }
            }
        });
		
		//Reservation chart
		
		//var reservation_data=['PERCENTAGE of Item',1.00,2.00,2.00,1.50,1.00,1.50,2.00,1.00,5.00,15.00,44.00,24.00];
		//var reservation_x_axis=['60minutes','55minutes','50minutes','45minutes','40minutes','35minutes','30minutes','25minutes','20minutes','15minutes','10minutes','5minutes'];
		c3.generate({
			bindto: '#chart1',		
			data: {
			columns: [
				reservation_data,
			],
			types: {
					'PERCENTAGE of Item': 'bar'
					},
			colors: {
                    'PERCENTAGE of Item': '#c55841'
                                      
                },
			},
			tooltip: {
				show: false
				 // Default true
			},
			axis: {
				rotated: true,
				x: {
					type: 'category',
					categories: reservation_x_axis
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



