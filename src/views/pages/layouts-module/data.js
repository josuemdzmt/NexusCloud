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

export { employeeDistributionChart, weeklyAttendanceChart, payrollTrendChart  }