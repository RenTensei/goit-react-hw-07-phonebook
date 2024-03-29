import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  /**
   * we dont need to keep contacts in state anymore, because RTKQ
   */

  // contacts: {
  //   items: [],
  //   isLoading: false,
  //   error: null,
  // },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    /**
     * This logic was moved to contactsApi slice
     */

    // addContact(state, action) {
    //   state.contacts.items.push(action.payload);
    // },
    // deleteContact(state, action) {
    //   state.contacts.items = state.contacts.items.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { updateFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
