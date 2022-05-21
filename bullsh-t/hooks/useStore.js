import { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext(null)
const useStore = () => useContext(StoreContext)

const StoreProvider = ({ children, value }) => {

    const reducer = (state, action) => {
        return {
            ...state,
            [action.type]: {
                ...state[action.type],
                state: action.payload
            }
        }
    }

    const state = Object.entries(value).reduce(
        (state, [key, value]) => ({
            ...state,
            [key]: {
            state: value,
            set: (payload) => dispatch({ type: key, payload: payload })
            }
        }), {})

    const [store, dispatch] = useReducer(reducer, state)

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreProvider, useStore as default }