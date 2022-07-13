import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './reducer';
export interface AppState {
  [fromCounter.counterFeatureKey]: fromCounter.State;
}

export const reducers = {
  [fromCounter.counterFeatureKey]: fromCounter.reducer,
};

// export interface AppStateCopy {
//   counter: {
//     count: number;
//   };
// }
