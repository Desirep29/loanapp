

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Balance {
  checking: number;
  savings: number;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country?: string;
}

interface Member {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accountNumber: string;
  accountStatus: 'pending' | 'active' | 'suspended' | 'under_review' | 'verified' | 'rejected' | 'closed';
  accountType: 'checking' | 'savings' | 'both';
  balance?: Balance;
  address?: Address;
  dateOfBirth?: string;
  occupation?: string;
  annualIncome?: number;
  governmentId?: string;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  createdAt?: string;
  lastLogin?: string;
}

interface MemberState {
  member: Member | null;
  token: string | null;
}

const initialState: MemberState = {
  member: null,
  token: null,
};



const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setmember: (state, action: PayloadAction<{ member: Member; token: string }>) => {
      state.member = action.payload.member;
      state.token = action.payload.token;
    },
  
    logout: (state) => {
      state.member = null;
      state.token = null;
    },
  },
});

export const { setmember,  logout } = memberSlice.actions;
export default memberSlice.reducer;