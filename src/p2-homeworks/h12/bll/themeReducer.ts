const initState:ThemeReducerInitStateType = {
    theme: 'some'
};

export type ValueThemeType = 'dark' | 'red' | 'some' | 'gradient' | 'rainbow' | 'tablecloth' | 'flower'

export type ThemeReducerInitStateType = {
    theme:ValueThemeType
}
type themeAT = {
    type: 'CHANGE-THEME'
    theme: ValueThemeType
}

type ActionType = themeAT

export const themeReducer = (state = initState, action: ActionType): ThemeReducerInitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return state={...state, theme:action.theme};
        }
        default: return state;
    }
};


export const changeThemeAC = (theme:ValueThemeType): themeAT => ({type: 'CHANGE-THEME', theme}); // fix any