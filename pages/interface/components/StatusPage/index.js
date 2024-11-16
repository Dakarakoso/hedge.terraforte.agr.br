import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Divider,
} from "@mui/material";

function StatusPage() {
  const [statusData, setStatusData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch("/api/v1/status");
        if (!response.ok) throw new Error("Failed to fetch status");
        const data = await response.json();
        setStatusData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  const { updated_at, dependencies } = statusData;
  const { database } = dependencies || {};

  return (
    <Box width="100%" maxWidth={800}>
      <Typography variant="h4" gutterBottom>
        System Status
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Last Updated: {new Date(updated_at).toLocaleString()}
      </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Database</Typography>
              <Typography variant="body2" color="textSecondary">
                Version: {database?.version || "N/A"}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Max Connections: {database?.max_connections || "N/A"}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Opened Connections: {database?.opened_connections || "N/A"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StatusPage;
