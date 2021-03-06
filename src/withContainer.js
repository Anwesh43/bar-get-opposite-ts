import React from 'react'
import { useAnimatedScale, useDimension } from './hooks'

const withContainer = (MainComponent) => {
    return () => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const props = {
            scale, 
            onClick, 
            w, 
            h
        }
        return (
            <MainComponent {...props}>
            </MainComponent>
        )
    }
}

export default withContainer