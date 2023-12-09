import axios from 'axios';

axios.defaults.baseURL = 'https://657479a3b2fbb8f6509c3bd3.mockapi.io/';

export const fetchCards = async (query, page) => {
  const responce = await axios.get(`/adverts`);
  return responce.data;
};
// export const fetchCards = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
