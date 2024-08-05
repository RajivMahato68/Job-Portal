import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const updateProfileSlice = createSlice({
    name: "updateProfile",
    initialState: {
        loading: false,
        error: null,
        isUpdate: false,
        user: null,
    },
    reducers: {
        updateProfileRequest(state) {
            state.loading = true;
        },
        updateProfileSuccess(state) {
            state.error = null;
            state.loading = false;
            state.isUpdate = true;
        },
        updateProfileFailed(state, action) {
            state.error = action.payload;
            state.loading = false;
            state.isUpdate = false;
        },
        updatePasswordRequest(state) {
            state.loading = true;
        },
        updatePasswordSuccess(state) {
            state.error = null;
            state.loading = false;
            state.isUpdate = true;
        },
        updatePasswordFailed(state, action) {
            state.error = action.payload;
            state.loading = false;
            state.isUpdate = false;
        },
        profileResetAfterUpdate(state) {
            state.error = null;
            state.isUpdate = false;
            state.loading = false;
        },
        getUserRequest(state) {
            state.loading = true;
        },
        getUserSuccess(state, action) {
            state.loading = false;
            state.user = action.payload;
        },
        getUserFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFailed,
    updatePasswordRequest,
    updatePasswordSuccess,
    updatePasswordFailed,
    profileResetAfterUpdate,
    getUserRequest,
    getUserSuccess,
    getUserFailed,
} = updateProfileSlice.actions;

export const updateProfile = (data) => async (dispatch) => {
    dispatch(updateProfileRequest());
    try {
        await axios.put("/api/v1/user/update/profile", data, {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
        });
        dispatch(updateProfileSuccess());
    } catch (error) {
        dispatch(updateProfileFailed(
            error.response.data.message || "Failed to update Profile."
        ));
    }
};

export const updatePassword = (data) => async (dispatch) => {
    dispatch(updatePasswordRequest());
    try {
        await axios.put("/api/v1/user/update/password", data, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        });
        dispatch(updatePasswordSuccess());
    } catch (error) {
        dispatch(updatePasswordFailed(
            error.response.data.message || "Failed to update Password."
        ));
    }
};



export const clearAllUpdateProfileErrors = () => (dispatch) => {
    dispatch(profileResetAfterUpdate());
};

export default updateProfileSlice.reducer;
