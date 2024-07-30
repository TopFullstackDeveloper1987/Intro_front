// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { ChartData, ChartOptions } from 'chart.js'
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { Line } from 'react-chartjs-2'

// ** Third Party Styles Import
import 'chart.js/auto'
import { Button, Stack, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { useEffect, useRef } from 'react'

const Trend = ({ trendobj }: { trendobj: any }) => {

    const chartRef = useRef(null);
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
                max: 12500,
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
        },
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

    const handleDownload = () => {
        const chart: any = chartRef.current;
        const base64Image = chart.toBase64Image();
        const link = document.createElement('a');
        link.download = 'myChart.png';
        link.href = base64Image;
        link.click();
    };

    return (
        <Grid container spacing={6} sx={{ marginBottom: "0.5rem" }}>
            <Grid item xs={12}>
                <Card >
                    <Stack display={"flex"} flexDirection={"row"} alignItems={"center"} padding={"0.5rem"}>
                        <Typography display={"flex"}>
                            Distribution of Compliments/Complaints over time
                        </Typography>
                        <Button onClick={handleDownload} sx={{ display: "flex" }} >
                            <Icon icon={"tabler:download"} fontSize={"1.625rem"} />
                        </Button>
                    </Stack>
                    <Grid container xs={12} >
                        <Line ref={chartRef} data={data} height={400} options={options} />
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Trend
