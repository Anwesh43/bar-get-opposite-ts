import React from 'react'
import { useStyle } from './hooks'
import withContainer from './withContainer.js'

const BarOppoBar = (props) => {
    const {parentStyle, barStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <React.Fragment>
            {[0, 1, 2].map((i) => (
                <div style = {parentStyle()}>
                    <div key = {`bar_${i}`} style = {barStyle(i)}>
                    </div>
                </div>
            ))}
        </React.Fragment>        
    )
}

export default withContainer(BarOppoBar)