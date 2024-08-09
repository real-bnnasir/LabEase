import React from 'react'
import BarChart from './Component/BarChart';
import { Box, Grid } from '@mui/material';
import DefaultCard from './Component/DefaultCard';
import { AiTwotoneExperiment } from 'react-icons/ai';
import { FaDatabase, FaTasks } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';
import { TbReportAnalytics } from 'react-icons/tb';
import DoughnutChart from './Component/DoughnutChart';
import { Card } from 'reactstrap';
import LineChart from './Component/LineChart';
import TableContent from './Component/TableContent';
import Semi_Dashboard from './Component/Semi_Dashboard'

const Dashboard = () => {
  const chartHeight = '400px';
  return (
    <Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={7}>
            <BarChart />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultCard
                  title='Experiments'
                  description=' + 3.00; this week'
                  value='200%'
                  bgcolor='#002D62'
                  iconBgColor='#1da1f2'
                  typocolor='white'
                  descriptionbg='#1da1f2'
                  icon={<AiTwotoneExperiment style={{ fontSize: '25px' }} />}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultCard
                  title='Tasks'
                  description='+ 5.00; this week'
                  value='7%'
                  bgcolor='#1da1f2'
                  iconBgColor='#002D62'
                  descriptionbg='#002D62'
                  descriptioncolor='white'
                  icon={<FaTasks style={{ fontSize: '25px' }} />}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultCard
                  title='Data Stored'
                  description='+ 30.00; this week'
                  value='50%'
                  bgcolor='#1da1f2'
                  iconBgColor='#002D62'
                  descriptionbg='#002D62'
                  descriptioncolor='white'
                  icon={<FaDatabase style={{ fontSize: '25px' }} />}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultCard
                  title='Report'
                  description='+ 35.00; this week'
                  value='90%'
                  bgcolor='#002D62'
                  iconBgColor='#1da1f2'
                  typocolor='white'
                  descriptionbg='#1da1f2'
                  icon={<TbReportAnalytics style={{ fontSize: '25px' }} />}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Semi_Dashboard />
      </Box>
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box style={{ height: chartHeight }}>
                  <LineChart />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box style={{ height: chartHeight }}>
                  <DoughnutChart />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Card style={{ height: `calc(${chartHeight} * 2 + 24px)` }}> {/* 24px is for the spacing */}
              <TableContent />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* <Box mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <Grid item xs={12} lg={5}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultCard
                    title='Experiments'
                    description=' + 3.00; this week'
                    value='200%'
                    bgcolor='#002D62'
                    iconBgColor='#1da1f2'
                    typocolor='white'
                    descriptionbg='#1da1f2'
                    icon={<AiTwotoneExperiment style={{ fontSize: '25px' }} />}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultCard
                    title='Tasks'
                    description='+ 5.00; this week'
                    value='7%'
                    bgcolor='#1da1f2'
                    iconBgColor='#002D62'
                    descriptionbg='#002D62'
                    descriptioncolor='white'
                    icon={<FaTasks style={{ fontSize: '25px' }} />}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={7}>
            <DoughnutChart />
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  )
}

export default Dashboard