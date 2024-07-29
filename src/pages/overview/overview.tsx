// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box, Stack } from '@mui/material'

// ** Custom Component Imports
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'

const Overview = ({ complaintcount }: { complaintcount: any }) => {

    const stats = '64.8k'
    const avatarIcon = 'tabler:credit-card'
    const avatarSize = 42
    const avatarIconSize = '1.625rem'

    return (
        <Grid container spacing={6} sx={{ marginBottom: "0.5rem" }}>
            <Grid item xs={12}>
                <Card >
                    <Grid container xs={12} >
                        <Grid item xs={3} >
                            <Box sx={{ padding: "1.5rem" }}>
                                <Box sx={{ pb: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                                    <Stack>
                                        <CustomAvatar skin='light' color={"primary"} sx={{ width: avatarSize, height: avatarSize, mr: "0.5rem" }}>
                                            <Icon icon={avatarIcon} fontSize={avatarIconSize} />
                                        </CustomAvatar>
                                    </Stack>
                                    <Stack>
                                        <Typography variant='h5'>{stats}</Typography>
                                        <Typography variant='body2'>{"New Reviews"}</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{ padding: "1.5rem" }}>
                                <Box sx={{ pb: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                                    <Stack>
                                        <CustomAvatar skin='light' color={"info"} sx={{ width: avatarSize, height: avatarSize, mr: "0.5rem" }}>
                                            <Icon icon={"tabler:users-group"} fontSize={avatarIconSize} />
                                        </CustomAvatar>
                                    </Stack>
                                    <Stack>
                                        <Typography variant='h5'>{stats}</Typography>
                                        <Typography variant='body2'>{"Open Reviews"}</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{ padding: "1.5rem" }}>
                                <Box sx={{ pb: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                                    <Stack>
                                        <CustomAvatar skin='light' color={"success"} sx={{ width: avatarSize, height: avatarSize, mr: "0.5rem" }}>
                                            <Icon icon={"tabler:devices-check"} fontSize={avatarIconSize} />
                                        </CustomAvatar>
                                    </Stack>
                                    <Stack>
                                        <Typography variant='h5'>{stats}</Typography>
                                        <Typography variant='body2'>{"New Reviews"}</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{ padding: "1.5rem" }}>
                                <Box sx={{ pb: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                                    <Stack>
                                        <CustomAvatar skin='light' color={"error"} sx={{ width: avatarSize, height: avatarSize, mr: "0.5rem" }}>
                                            <Icon icon={"tabler:shield-x"} fontSize={avatarIconSize} />
                                        </CustomAvatar>
                                    </Stack>
                                    <Stack>
                                        <Typography variant='h5'>{complaintcount}</Typography>
                                        <Typography variant='body2'>{"Complaints"}</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Overview
