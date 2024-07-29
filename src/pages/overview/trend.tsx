// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { ChartData, ChartOptions } from 'chart.js'
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { Line } from 'react-chartjs-2'

// ** Third Party Styles Import
import 'chart.js/auto'

const Trend = ({ trendobj }: { trendobj: any }) => {

    // ** Hook
    const theme = useTheme()

    // Vars
    const whiteColor = '#fff'
    const lineChartPrimary = '#8479F2'
    const lineChartWarning = '#ff9800'

    const borderColor = theme.palette.divider
    const labelColor = theme.palette.text.disabled
    const legendColor = theme.palette.text.secondary

    const white = whiteColor
    const primary = lineChartPrimary
    const warning = lineChartWarning

    // ** Props
    //   const { white, primary, success, warning, labelColor, borderColor, legendColor } = props

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: { color: labelColor },
                grid: {
                    color: borderColor
                }
            },
            y: {
                min: 0,
                max: 25000,
                ticks: {
                    stepSize: 100,
                    color: labelColor
                },
                grid: {
                    color: borderColor
                }
            }
        },
        plugins: {
            legend: {
                align: 'end',
                position: 'top',
                labels: {
                    padding: 25,
                    boxWidth: 10,
                    color: legendColor,
                    usePointStyle: true
                }
            }
        }
    }

    const data: ChartData<'line'> = {
        labels: trendobj.labels,
        datasets: [
            {
                fill: false,
                tension: 0.5,
                pointRadius: 1,
                label: 'compliments',
                pointHoverRadius: 5,
                pointStyle: 'circle',
                borderColor: primary,
                backgroundColor: primary,
                pointHoverBorderWidth: 5,
                pointHoverBorderColor: white,
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: primary,
                data: trendobj.data1
            },
            {
                fill: false,
                tension: 0.5,
                label: 'complaints',
                pointRadius: 1,
                pointHoverRadius: 5,
                pointStyle: 'circle',
                borderColor: warning,
                backgroundColor: warning,
                pointHoverBorderWidth: 5,
                pointHoverBorderColor: white,
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: warning,
                data: trendobj.data2
            }
        ]
    }


    return (
        <Grid container spacing={6} sx={{marginBottom:"0.5rem"}}>
            <Grid item xs={12}>
                <Card >
                    <Grid container xs={12} >
                        <Line data={data} height={400} options={options} />
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Trend
