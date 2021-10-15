
type StateType = {}

const InitialState: StateType = {}

type SuperButtonActionType = SetActionType


export const superButtonReducer = (state = InitialState, action: SuperButtonActionType) => {
    switch (action.type) {

        default:
            return state
    }
}

// Actions
export const AC = () => {
    return {type: 'AC'} as const
}

//ActionTypes

type SetActionType = ReturnType<typeof AC>

// Thunk

