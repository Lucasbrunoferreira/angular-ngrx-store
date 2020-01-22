import { createSelector } from '@ngrx/store';


export const selectFeature = (state) => state.count;

export const currentCountValue = createSelector(selectFeature, (state) => state.count);
export const currenteCountValueMultilpleBy3 = createSelector(selectFeature, (state) => state.count * 3);
