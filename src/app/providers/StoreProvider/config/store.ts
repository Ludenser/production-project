import {
    AnyAction, configureStore, ReducersMapObject, ThunkDispatch,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { ReduxStoreWithManager, StateSchema } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
): ReduxStoreWithManager {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        ...asyncReducers,
    };

    const reducerManager = createReducerManager(rootReducers);
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    }) as ReduxStoreWithManager;

    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'] & ThunkDispatch<StateSchema, any, AnyAction>;

export default createReduxStore;
