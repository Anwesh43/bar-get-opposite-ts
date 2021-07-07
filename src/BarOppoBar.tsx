import React from 'react'
import { useStyle } from './hooks'
import withContainer from './withContainer'

interface BOBProps {
    w : number, 
    h : number, 
    scale : number, 
    onClick : Function
}

const BarOppoBar : React.FC<BOBProps> = (props : BOBProps) => {
    const {parentStyle, barStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <React.Fragment>
            {[0, 1, 2].map((i : number) => (
                <div style = {parentStyle()}>
                    <div key = {`bar_${i}`} style = {barStyle(i)}>
                    </div>
                </div>
            ))}
        </React.Fragment>        
    )
}

export default withContainer(BarOppoBar)