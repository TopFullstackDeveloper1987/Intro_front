import React, { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Overview from './overview'
import Trend from './trend'
import Trip from './trip'
import Table from './table'
import { useCallback, useEffect } from 'react'
import Axios from 'axios';

const Home = () => {

  const [data, setData] = useState<any>([])
  const [trendobj, setTrendobj] = useState<any>({})
  const [trip, setTrip] = useState<any>({})
  const [show, setShow] = useState<boolean>(false)
  const [complaintcount, setComplaintcount] = useState<number>(0)

  const init = useCallback(async () => {
    const { data } = await Axios.post("http://localhost:908/api/v1/test/getdata")
    const rdata = data
    console.log(rdata)
    if (rdata.status) {
      setData(rdata.data.data)
      setTrendobj(rdata.data.trendobj)
      setTrip(rdata.data.trip)
      setShow(true)
      setComplaintcount(rdata.data.complaintcount)
    }
  }, [])

  useEffect(() => {
    init()
  }, [init])

  return (
    <Grid container spacing={6} padding={"1rem"}>
      {
        show &&
        <>
          <Overview complaintcount={complaintcount} />
          <Trend trendobj={trendobj} />
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Trip trip={trip} />
            </Grid>
            <Grid item xs={6}>
              <Table data={data} />
            </Grid>
          </Grid>
        </>
      }
    </Grid>
  )
}

export default Home
