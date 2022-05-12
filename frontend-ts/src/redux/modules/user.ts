import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import API from "../../services/API";

export interface User {
    isLogined: boolean,
    access_token: string,
    id: string,
    password: string,
    username: string,
    birth: string,
    signup_date: string
}

const initialState = {
    isLogined: false,
    access_token: "",
    userInfo: {
        id: "",
        password: "",
        username: "",
        birth: "",
        signup_date: ""
    },
}

export const getLogin = createAsyncThunk(
    'user/getLogin',
    async (userInfo: { id: string, pw: string }) => {
        const axiosData = {
            "id": userInfo.id,
            "password": userInfo.pw,
        }
        const {data} = await API.post(
            '/login',
            axiosData,
        );
        return data
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getLogout: (state) => {
            return {...state};
        }

    },
    extraReducers: (builder => {
        builder.addCase(getLogin.fulfilled, (state, action) => {
            state.isLogined = true;
            state.access_token = action.payload.access_token;
        })
    })
})

// Action creators are generated for each case reducer function
// export const { } = userSlice.actions

export default userSlice.reducer