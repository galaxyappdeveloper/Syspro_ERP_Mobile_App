import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DashboardPermissionData: [],
  dashboardTotal: [],
  loading: false,
  error: null,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setDashboardPermissionData: (state, { payload }) => {
      state.DashboardPermissionData = payload;
    },

    setDashboardTotal: (state, { payload }) => {
      if (state.dashboardTotal.length > 0) {
        state.dashboardTotal = [...state.dashboardTotal, ...payload];
      } else {
        state.dashboardTotal = payload;
      }
    },

    // setDashboardTotal: (state, { payload }) => {
    //   const { data, syskey } = payload;
    //   // console.log("payload : ", JSON.stringify(payload));
    //   const permData = [...state.DashboardPermissionData];

    //   const permission = permData.map((section) => {
    //     return {
    //       ...section,
    //       Data: section.Data.map((widget) => {
    //         if (widget.SYSKey === syskey) {
    //           return {
    //             ...widget,
    //             totalCount: data[0]?.Total ?? 0,
    //           };
    //         }
    //         return widget;
    //       }),
    //     };
    //   });
    //   console.log(
    //     "state updated data in dahboard permission  : ",
    //     JSON.stringify(permission)
    //   );
    //   state.DashboardPermissionData = permData;
    // },
  },
});

export const {
  setDashboardPermissionData,
  setDashboardLoading,
  setDashboardTotal,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
