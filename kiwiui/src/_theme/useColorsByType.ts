import { useState, useEffect } from 'react'

import useTheme from './useTheme'

const useColorsByType = (
    type: 'default' | 'primary' | 'secondary' | 'success' | 'warning' = 'default'
) => {

    const theme = useTheme()

    const [color, setColor] = useState(
        [theme.colors.default, theme.colors.defaultAction, theme.colors.defaultText]
    )

    const switchColor = () => {
        let c = theme.colors
        switch (type) {
            case 'primary':
                return [c.primary, c.primaryAction, c.primaryText]
            case 'secondary':
                return [c.secondary, c.secondaryAction, c.secondaryText]
            case 'success':
                return [c.success, c.successAction, c.successText]
            case 'warning':
                return [c.warning, c.warningAction, c.warningText]
            case 'default':
                return [c.default, c.defaultAction, c.defaultText]
            default:
                [c.default, c.defaultAction]
        }
    }

    useEffect(() => {
        let typeColor = switchColor()
        if (typeColor) setColor(typeColor)
    }, [type])

    return color
}

export default useColorsByType