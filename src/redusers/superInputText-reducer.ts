type StateType = {}

const InitialState: StateType = {}

type SuperInputTextActionType = SetActionType


export const superInputTextReducer = (state = InitialState, action: SuperInputTextActionType) => {
    switch (action.type) {
        case "DISABLED_BUTTON":{
            return {...state, disabled: action.disabled}
        }
        default:
            return state
    }
}

// Actions
export const setDispatchButton = (disabled: boolean) => {
    return {type: 'DISABLED_BUTTON', disabled} as const
}

//ActionTypes

type SetActionType = ReturnType<typeof setDispatchButton>



// Thunk

