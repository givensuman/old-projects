import GlobalProps from './props'

const handleGlobalProps = (props: GlobalProps) => {
    return [
        props.m && `margin: ${props.m}`,
        props.mx && `margin-left: ${props.mx}; margin-right: ${props.mx}`,
        props.my && `margin-top: ${props.my}; margin-bottom: ${props.my}`,
        props.mt && `margin-top: ${props.mt}`,
        props.mr && `margin-right: ${props.mr}`,
        props.mb && `margin-bottom: ${props.mb}`,
        props.ml && `margin-left: ${props.ml}`,

        props.p && `padding: ${props.p}`,
        props.px && `padding-left: ${props.px}; padding-right: ${props.px}`,
        props.py && `padding-top: ${props.py}; padding-bottom: ${props.py}`,
        props.pt && `padding-top: ${props.py}`,
        props.pr && `padding-right: ${props.pr}`,
        props.pb && `padding-bottom: ${props.pb}`,
        props.pl && `padding-left: ${props.pl}`,

        props.width && `width: ${props.width}`,
        props.height && `height: ${props.height}`,
        props.minWidth && `min-width: ${props.minWidth}`,
        props.minHeight && `min-height: ${props.minHeight}`,
        props.maxWidth && `max-width: ${props.maxWidth}`,
        props.maxHeight && `max-height: ${props.maxHeight}`,

        props.csx && props.csx

    ].join(';')
}

export default handleGlobalProps