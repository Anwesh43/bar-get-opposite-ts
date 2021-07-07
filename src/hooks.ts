import {useState, useEffect, CSSProperties} from 'react'

const scGap : number = 0.02 
const delay : number = 20 

export const useAnimatedScale = () => {

    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
                
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const barW : number = Math.min(w, h) / 10 
    const barH : number = barW / 3
    const sf : number = Math.sin(scale * Math.PI)
    const position = 'absolute'
    return {
        parentStyle() : CSSProperties {
            const left = `${w / 2}px`
            const top = `${h / 2}px`
            return {
                position, 
                left, 
                top 
            }
        }, 
        barStyle(i : number) {
            const ji : number = Math.floor((i / 2))
            const ai : number = Math.floor((i + 1) / 2)
            const left = `${-barW / 2 + barW * ai}px`
            const top = `${-barH / 2 + h * .5 * (1 - sf)}px`
            const transform = `rotate(${180 * ji}deg)`
            const width = `${-barW}px`
            const height = `${-barH}px`
            const background = 'indigo'
            return {
                position, 
                left, 
                top, 
                transform, 
                width, 
                height,
                background
            }
        }
    }
}