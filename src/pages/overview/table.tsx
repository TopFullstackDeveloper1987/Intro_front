import { Card, Grid, Typography } from "@mui/material"
import CustomChip from 'src/@core/components/mui/chip'

const Table = ({ data }: { data: any }) => {

    return (
        <Card sx={{ display: "block", padding: "2rem" }}>
            <Typography>
                Reviewes
            </Typography>
            {
                data.map((item: any, i: number) => (
                    <Grid key={i} sx={{ padding: '1rem', border: "1px solid", borderRadius: "10px",marginBottom:"0.5rem" }}>
                        <Grid container>
                            <Grid xs={10}>

                            </Grid>
                            <Grid xs={2}>

                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid xs={9}>
                                <Typography sx={{fontSize:"0.9rem"}}>
                                    Review:
                                </Typography>
                                <Typography sx={{fontSize:"0.7rem"}}>
                                    {item.review.slice(0,100)}...
                                </Typography>
                            </Grid>
                            <Grid xs={3} display={"flex"}  alignItems={"center"} justifyContent={"end"} >
                                {
                                    item.Sentiment === "Positive" ?
                                        <CustomChip label={"Positive"} skin='light' color='success' /> :
                                        <CustomChip label={"Negative"} skin='light' color='error' />
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                ))
            }
        </Card>
    )
}

export default Table