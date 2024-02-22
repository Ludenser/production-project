import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const { message } = error;
                const isNetworkError = message.includes('Network Error');

                return rejectWithValue(isNetworkError
                    ? `${message}, (Сервер авторизации не работает)`
                    : i18n.t('Incorrect login or password'));
            }
            return rejectWithValue(i18n.t('An unexpected error occurred'));
        }
    },
);
