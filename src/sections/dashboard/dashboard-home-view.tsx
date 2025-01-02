"use client";

import React from "react";
import {
  Grid,
  Card,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useGetSummaryQuery } from "@/redux/reducers/order/orderApi";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashboardHomeView = () => {
  const { data, isLoading, error } = useGetSummaryQuery({});

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error fetching data.</Typography>;
  }

  const { summary, chartData, lastWeekOrders } = data?.data || {};

  const barChartData = {
    labels: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    datasets: [
      {
        label: "Weekly Sales",
        data: chartData?.salesOverview.map((item) => item.totalSales) || [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const pieChartData = {
    labels: chartData?.categoryDistribution.map((item) => item.category) || [],
    datasets: [
      {
        label: "Category Distribution",
        data: chartData?.categoryDistribution.map((item) => item.count) || [],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      <h2 className="mb-5">Last week Overview</h2>

      {/* Summary Cards */}
      <Grid container spacing={3}>
        {summary &&
          Object.entries(summary).map(([key, value]) => (
            <Grid item xs={12} sm={6} md={3} key={key}>
              <Card
                style={{
                  padding: "20px",
                  textAlign: "center",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography variant="h6" color="textSecondary">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Typography>
                <Typography variant="h4" color="primary">
                  {value}
                </Typography>
              </Card>
            </Grid>
          ))}
      </Grid>

      {/* Bar Chart */}
      <div style={{ margin: "20px 0" }} className="w-full">
        <Typography variant="h6" gutterBottom>
          Sales Overview
        </Typography>
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Bar data={barChartData} />
        </div>
      </div>

      {/* Pie Chart */}
      <div style={{ margin: "20px 0" }} className="max-w-md">
        <Typography variant="h6" gutterBottom>
          Category Distribution
        </Typography>
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Pie data={pieChartData} />
        </div>
      </div>

      {/* Recent Orders Table */}
      <div style={{ margin: "20px 0" }}>
        <Typography variant="h6" gutterBottom>
          Recent Orders
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lastWeekOrders?.map((order) => (
                <TableRow key={order?._id}>
                  <TableCell>{order?._id}</TableCell>
                  <TableCell>{order?.name}</TableCell>
                  <TableCell>{order?.totalPrice}</TableCell>
                  <TableCell>
                    {new Date(order?.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DashboardHomeView;
