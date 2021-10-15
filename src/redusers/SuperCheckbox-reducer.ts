
type StateType = {}

const InitialState: StateType = {}

type SuperCheckboxActionType = SetActionType


export const superCheckboxReducer = (state = InitialState, action: SuperCheckboxActionType) => {
    switch (action.type) {
        default:
            return state
    }
}

// Actions
export const setAC = () => {
    return {type: ''} as const
}

//ActionTypes

type SetActionType = ReturnType<typeof setAC>