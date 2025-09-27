import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API call
export const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchData',
  async () => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          stats: {
            verifiedDrugs: 24563,
            complianceRate: 98.7,
            blockchainRecords: 45892,
            emergencyAlerts: 3,
          },
          activities: [
            { id: 1, type: 'New Drug Batch', description: 'Manufacturer → Distributor', batch: 'BT-7842', time: '2 min ago' },
            { id: 2, type: 'Quality Check', description: 'Lab Results Approved', batch: 'Passed', time: '15 min ago' },
            { id: 3, type: 'Shipment Delivered', description: 'To City Pharmacy', batch: 'ORD-8921', time: '1 hour ago' },
          ],
          alerts: [
            { id: 1, type: 'Recall Notice', description: 'Batch #BT-5621 - Quality concern', severity: 'High' },
            { id: 2, type: 'License Expiring', description: 'Distributor #DIS-421 - 15 days', severity: 'Medium' },
          ],
          drugs: [
            { id: 1, name: 'Amoxicillin', dosage: '500mg Capsule', batch: 'BT-7842', manufacturer: 'PharmaCorp', location: 'Central Distributor', status: 'In Transit', expiry: 'Dec 2025' },
            { id: 2, name: 'Lisinopril', dosage: '10mg Tablet', batch: 'BT-6721', manufacturer: 'MediLife', location: 'City Pharmacy', status: 'Delivered', expiry: 'Mar 2026' },
            { id: 3, name: 'Insulin', dosage: '100 IU/mL', batch: 'BT-5621', manufacturer: 'BioGen', location: 'Warehouse', status: 'Recalled', expiry: 'Aug 2025' },
          ],
        });
      }, 1000);
    });
  }
);

const initialState = {
  stats: {
    verifiedDrugs: 0,
    complianceRate: 0,
    blockchainRecords: 0,
    emergencyAlerts: 0,
  },
  activities: [],
  alerts: [],
  drugs: [],
  status: 'idle',
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.stats = action.payload.stats;
        state.activities = action.payload.activities;
        state.alerts = action.payload.alerts;
        state.drugs = action.payload.drugs;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;