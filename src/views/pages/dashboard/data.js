const employeeDistributionChart = {
    series: [488, 282, 231, 180, 103],
    chartOptions: {
        chart: { 
            type: 'donut', 
            height: 150, 
            width: 150,
            events: {
                // Triggered when hovering over a specific donut slice
                dataPointMouseEnter: function(event, chartContext, config) {
                    const seriesIndex = config.dataPointIndex;
                    const hoveredValue = chartContext.w.globals.series[seriesIndex];
                    const hoveredLabel = chartContext.w.globals.labels[seriesIndex];

                    // Safely locate ApexCharts built-in center label nodes
                    const totalValNode = document.querySelector('#employee-distribution-chart .apexcharts-datalabel-value');
                    const totalLblNode = document.querySelector('#employee-distribution-chart .apexcharts-datalabel-label');
                    
                    if (totalValNode) totalValNode.textContent = hoveredValue.toLocaleString();
                    if (totalLblNode) totalLblNode.textContent = hoveredLabel;
                },
                // Triggered when the mouse leaves a slice entirely
                dataPointMouseLeave: function(event, chartContext, config) {
                    const totalValNode = document.querySelector('#employee-distribution-chart .apexcharts-datalabel-value');
                    const totalLblNode = document.querySelector('#employee-distribution-chart .apexcharts-datalabel-label');
                    
                    if (totalValNode) totalValNode.textContent = '1,284';
                    if (totalLblNode) totalLblNode.textContent = 'Employees';
                }
            }
        },
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: -10,
                left: 0
            }
        },
        labels: ['Engineering', 'Marketing', 'Finance', 'Sales', 'HR'],
        colors: [ '#0F766E', '#E65100', '#059669', '#CC25B0', '#1E293B' ],
        stroke: { width: 0 },
        legend: { show: false },
        plotOptions: {
            pie: {
                donut: {
                    size: '72%',
                    labels: {
                        show: true,
                        name: { show: true, fontSize: '10px', color: '#9096A1', offsetY: 18 }, 
                        value: { show: true, fontSize: '18px', fontWeight: 700, color: '#1E293B', offsetY: -10 },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Employees',
                            fontSize: '10px',
                            fontWeight: 400,
                            color: '#9096A1',
                            formatter: function() {
                                return '1,284';
                            }
                        }
                    }
                }
            }
        },
        dataLabels: { enabled: false },
        tooltip: { enabled: false }
    }
}

const weeklyAttendanceChart = {
    series: [{ name: 'Present', data: [86, 92, 88, 78, 95, 70, 45] }],
    chartOptions: {
        chart: { type: 'bar', height: 110, toolbar: { show: false }, sparkline: { enabled: false } },
        xaxis: {
            categories: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            labels: { style: { colors: '#9096A1', fontSize: '10px' } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: { show: false },
        grid: { show: false, padding: { left: 0, right: 0, top: -20, bottom: 0 } },
        plotOptions: {
            bar: { columnWidth: '50%', borderRadius: 3, distributed: true }
        },
        colors: ['#0F766E', '#0F766E', '#0F766E', '#E65100', '#0F766E', '#0F766E', '#0F766E'],
        legend: { show: false },
        dataLabels: { enabled: false },
        tooltip: { y: { formatter: v => v + '%' } }
    }
}

const payrollTrendChart = {
    series: [{ name: 'Payroll', data: [950, 1080, 1020, 1180, 1100, 1248] }],
    chartOptions: {
        chart: {
            type: 'area', height: 80,
            toolbar: { show: false },
            sparkline: { enabled: false },
            background: 'transparent'
            },
        xaxis: {
            categories: ['Jan','Feb','Mar','Apr','May','Jun'],
            labels: { style: { colors: 'var(--color-gray-900)', fontSize: '10px' } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: { show: false },
        grid: { show: false, padding: { left: 10, right: 0, top: -10, bottom: 0 } },
        stroke: { curve: 'smooth', width: 2 },
        colors: ['#059669'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 100]
            }
        },
        dataLabels: { enabled: false },
        tooltip: {
            theme: 'dark',
            y: { formatter: v => '$' + v + 'K' }
        },
        markers: { size: 0 }
    }
}

const invTotalStockSpark = {
    series: [{ data: [12, 18, 16, 22, 26, 21, 28, 32, 27, 34, 30, 38] }],
    chartOptions: {
        chart: { type: 'area', height: 80, width: '100%', sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 }, colors: ['#059669'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } },
        tooltip: { enabled: false }
    }
}

const invValueSpark = {
    series: [{ data: [22, 28, 25, 32, 30, 36, 28, 22, 30, 24, 28, 26] }],
    chartOptions: {
        chart: { type: 'area', height: 80, width: '100%', sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 }, colors: ['#E65100'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } },
        tooltip: { enabled: false }
    }
}

const invCategoryChart = {
    series: [{ data: [110, 95, 78, 62, 55, 38] }],
    chartOptions: {
        chart: { type: 'bar', height: 240, width: '100%', toolbar: { show: false } },
        xaxis: { categories: ['Electronics','Clothing','Machines','Sports','Bikes','Books'], labels: { style: { colors: '#9096A1', fontSize: '10px' }}, axisBorder: { color: '#E8E9EC', }, axisTicks: { color: '#E8E9EC', } },
        yaxis: { labels: { offsetX: 0, style: { colors: '#9096A1', fontSize: '11px' } }, axisBorder: { color: '#E8E9EC', } },
        grid: { borderColor: '#E8E9EC', strokeDashArray: 4, padding: { left: 0, right: -2, top: 0, bottom: 0 } },
        plotOptions: { bar: { horizontal: true, barHeight: '55%', borderRadius: 3, distributed: false } },
        colors: ['#059669'], legend: { show: false }, dataLabels: { enabled: false },
        tooltip: { theme: 'dark' }
    }
}

const invStockLevelsChart = {
    series: [
        { name: 'Total Products', type: 'bar', data: [220, 240, 200, 260, 728, 320, 280, 360, 410, 340, 290, 370] },
        { name: 'Out Of Stock', type: 'line', data: [60, 80, 50, 90, 24, 110, 70, 130, 150, 100, 80, 120] }
    ],
    chartOptions: {
        chart: { type: 'line', height: 240, width: '100%', toolbar: { show: false } },
        xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], labels: { style: { colors: '#9096A1', fontSize: '10px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { labels: { offsetX: -15, style: { colors: '#9096A1', fontSize: '11px' } } },
        grid: { borderColor: '#E8E9EC', strokeDashArray: 4, padding: { left: 0, right: -10, top: 0, bottom: 0 } },
        plotOptions: { bar: { columnWidth: '40%', borderRadius: 3 } },
        stroke: { width: [0, 2], curve: 'smooth' },
        colors: ['#059669', '#E65100'], legend: { show: false }, dataLabels: { enabled: false },
        tooltip: { theme: '#1E293B', shared: true }
    }
}

const invValueChart = {
    series: [{ name: 'Inventory Value', data: [320, 410, 380, 460, 568, 420, 510, 480, 540, 460, 520, 580] }],
    chartOptions: {
        chart: { type: 'area', height: 320, width: '100%', toolbar: { show: false } },
        xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], labels: { style: { colors: '#9096A1', fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { tickAmount: 7, labels: { offsetX: -15, style: { colors: '#9096A1', fontSize: '11px' } } },
        grid: { borderColor: '#E8E9EC', strokeDashArray: 4 },
        stroke: { curve: 'smooth', width: 2 }, colors: ['#059669'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0, stops: [0, 100] } },
        dataLabels: { enabled: false },
        tooltip: { theme: '#1E293B', y: { formatter: v => '$' + (v * 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) } },
        markers: { size: 0 }
    }
}

const crmLeadsGeneratedChart = {
    series: [
        { name: 'No of Leads Generated', type: 'bar', data: [320, 410, 450, 380, 520, 480, 580, 510, 620, 720, 540, 690] },
        { name: 'No of Leads Expected', type: 'line', data: [380, 440, 420, 460, 500, 520, 560, 540, 600, 680, 580, 650] }
    ],
    chartOptions: {
        chart: { type: 'line', height: 250, toolbar: { show: false } },
        xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], labels: { style: { colors: '#9096A1', fontSize: '10px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { tickAmount: 7, min: 0, max: 700, labels: { offsetX: -15,style: { colors: '#9096A1', fontSize: '11px' } } },
        grid: { borderColor: '#E8E9EC', strokeDashArray: 4, padding: { left: 0, right: -15, top: 0, bottom: 0 } },
        plotOptions: { bar: { columnWidth: '50%', borderRadius: 3 } },
        stroke: { width: [0, 2], curve: 'smooth' },
        colors: ['#059669', '#E65100'],
        fill: { type: ['gradient', 'solid'], gradient: { type: 'vertical', shade: 'light', shadeIntensity: 0.3, gradientToColors: ['#CC25B0'], opacityFrom: 1, opacityTo: 0.85, stops: [0, 100] } },
        legend: { show: false },
        dataLabels: { enabled: false },
        tooltip: { theme: 'dark', shared: true, intersect: false }
    }
}

const crmContactSourcesChart = {
    series: [25, 15, 15, 10, 15, 20],
    chartOptions: {
        chart: { 
            type: 'donut', 
            height: 215, 
            width: 215,
            events: {
                dataPointMouseEnter: function(event, chartContext, config) {
                    const seriesIndex = config.dataPointIndex;
                    const hoveredValue = chartContext.w.globals.series[seriesIndex];
                    const hoveredLabel = chartContext.w.globals.labels[seriesIndex];

                    const totalValNode = document.querySelector('#crm-contact-sources-chart .apexcharts-datalabel-value');
                    const totalLblNode = document.querySelector('#crm-contact-sources-chart .apexcharts-datalabel-label');
                    
                    if (totalValNode) totalValNode.textContent = hoveredValue + '%';
                    if (totalLblNode) totalLblNode.textContent = hoveredLabel;
                },
                dataPointMouseLeave: function(event, chartContext, config) {
                    const totalValNode = document.querySelector('#crm-contact-sources-chart .apexcharts-datalabel-value');
                    const totalLblNode = document.querySelector('#crm-contact-sources-chart .apexcharts-datalabel-label');
                    
                    if (totalValNode) totalValNode.textContent = '25%';
                    if (totalLblNode) totalLblNode.textContent = 'Organic Search';
                }
            }
        },
        labels: ['Organic Search','Campaigns','Referral','Marketing','Paid Social','Events'],
        colors: ['#0EA5E9', '#E65100', '#059669', '#CC25B0', '#6A1B9A', '#D97706'],
        grid: { padding: { top: 0, bottom: -10, left: -5, right: 0 } },
        stroke: { width: 0 },
        legend: { show: false },
        plotOptions: { 
            pie: { 
                donut: { 
                    size: '70%', 
                    labels: { 
                        show: true, 
                        name: { show: true, fontSize: '11px', color: '#9096A1', offsetY: 20 }, 
                        value: { show: true, fontSize: '22px', fontWeight: 700, color: '#1E293B', offsetY: -12 }, 
                        total: { 
                            show: true, 
                            showAlways: true, 
                            label: 'Organic Search', 
                            fontSize: '11px', 
                            fontWeight: 400, 
                            color: ['#9096A1'], 
                            formatter: function() { 
                                return '25%'; 
                            } 
                        } 
                    } 
                } 
            } 
        },
        dataLabels: { enabled: false },
        tooltip: { enabled: false }
    }
}

const posProductSalesChart = {
    series: [{ name: 'Sales', data: [42, 38, 45, 32, 52, 38, 35, 30, 36, 38, 45, 50] }],
    chartOptions: {
        chart: { type: 'bar', height: 170, toolbar: { show: false } },
        xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], labels: { style: { colors: '#9096A1', fontSize: '10px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { labels: { style: { colors: '#9096A1', fontSize: '11px' }, formatter: v => v + 'K' } },
        grid: { padding: {left: 0, }, borderColor: '#E8E9EC', strokeDashArray: 4 },
        plotOptions: { bar: { columnWidth: '60%', borderRadius: 3 } },
        fill: { type: 'gradient', gradient: { type: 'vertical', shade: 'light', shadeIntensity: 0.3, gradientToColors: ['#059669'], opacityFrom: 0.85, opacityTo: 0.4, stops: [0, 100] } },
        colors: ['#059669'], legend: { show: false }, dataLabels: { enabled: false },
        tooltip: { theme: 'dark', y: { formatter: v => '$' + (v * 1000).toLocaleString() } }
    }
}

const posSpark1 = {
    series: [{ data: [12, 14, 13, 18, 16, 22, 19, 25, 21, 28, 24, 32] }],
    chartOptions: {
        chart: { type: 'area', height: 60, sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 }, colors: ['#059669'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } },
        tooltip: { enabled: false }
    }
}

const posSpark2 = {
    series: [{ data: [22, 18, 24, 20, 28, 24, 30, 26, 32, 28, 36, 30] }],
    chartOptions: {
        chart: { type: 'area', height: 60, sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 }, colors: ['#6A1B9A'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } },
        tooltip: { enabled: false }
    }
}

const posSpark3 = {
    series: [{ data: [14, 18, 16, 22, 20, 26, 23, 30, 26, 32, 28, 36] }],
    chartOptions: {
        chart: { type: 'area', height: 60, sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 }, colors: ['#0EA5E9'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } },
        tooltip: { enabled: false }
    }
}

const posSpark4 = {
    series: [{ data: [18, 22, 19, 26, 22, 30, 26, 32, 28, 36, 30, 38] }],
    chartOptions: {
        chart: { type: 'area', height: 60, sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 }, colors: ['#CC25B0'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } },
        tooltip: { enabled: false }
    }
}

const posSalesReturnsChart = {
    series: [
        {
            name: 'Sales',
            data: [100, 300, 200, 100, 140, 280, 180, 220, 350, 260, 120, 180]
        },
        {
            name: 'Returns',
            data: [-150, -300, -200, -100, -140, -280, -240, -100, -150, -330, -70, -140]
        }
    ],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 250,
            stacked: false,
            toolbar: {
                show: false
            }
        },
        colors: ['#32827A', '#DE8434'],
        plotOptions: {
            bar: {
                columnWidth: '85%',
                borderRadius: 2,
                borderRadiusApplication: 'around'
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            borderColor: '#E8E9EC',
            strokeDashArray: 4,
            padding: {
                left: 0,
                right: 0,
                bottom: 0
            }
        },
        xaxis: {
            categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            min: -400,
            max: 400,
            tickAmount: 8,
            labels: {
                offsetX: -10,
                formatter: function (val) {
                    return Math.abs(val);
                }
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return Math.abs(val);
                }
            }
        }
    }
};

const posCategoriesRadar = {
    series: [{
        name: 'Sales',
        data: [62, 78, 55, 48, 65, 72, 58, 50]
    }],
    chartOptions: {
        chart: {
            type: 'radar',
            height: 280,
            toolbar: {
                show: false
            },
            parentHeightOffset: 0
        },
        xaxis: {
            categories: [
                'Appliances',
                'Headphones',
                'Footwear',
                'Furniture',
                'Apparel',
                'Smartphones',
                'Computers',
                'Watches'
            ],
            labels: {
                style: {
                    colors: Array(8).fill('#9096A1'),
                    fontSize: '10px'
                }
            }
        },
        yaxis: {
            show: false,
            tickAmount: 4
        },
        colors: ['#E65100'],
        stroke: {
            width: 2
        },
        fill: {
            opacity: 0.35
        },
        markers: {
            size: 2,
            colors: ['#E65100'],
            strokeWidth: 0
        },
        plotOptions: {
            radar: {
                size: 105, // reduce if still too much space
                polygons: {
                    strokeColors: '#e8e9ec',
                    connectorColors: '#e8e9ec',
                    fill: {
                        colors: ['transparent']
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -20,
                right: -10,
                bottom: -30,
                left: -10
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        tooltip: {
            theme: 'dark'
        }
    }
}

const finRevExpChart = {
    series: [
        { name: 'Revenue', data: [40, 70, 28, 38, 48, 60, 22, 42, 36, 36, 28, 60] },
        { name: 'Expense', data: [22, 48, 25, 30, 36, 42, 18, 30, 25, 22, 18, 22] }
    ],
    chartOptions: {
        chart: { type: 'bar', height: 200, toolbar: { show: false } },
        xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], labels: { style: { colors: '#9096A1', fontSize: '10px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { labels: { style: { colors: '#9096A1', fontSize: '11px' }, formatter: v => v + 'K' } },
        grid: { borderColor: '#E8E9EC', strokeDashArray: 4 },
        plotOptions: { bar: { columnWidth: '55%', borderRadius: 3 } },
        colors: ['#059669', '#E65100'], legend: { show: false }, dataLabels: { enabled: false },
        tooltip: { theme: 'dark', y: { formatter: v => '$' + v + 'K' } }
    }
}

const finRevenueDonut = {
    series: [68, 31, 12],
    chartOptions: {
        chart: { 
            type: 'donut', 
            height: 250, 
            width: '100%',
            events: {
                // Triggered when hovering over a specific donut slice
                dataPointMouseEnter: function(event, chartContext, config) {
                    const seriesIndex = config.dataPointIndex;
                    const hoveredValue = chartContext.w.globals.series[seriesIndex];
                    const hoveredLabel = chartContext.w.globals.labels[seriesIndex];

                    // Safely locate ApexCharts built-in center label nodes
                    const totalValNode = document.querySelector('#fin-revenue-donut .apexcharts-datalabel-value');
                    const totalLblNode = document.querySelector('#fin-revenue-donut .apexcharts-datalabel-label');
                    
                    if (totalValNode) totalValNode.textContent = hoveredValue.toLocaleString();
                    if (totalLblNode) totalLblNode.textContent = hoveredLabel;
                },
                // Triggered when the mouse leaves a slice entirely
                dataPointMouseLeave: function(event, chartContext, config) {
                    const totalValNode = document.querySelector('#fin-revenue-donut .apexcharts-datalabel-value');
                    const totalLblNode = document.querySelector('#fin-revenue-donut .apexcharts-datalabel-label');
                    
                    if (totalValNode) totalValNode.textContent = '1,284';
                    if (totalLblNode) totalLblNode.textContent = 'Employees';
                }
            }
        },
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: -10,
                left: 0
            }
        },
        labels: ['Sales', 'Recurring', 'Service Fees', 'Other'],
        colors: ['#059669', '#E65100', '#6A1B9A'],
        stroke: { width: 0 },
        legend: { show: false },
        plotOptions: {
            pie: {
                donut: {
                    size: '72%',
                    labels: {
                        show: true,
                        name: { show: false, fontSize: '10px', color: '#9096A1', offsetY: 18 }, 
                        value: { show: true, fontSize: '24', fontWeight: 700, color: '#1E293B', offsetY: 10 }, 
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Sales',
                            fontSize: '10px',
                            fontWeight: 400,
                            color: '#9096A1',
                            formatter: function() {
                                return '90%';
                            }
                        }
                    }
                }
            }
        },
        dataLabels: { enabled: false },
        tooltip: { enabled: false }
    }
}

const finProfitSalesChart = {
    series: [
        { name: 'Profit Margin', data: [55, 48, 50, 32, 40, 38, 45, 35, 25, 28, 22, 30] },
        { name: 'Sales',         data: [25, 22, 28, 35, 30, 38, 32, 45, 42, 55, 48, 60] }
    ],
    chartOptions: {
        chart: { type: 'line', height: 240, toolbar: { show: false } },
        xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], labels: { style: { colors: '#9096A1', fontSize: '10px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { labels: { style: { colors: '#9096A1', fontSize: '11px' }, formatter: v => v + 'K' } },
        grid: { borderColor: '#E8E9EC', strokeDashArray: 4 },
        stroke: { curve: 'smooth', width: [2.5, 2.5] },
        colors: ['#E65100', '#059669'], legend: { show: false }, dataLabels: { enabled: false },
        tooltip: { theme: '#1E293B', shared: true },
        markers: { size: 0 }
    }
}

const finExpenseDonut = {
    series: [50, 30, 20],
    labels: ['Salaries', 'Miscellaneous', 'Marketing'],
    chartOptions: {
        chart: {
            type: 'donut',
            height: 200,
            events: {
                dataPointMouseEnter: function (event, chartContext, config) {

                    const values = [50, 30, 20];
                    const labels = ['Salaries', 'Miscellaneous', 'Marketing'];

                    const index = config.dataPointIndex;

                    const valueNode = document.querySelector(
                        '#fin-expense-donut .apexcharts-datalabel-value'
                    );

                    const labelNode = document.querySelector(
                        '#fin-expense-donut .apexcharts-datalabel-label'
                    );

                    if (valueNode) {
                        valueNode.textContent = values[index] + '%';
                    }

                    if (labelNode) {
                        labelNode.textContent = labels[index];
                    }
                },

                dataPointMouseLeave: function () {

                    const valueNode = document.querySelector(
                        '#fin-expense-donut .apexcharts-datalabel-value'
                    );

                    const labelNode = document.querySelector(
                        '#fin-expense-donut .apexcharts-datalabel-label'
                    );

                    if (valueNode) {
                        valueNode.textContent = '50%';
                    }

                    if (labelNode) {
                        labelNode.textContent = 'Salaries';
                    }
                }
            }
        },
        colors: ['#E28A34', '#3D8C84', '#7B3FB3'],
        stroke: {
            width: 4,
            colors: ['var(--color-white)']
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '78%',
                    labels: {
                        show: true,

                        name: {
                        show: true,
                        offsetY: 14,
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#6B7280'
                    },

                        value: {
                            show: true,
                            offsetY: -20,
                            fontSize: '18',
                            fontWeight: 700,
                            color: '#374151',
                            formatter: function (val) {
                                return parseInt(val) + '%';
                            }
                        },

                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Salaries',
                            formatter: function () {
                                return '50%';
                            }
                        }
                    }
                }
            }
        }
    }
};

const data = [180, 220, 320, 380, 540, 850, 480, 600, 540, 720, 660, 580];
const maxIdx = data.indexOf(Math.max(...data));

const salesRevenueTrendsChart = {
    series: [{ name: 'Revenue', data }],
    chartOptions: {
        chart: { type: 'bar', height: 340, toolbar: { show: false } },
        xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], labels: { style: { colors: '#9096A1', fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { tickAmount: 5, labels: { style: { colors: '#9096A1', fontSize: '11px' }, formatter: v => (v >= 1000 ? (v/1000) + 'M' : v + 'K') } },
        grid: { borderColor: '#E8E9EC', strokeDashArray: 4 },
        plotOptions: { bar: { columnWidth: '55%', borderRadius: 3, distributed: true } },
        colors: data.map((_, i) => i === maxIdx ? '#E65100' : '#F8E6D6'),
        legend: { show: false }, dataLabels: { enabled: false },
        tooltip: { theme: 'dark', y: { formatter: v => '$' + v + 'K' } }
    }
}

const procSpark1 = {
    series: [{ data: [12, 14, 13, 18, 16, 22, 19, 25, 21, 28, 24, 32] }],
    chartOptions: {
        chart: { type: 'area', height: 60, sparkline: { enabled: true } }, 
        stroke: { curve: 'smooth', width: 2 }, 
        colors: ['#059669'], 
        fill: { 
            type: 'gradient', 
            gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } 
        }, 
        tooltip: { enabled: false }
    }
}

const procSpark2 = {
    series: [{ data: [22, 18, 24, 20, 28, 24, 30, 26, 32, 28, 36, 30] }],
    chartOptions: {
        chart: { type: 'area', height: 60, sparkline: { enabled: true } }, 
        stroke: { curve: 'smooth', width: 2 }, 
        colors: ['#6A1B9A'], 
        fill: { 
            type: 'gradient', 
            gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } 
        }, 
        tooltip: { enabled: false }
    }
}

const procSpark3 = {
    series: [{ data: [14, 18, 16, 22, 20, 26, 23, 30, 26, 32, 28, 36] }],
    chartOptions: {
        chart: { type: 'area', height: 60, sparkline: { enabled: true } }, 
        stroke: { curve: 'smooth', width: 2 }, 
        colors: ['#E65100'], 
        fill: { 
            type: 'gradient', 
            gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } 
        }, 
        tooltip: { enabled: false }
    }
}

const procSpark4 = {
    series: [{ data: [18, 22, 19, 26, 22, 30, 26, 32, 28, 36, 30, 38] }],
    chartOptions: {
        chart: { type: 'area', height: 60, sparkline: { enabled: true } }, 
        stroke: { curve: 'smooth', width: 2 }, 
        colors: ['#CC25B0'], 
        fill: { 
            type: 'gradient', 
            gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } 
        }, 
        tooltip: { enabled: false }
    }
}

const procTopSuppliersChart = {
    series: [{ data: [48, 38, 30, 24, 17, 10] }],
    chartOptions: {
        chart: { type: 'bar', height: 280, toolbar: { show: false } },
        xaxis: { categories: ['Alpha Distributors','Beta Industries','Zenith Supplies','Orion Equipments','Stellar Tools','Denny Shoes'], labels: { style: { colors: '#9096A1', fontSize: '10px' }, formatter: v => v + 'k' } },
        yaxis: { labels: { style: { colors: '#9096A1', fontSize: '11px' } } },
        grid: { borderColor: '#E8E9EC', strokeDashArray: 4 },
        plotOptions: { bar: { horizontal: true, barHeight: '55%', borderRadius: 3 } },
        colors: ['#059669'], legend: { show: false }, dataLabels: { enabled: false },
        tooltip: { theme: 'dark', y: { formatter: v => '$' + v + 'k' } }
    }
}

const procMonthlySpendChart = {
    series: [{ name: 'Expense', data: [38, 28, 42, 30, 50, 36, 42, 28, 38, 30, 36, 28] }],
    chartOptions: {
        chart: { type: 'area', height: 280, toolbar: { show: false } },
        xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], labels: { style: { colors: '#9096A1', fontSize: '10px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { labels: { style: { colors: '#9096A1', fontSize: '11px' }, formatter: v => v + 'K' } },
        grid: { borderColor: '#E8E9EC', strokeDashArray: 4 },
        stroke: { curve: 'smooth', width: 2 }, colors: ['#E65100'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0, stops: [0, 100] } },
        dataLabels: { enabled: false }, tooltip: { theme: 'dark', y: { formatter: v => 'Expense : $' + (v * 200) } }, markers: { size: 0 }
    }
}

const procSupplierPerfChart = {
    series: [
        { name: 'Quality',         data: [[15, 70, 14], [38, 80, 18], [55, 65, 12], [75, 85, 16], [90, 50, 10]] },
        { name: 'Cost Efficiency', data: [[20, 45, 12], [42, 55, 14], [60, 40, 10], [80, 60, 12], [95, 35, 16]] }
    ],
    chartOptions: {
        chart: { type: 'bubble', height: 220, toolbar: { show: false } },
        xaxis: { tickAmount: 6, min: 0, max: 100, labels: { style: { colors: '#9096A1', fontSize: '10px' }, formatter: v => v + 'K' }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { min: 0, max: 100, tickAmount: 5, labels: { style: { colors: '#9096A1', fontSize: '11px' } } },
        grid: { borderColor: '#E8E9EC', strokeDashArray: 4 },
        colors: ['#0EA5E9', '#E65100'], legend: { show: false }, dataLabels: { enabled: false },
        fill: { opacity: 0.6 }, tooltip: { theme: '#1E293B' }
    }
}
const chartWidth = '100%';
const chartHeight = 320;

const isDark = matchMedia('(prefers-color-scheme: dark)').matches;
const dark = isDark ? '#f0f0f0' : '#1a1a1a';

const procSpendCatChart = {
    series: [42, 38, 20],
    chartOptions: {
        chart: {
            type: 'donut',
            height: chartHeight,
            width: chartWidth,
            toolbar: { show: false }
        },
        labels: ['', '', ''],
        colors: ['#E8920A', '#1D9E75', '#5DCAA5'],
        stroke: { width: 2, colors: ['#fff'] },
        legend: { show: false },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10,
                donut: {
                size: '65%',
                labels: {
                    show: false,
                    name: { show: false },
                    value: {
                    show: true,
                    fontSize: '28px',
                    fontWeight: 700,
                    color: dark,
                    offsetY: -10,
                    formatter: () => '42%'
                    },
                    total: {
                    show: false,
                    showAlways: true,
                    label: '',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: dark,
                    formatter: () => '42%'
                    }
                }
                }
            }
        },
        dataLabels: { enabled: false },
        tooltip: {
            enabled: true,
            fillSeriesColor: false,
            custom: function({ series, seriesIndex, w }) {
                const label = w.globals.labels[seriesIndex];
                const value = series[seriesIndex];
                const color = w.globals.colors[seriesIndex];
                return `<div style="
                background:#fff;
                border:none;
                border-radius:5px;
                box-shadow:unset !important;
                padding:10px 14px;
                display:flex;
                align-items:center;
                gap:8px;
                font-family:sans-serif;
                min-width:30px;
                ">
                <span style="width:10px;height:10px;border-radius:50%;background:${color};flex-shrink:0;"></span>
                <span style="color:#555;font-size:13px;">${label}:</span>
                <span style="color:#111;font-size:13px;font-weight:700;margin-left:auto;">${value}%</span>
                </div>`;
            }
        },
        states: {
            hover: { filter: { type: 'darken', value: 0.85 } },
            active: { filter: { type: 'darken', value: 0.75 } }
        }
    }
}

const procOrderStatusChart = {
    series: [80, 60, 45, 25],
    chartOptions: {
        chart: {
            type: 'radialBar',
            height: 200,
            width: 200,
            toolbar: { show: false }
        },
        colors: ['#B91C1C', '#E65100', '#0EA5E9', '#059669'], // pink, orange, teal, blue — match your vars
        labels: ['Approved', 'Pending', 'Delivered', 'Rejected'],
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: -180,
                endAngle: 180,
                hollow: {
                size: '38%',
                background: '#f8f9fb',
                dropShadow: {
                    enabled: true,
                    top: 0, left: 0,
                    blur: 8,
                    opacity: 0.08
                }
                },
                track: {
                show: true,
                background: '#eef0f4',
                strokeWidth: '90%',
                opacity: 1,
                margin: 5  // ✅ spacing between rings
                },
                dataLabels: {
                show: false,
                name: { show: false },
                value: {
                    show: true,
                    fontSize: '26px',
                    fontWeight: 700,
                    color: '#1E293B',
                    offsetY: 10,
                    formatter: () => '80%'
                },
                total: {
                    show: true,
                    label: '',
                    fontSize: '26px',
                    fontWeight: 700,
                    color: '#1E293B',
                    formatter: () => '80%'
                }
                }
            }
        },
        stroke: { lineCap: 'round' },  // ✅ rounded ends
        legend: { show: false },
        tooltip: {
            enabled: true,
            fillSeriesColor: false,
            custom: function({ seriesIndex, w }) {
                const label = w.globals.labels[seriesIndex];
                const value = w.globals.series[seriesIndex];
                const color = w.globals.colors[seriesIndex];
                return `<div style="
                background:#fff;
                border-radius:8px;
                box-shadow:0 4px 16px rgba(0,0,0,0.12);
                padding:9px 14px;
                display:flex;
                align-items:center;
                gap:8px;
                font-family:sans-serif;
                ">
                <span style="width:10px;height:10px;border-radius:50%;background:${color};flex-shrink:0;"></span>
                <span style="color:#555;font-size:13px;">${label}:</span>
                <span style="color:#111;font-size:13px;font-weight:700;margin-left:4px;">${value}%</span>
                </div>`;
            }
        }
    }
}

const pjSpark1 = {
    series: [{ data: [4,6,3,7,5,8,4,9,5,7,4,8,5,6,3,7,5,8,4,9,5,7,4,8,5,6] }],
    chartOptions: {
        chart: { 
            type: 'bar', 
            height: 60, 
            sparkline: { enabled: true } 
        }, 
        plotOptions: { 
            bar: { columnWidth: '50%', borderRadius: 1 } 
        }, 
        colors: ['#E65100'], 
        tooltip: { enabled: false } 
    }
}

const pjSpark2 = {
    series: [{ data: [5,3,6,4,7,5,8,6,9,7,5,8,6,9,7,5,8,6,9,7,5,8,6,9,7,5] }],
    chartOptions: {
        chart: { 
            type: 'bar', 
            height: 60, 
            sparkline: { enabled: true } 
        }, 
        plotOptions: { 
            bar: { columnWidth: '50%', borderRadius: 1 } 
        }, 
        colors: ['#0EA5E9'], 
        tooltip: { enabled: false } 
    }
}

const pjSpark3 = {
    series: [{ data: [4,7,5,8,6,9,7,5,8,6,9,7,5,8,6,9,7,5,8,6,9,7,5,8,6,9] }],
    chartOptions: {
        chart: { 
            type: 'bar', 
            height: 60, 
            sparkline: { enabled: true } 
        }, 
        plotOptions: { 
            bar: { columnWidth: '50%', borderRadius: 1 } 
        }, 
        colors: ['#6A1B9A'], 
        tooltip: { enabled: false } 
    }
}

const pjSpark4 = {
    series: [{ data: [6,4,7,5,8,6,9,7,5,8,6,9,7,5,8,6,9,7,5,8,6,9,7,5,8,6] }],
    chartOptions: {
        chart: { 
            type: 'bar', 
            height: 60, 
            sparkline: { enabled: true } 
        }, 
        plotOptions: { 
            bar: { columnWidth: '50%', borderRadius: 1 } 
        }, 
        colors: ['#059669'], 
        tooltip: { enabled: false } 
    }
}

const pjProgressChart = {
    series: [
        { name: 'Completed',       data: [30, 40, 35, 50, 25, 55, 70, 60, 75, 80, 70, 65] },
        { name: 'Inprogress',      data: [20, 30, 25, 35, 19, 40, 45, 50, 55, 45, 50, 40] },
        { name: 'Not Started Yet', data: [40, 30, 35, 20, 19, 30, 25, 35, 25, 30, 35, 30] },
        { name: 'Cancelled',       data: [60, 50, 55, 40, 70, 50, 45, 55, 50, 60, 65, 55] }
    ],
    chartOptions: {
        chart: { type: 'line', height: 200, toolbar: { show: false } },
        xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], labels: { style: { colors: '#9096A1', fontSize: '10px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { min: 0, max: 100, tickAmount: 5, labels: { offsetX: -15, style: { colors: '#9096A1', fontSize: '11px' } } },
        grid: { borderColor: '#E8E9EC', strokeDashArray: 4 },
        stroke: { curve: 'smooth', width: 2 },
        colors: ['#059669', '#0EA5E9', '#D97706', '#B91C1C'], legend: { show: false },
        dataLabels: { enabled: false },
        tooltip: { theme: 'dark', shared: true, intersect: false },
        markers: { size: 4, hover: { size: 6 } }
    }
}

const resourceChart = {
    // Updated data structure to map perfectly to categories
    series: [
        { name: 'Admin', data: [{x: '0%', y: 0}, {x: '20%', y: 0}, {x: '40%', y: 0}, {x: '60%', y: 0}, {x: '80%', y: 0}] },
        { name: 'Devops', data: [{x: '0%', y: 1}, {x: '20%', y: 1}, {x: '40%', y: 0}, {x: '60%', y: 0}, {x: '80%', y: 0}] },
        { name: 'Document', data: [{x: '0%', y: 1}, {x: '20%', y: 0}, {x: '40%', y: 0}, {x: '60%', y: 0}, {x: '80%', y: 0}] },
        { name: 'Testing', data: [{x: '0%', y: 1}, {x: '20%', y: 2}, {x: '40%', y: 3}, {x: '60%', y: 4}, {x: '80%', y: 0}] },
        { name: 'Backend', data: [{x: '0%', y: 1}, {x: '20%', y: 2}, {x: '40%', y: 0}, {x: '60%', y: 0}, {x: '80%', y: 0}] },
        { name: 'Frontend', data: [{x: '0%', y: 1}, {x: '20%', y: 2}, {x: '40%', y: 0}, {x: '60%', y: 0}, {x: '80%', y: 0}] },
        { name: 'UI/UX', data: [{x: '0%', y: 1}, {x: '20%', y: 2}, {x: '40%', y: 3}, {x: '60%', y: 4}, {x: '80%', y: 5}] }
    ],
    chartOptions: {
        chart: {
            type: 'heatmap',
            height: 230,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            heatmap: {
                radius: 6,
                enableShades: false,
                useFillColorAsStroke: false,
                colorScale: {
                    ranges: [
                        { from: 0, to: 0, color: '#f1f5f9' },
                        { from: 1, to: 1, color: '#a3dec9' },
                        { from: 2, to: 2, color: '#7bcfae' },
                        { from: 3, to: 3, color: '#4cb991' },
                        { from: 4, to: 4, color: '#1ca175' },
                        { from: 5, to: 5, color: '#00966b' }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        stroke: {
            width: 5,
            colors: ['var(--color-white)']
        },
        grid: {
            show: false,
            padding: {
                top: -10,
                right: -10,
                bottom: 0,
                left: 0
            }
        },
        xaxis: {
            type: 'category',
            categories: ['0%', '20%', '40%', '60%', '80%'],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                style: {
                    colors: '#94a3b8',
                    fontSize: '12px',
                    fontFamily: 'sans-serif'
                }
            }
        },
        yaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                offsetX: -10,
                style: {
                    colors: '#64748b',
                    fontSize: '12px',
                    fontFamily: 'sans-serif'
                }
            }
        },
        tooltip: {
            theme: 'light',
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                const labelName = w.globals.seriesNames[seriesIndex];
                
                // Map index states back to clean display percentage values
                const valueMap = {
                    'Admin': 0,
                    'Devops': 40,
                    'Document': 20,
                    'Testing': 80,
                    'Backend': 40,
                    'Frontend': 50,
                    'UI/UX': 100
                };
                const displayVal = valueMap[labelName] || 0;

                return `
                    <div class="p-3 rounded border border-border-color">
                        <span style="font-weight: 600; color: #1e293b;">${labelName}:</span> 
                        <span style="color: #00966b; font-weight: 700;">${displayVal}%</span>
                    </div>
                `;
            }
        }
    }
};

const pjTaskSummaryChart = {
    series: [30, 25, 20, 15, 10],
    chartOptions: {
        chart: { 
            type: 'donut', 
            height: 150, 
            width: 150,
            events: {
                dataPointMouseEnter: function(event, chartContext, config) {
                    const seriesIndex = config.dataPointIndex;
                    const hoveredValue = chartContext.w.globals.series[seriesIndex];
                    const hoveredLabel = chartContext.w.globals.labels[seriesIndex];

                    const totalValNode = document.querySelector('#pj-task-summary-chart .apexcharts-datalabel-value');
                    const totalLblNode = document.querySelector('#pj-task-summary-chart .apexcharts-datalabel-label');
                    
                    if (totalValNode) totalValNode.textContent = hoveredValue + '%';
                    if (totalLblNode) totalLblNode.textContent = hoveredLabel;
                },
                dataPointMouseLeave: function(event, chartContext, config) {
                    const totalValNode = document.querySelector('#pj-task-summary-chart .apexcharts-datalabel-value');
                    const totalLblNode = document.querySelector('#pj-task-summary-chart .apexcharts-datalabel-label');
                    
                    if (totalValNode) totalValNode.textContent = '40%';
                    if (totalLblNode) totalLblNode.textContent = 'Completed';
                }
            }
        },
        labels: ['Completed','Pending','In Progress','Active','Cancelled'],
        colors: ['#059669', '#E65100', '#0EA5E9', '#6A1B9A', '#B91C1C'],
        stroke: { width: 0 }, 
        legend: { show: false },
        plotOptions: { 
            pie: { 
                donut: { 
                    size: '75%', 
                    labels: { 
                        show: true, 
                        name: { show: true, fontSize: '11px', color: '#9096A1', offsetY: 20 }, 
                        value: { show: true, fontSize: '24px', fontWeight: 700, color: '#1E293B', offsetY: -10 }, 
                        total: { 
                            show: true, 
                            showAlways: true, 
                            label: 'Completed', 
                            fontSize: '11px', 
                            color: '#9096A1', 
                            formatter: function() { 
                                return '40%'; 
                            } 
                        } 
                    } 
                } 
            } 
        },
        dataLabels: { enabled: false }
    }
}

const supTicketVolumeChart = {    
    // Swapping array order ensures 'Resolved' renders directly on top of 'Created'
    series: [
        {
            name: 'Tickets Created',
            data: [42, 54, 18, 50, 72, 32, 70, 81, 87, 75, 50, 42] // Adjusted matching image baseline heights
        },
        {
            name: 'Tickets Resolved',
            data: [26, 16, 10, 2, 24, 6, 20, 26, 49, 31, 31, 26] // Exact focal data metrics
        }
    ],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 280,
            stacked: false, // OFF so we can control overlapping positions manually
            toolbar: {
                show: false
            }
        },
        // Hex matches your exact screenshot palette components
        colors: ['#EAEFF0', '#0A8564'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '52%',
                // 'true' forces ApexCharts to overlay the series instead of drawing side-by-side
                rangeBarOverlap: true, 
                borderRadius: 4,
                borderRadiusApplication: 'around', // Smooth bubble cap curves
                borderRadiusWhenStacked: 'all',
                dataLabels: {
                    position: 'top'
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            show: true,
            borderColor: 'var(--color-border-color)',
            strokeDashArray: 3, // Clean dotted background grid
            xaxis: {
                lines: {
                    show: false // Hides vertical partition walls
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            padding: {
                left: 0, 
                right: 0,
                top: 0,
                bottom: -10
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: '#64748B',
                    fontSize: '12px',
                    fontFamily: 'sans-serif'
                }
            }
        },
        yaxis: {
            tickAmount: 5,
            min: 0,
            max: 100, // Matching 0 to 100 scale limits
            labels: {
                offsetX:-20,
                style: {
                    colors: '#64748B',
                    fontSize: '12px'
                }
            }
        },
        // --- MATCHES THE CUSTOM WHITE LIGHT TOOLTIP CARD ---
        tooltip: {
            enabled: true,
            shared: true,
            intersect: false,
            theme: 'light',
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                var month = w.globals.categoryLabels[dataPointIndex];
                var created = series[0][dataPointIndex];
                var resolved = series[1][dataPointIndex];
                
                return `
                    <div style="padding: 14px; background: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.06); font-family: sans-serif; min-width: 170px;">
                        <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 10px;">${month}</div>
                        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 12px; margin-bottom: 8px; color: #64748b;">
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="width: 7px; height: 7px; background: #CBD5E1; border-radius: 50%; display: inline-block;"></span>
                                <span>Tickets Created</span>
                            </div>
                            <span style="font-weight: 700; color: #1e293b;">${created}</span>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: #64748b;">
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="width: 7px; height: 7px; background: #0A8564; border-radius: 50%; display: inline-block;"></span>
                                <span>Tickets Resolved</span>
                            </div>
                            <span style="font-weight: 700; color: #1e293b;">${resolved}</span>
                        </div>
                    </div>
                `;
            }
        }
    }
};

const supSlaPie = {
    series: [70, 30],
    chartOptions: {
        chart: { type: 'pie', height: 240, width: 240 },
        labels: ['SLA Compliant','SLA Breached'],
        colors: ['#059669', '#E65100'],
        stroke: { width: 0 },
        legend: { show: false },
        dataLabels: { style: { fontSize: '12px', colors: ['#fff'], fontWeight: 600 }, formatter: (val, opts) => opts.w.config.labels[opts.seriesIndex] + '\n' + opts.w.config.series[opts.seriesIndex] },
        tooltip: { enabled: true }
    }
}

const supSpark1 = {
    series: [{ data: [12, 18, 14, 22, 16, 24, 20, 28, 22, 30, 24, 32] }], 
    chartOptions: {
        chart: { 
            type: 'area', 
            height: 60, 
            sparkline: { enabled: true } 
        }, 
        stroke: { curve: 'smooth', width: 2 }, 
        colors: ['#E65100'], 
        fill: { 
            type: 'gradient', 
            gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } 
        }, 
        tooltip: { enabled: false }
    }
}

const supSpark2 = {
    series: [{ data: [18, 14, 22, 16, 24, 20, 28, 22, 30, 24, 32, 26] }], 
    chartOptions: {
        chart: { 
            type: 'area', 
            height: 60, 
            sparkline: { enabled: true } 
        }, 
        stroke: { curve: 'smooth', width: 2 }, 
        colors: ['#B91C1C'], 
        fill: { 
            type: 'gradient', 
            gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } 
        }, 
        tooltip: { enabled: false }
    }
}

const supSpark3 = {
    series: [{ data: [10, 14, 12, 18, 14, 20, 16, 24, 18, 26, 20, 28] }], 
    chartOptions: {
        chart: { 
            type: 'area', 
            height: 60, 
            sparkline: { enabled: true } 
        }, 
        stroke: { curve: 'smooth', width: 2 }, 
        colors: ['#059669'], 
        fill: { 
            type: 'gradient', 
            gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } 
        }, 
        tooltip: { enabled: false }
    }
}

const supSpark4 = {
    series: [{ data: [14, 18, 16, 22, 18, 26, 20, 28, 22, 30, 24, 32] }], 
    chartOptions: {
        chart: { 
            type: 'area', 
            height: 60, 
            sparkline: { enabled: true } 
        }, 
        stroke: { curve: 'smooth', width: 2 }, 
        colors: ['#6A1B9A'], 
        fill: { 
            type: 'gradient', 
            gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0, stops: [0, 100] } 
        }, 
        tooltip: { enabled: false }
    }
}

const supSatisfactionGauge = {
    series: [42, 38, 20],
    chartOptions: {
        chart: {
            type: 'donut',
            height: chartHeight,
            width: chartWidth,
            toolbar: { show: false }
        },
        labels: ['', '', ''],
        colors: ['#b91c1c', '#0ea5e9', '#059669'],
        stroke: { width: 2, colors: ['#fff'] },
        legend: { show: false },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10,
                donut: {
                size: '65%',
                labels: {
                    show: false,
                    name: { show: false },
                    value: {
                    show: true,
                    fontSize: '28px',
                    fontWeight: 700,
                    color: dark,
                    offsetY: -10,
                    formatter: () => '42%'
                    },
                    total: {
                    show: false,
                    showAlways: true,
                    label: '',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: dark,
                    formatter: () => '42%'
                    }
                }
                }
            }
        },
        dataLabels: { enabled: false },
        tooltip: {
            enabled: true,
            fillSeriesColor: false,
            custom: function({ series, seriesIndex, w }) {
                const label = w.globals.labels[seriesIndex];
                const value = series[seriesIndex];
                const color = w.globals.colors[seriesIndex];
                return `<div style="
                background:#fff;
                border:none;
                border-radius:5px;
                box-shadow:unset !important;
                padding:10px 14px;
                display:flex;
                align-items:center;
                gap:8px;
                font-family:sans-serif;
                min-width:30px;
                ">
                <span style="width:10px;height:10px;border-radius:50%;background:${color};flex-shrink:0;"></span>
                <span style="color:#555;font-size:13px;">${label}:</span>
                <span style="color:#111;font-size:13px;font-weight:700;margin-left:auto;">${value}%</span>
                </div>`;
            }
        },
        states: {
        hover: { filter: { type: 'darken', value: 0.85 } },
        active: { filter: { type: 'darken', value: 0.75 } }
        }
    }
}

const primaryTeal  = typeof '#059669' !== 'undefined' ? '#059669' : '#117A73'; 
const primaryOrange = typeof '#0EA5E9'    !== 'undefined' ? '#0EA5E9'    : '#D97706';
const textGray      = typeof '#9096A1' !== 'undefined' ? '#9096A1' : '#64748B';

const supResponseRrateChart = {
    // Using realistic micro-fluctuation coordinates to build that continuous jagged timeline
    series: [
        { name: 'Creation Time', data: [3.2, 3.5, 2.9, 3.8, 3.4, 2.7, 3.1, 3.6, 2.8, 3.3, 3.0, 2.9] },
        { name: 'Response Time', data: [4.1, 4.3, 4.0, 4.5, 4.2, 3.9, 4.4, 4.6, 4.1, 4.5, 4.2, 4.0] }
    ],
    chartOptions: {
        chart: { 
            type: 'area', 
            height: 180, 
            stacked: true, // Crucial: Stacks creation time directly over response time
            toolbar: { show: false },
            sparkline: { enabled: false }
        },
        xaxis: { 
            categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], 
            labels: { 
                show: true,
                style: { colors: textGray, fontSize: '11px', fontFamily: 'sans-serif' } 
            },  
            axisBorder: { show: false }, 
            axisTicks: { show: false },
            crosshairs: {
                show: true,
                stroke: {
                    color: '#94A3B8',
                    width: 1,
                    dashArray: 3 // Dotted vertical tracking crosshair line
                }
            }
        },
        yaxis: { 
            tickAmount: 4, 
            max: 8, 
            labels: { 
                offsetX: -15, 
                style: { colors: '#64748B', fontSize: '11px' }, 
                formatter: function(v) {
                    return v === 0 ? '0' : v + ' hrs'; // Removes 'hrs' extension on zero base row
                }
            } 
        },
        grid: { 
            show: false, // Disables background grid lines completely to match the sample layout
            padding: { left: 0, right: 0, top: 0, bottom: 0 }
        },
        stroke: { 
            curve: 'straight', // Gives precise timeline ridges instead of exaggerated smooth bubbles
            width: 1.5 
        }, 
        colors: [primaryTeal, primaryOrange],
        fill: { 
            type: 'solid', // Changes gradient to solid opaque fills
            opacity: 1 
        },
        dataLabels: { enabled: false }, 
        markers: { size: 0 },
        // --- CUSTOM COMPONENT TOOLTIP CARD ---
        tooltip: { 
            enabled: true,
            shared: true,
            theme: 'light', // Sets custom light card background
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                var month = w.globals.categoryLabels[dataPointIndex];
                // Calculates true baseline relative index values
                var val1 = series[0][dataPointIndex];
                var val2 = series[1][dataPointIndex];
                
                return `
                    <div style="padding: 14px; background: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.08); font-family: sans-serif; min-width: 175px;">
                        <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 10px;">${month}</div>
                        <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 6px; color: #64748b;">
                            <span>Creation Time</span>
                            <span style="font-weight: 700; color: #1e293b;">${Math.round(val1)} hrs</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 12px; color: #64748b;">
                            <span>Response Time</span>
                            <span style="font-weight: 700; color: #1e293b;">${Math.round(val2)} hrs</span>
                        </div>
                    </div>
                `;
            }
        }
    }
}


export { 
    employeeDistributionChart, 
    weeklyAttendanceChart, 
    payrollTrendChart, 
    invTotalStockSpark, 
    invValueSpark, 
    invCategoryChart, 
    invStockLevelsChart, 
    invValueChart, 
    crmLeadsGeneratedChart, 
    crmContactSourcesChart,
    posProductSalesChart,
    posSpark1,
    posSpark2,
    posSpark3,
    posSpark4,
    posSalesReturnsChart,
    posCategoriesRadar,
    finRevExpChart,
    finRevenueDonut,
    finProfitSalesChart,
    finExpenseDonut,
    salesRevenueTrendsChart,
    procSpark1,
    procSpark2,
    procSpark3,
    procSpark4,
    procTopSuppliersChart,
    procMonthlySpendChart,
    procSupplierPerfChart,
    procSpendCatChart,
    procOrderStatusChart,
    pjSpark1,
    pjSpark2,
    pjSpark3,
    pjSpark4,
    pjProgressChart,
    resourceChart,
    pjTaskSummaryChart,
    supTicketVolumeChart,
    supSlaPie,
    supSpark1,
    supSpark2,
    supSpark3,
    supSpark4,
    supSatisfactionGauge,
    supResponseRrateChart,
}