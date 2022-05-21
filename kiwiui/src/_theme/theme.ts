const theme = {
    colors: {
        default: '#f2f3f4',
        defaultAction: '#e4e5e6',
        defaultText: '#424342',
        primary: '#88E9F3',
        primaryAction: '#81DBE6',
        primaryText: '#424342',
        secondary: '#FEEEAF',
        secondaryAction: '#F2E3A7',
        secondaryText: '#424342',
        success: '#83DD4E',
        successAction: '#7BD149',
        successText: '#424342',
        warning: '#DD4B13',
        warningAction: '#D14913',
        warningText: '#fffefe',
        disabled: '#c5c5c5',
        disabledText: '#fffefe',
        background: '#FFFEFE',
        text: '#424342'
    },
    sizingUnit: '0.5em',
    fontFamily: `'Roboto', sans-serif;'`
}

type RecursivePartial<T> = {
    [P in keyof T]? : RecursivePartial<T[P]>
}

type ThemeType = RecursivePartial<typeof theme>

export { ThemeType, theme as default }
