// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

// ** Component Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'
import { useRef } from 'react'

const Trip = ({ trip }: { trip: any }) => {

    const chartRef = useRef(null);

    // ** Hook
    const theme = useTheme()

    const donutColors = {
        series1: '#fdd835',
        series2: '#00d4bd',
        series3: '#826bf8',
        series4: '#1FD5EB',
        series5: '#ffa1a1',
        series6: '#ffe700',
        series7: '#dfa1a1',
    }

    const options: ApexOptions = {
        stroke: { width: 0 },
        labels: trip.labels,
        colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
        dataLabels: {
            enabled: true,
            formatter: (val: string) => `${parseInt(val, 10)}%`
        },
        legend: {
            position: 'bottom',
            markers: { offsetX: -3 },
            labels: { colors: theme.palette.text.secondary },
            itemMargin: {
                vertical: 3,
                horizontal: 10
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            fontSize: '1.2rem'
                        },
                        value: {
                            fontSize: '1.2rem',
                            color: theme.palette.text.secondary,
                            formatter: (val: string) => `${parseInt(val, 10)}`
                        },
                        total: {
                            show: true,
                            fontSize: '1.2rem',
                            label: trip.labels[0],
                            formatter: () => trip.data[0],
                            color: theme.palette.text.primary
                        }
                    }
                }
            }
        },
        responsive: [
            {
                breakpoint: 992,
                options: {
                    chart: {
                        height: 380
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            },
            {
                breakpoint: 576,
                options: {
                    chart: {
                        height: 320
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: true,
                                    name: {
                                        fontSize: theme.typography.body1.fontSize
                                    },
                                    value: {
                                        fontSize: theme.typography.body1.fontSize
                                    },
                                    total: {
                                        fontSize: theme.typography.body1.fontSize
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ],
        chart: {
            toolbar: {
                show: true,
                export: {
                    svg: {
                        filename: 'chart-svg',
                        // width: 800,
                        // height: 600
                    },
                    png: {
                        filename: 'chart-png',
                        // width: 800,
                        // height: 600
                    }
                }

            }
        }
    }

    return (
        <Card >
            <Box >
                <ReactApexcharts ref={chartRef} type='donut' height={400} toolbar={toolbar} options={options} series={trip.data} />
            </Box>
        </Card>
    )
}

export default Trip