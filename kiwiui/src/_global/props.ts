import { CSSObject } from "@emotion/react"

type Size = string
// type Size = number | string

type GlobalProps = {
    // Spacing
    m?: Size,
    mx?: Size,
    my?: Size,
    mt?: Size,
    mr?: Size,
    mb?: Size,
    ml?: Size,

    p?: Size,
    px?: Size,
    py?: Size,
    pt?: Size,
    pr?: Size,
    pb?: Size,
    pl?: Size,

    // Sizing
    width?: Size,
    height?: Size,
    minWidth?: Size,
    minHeight?: Size,
    maxWidth?: Size,
    maxHeight?: Size,

    csx?: string
}

export default GlobalProps