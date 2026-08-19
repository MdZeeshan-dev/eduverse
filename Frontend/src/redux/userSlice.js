import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// Base API URL
const API_URL = "http://localhost:5000";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) return rejectWithValue("No authentication token found.");

      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch users.",
      );
    }
  },
);

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (_id, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) return rejectWithValue("No authentication token found.");

      const response = await axios.get(`${API_URL}/${_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return {
        ...response.data,
        isBanned: response.data.isBanned || false,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user.",
      );
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  "users/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) return rejectWithValue("No authentication token found.");

      const response = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch current user.",
      );
    }
  },
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, updates, profilePicture }, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) return rejectWithValue("No authentication token found.");

      let formData;
      const headers = { Authorization: `Bearer ${token}` };

      if (profilePicture) {
        formData = new FormData();
        for (const key in updates) {
          formData.append(key, updates[key]);
        }
        formData.append("profilePicture", profilePicture); // Attach the file

        headers["Content-Type"] = "multipart/form-data";
      }

      const response = await axios.put(
        `${API_URL}/${id}`,
        profilePicture ? formData : updates,
        { headers },
      );

      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update user.",
      );
    }
  },
);

const storedUser = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
const storedToken = Cookies.get("token") || null;

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: null,
    currentUser: storedUser,
    token: storedToken,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
