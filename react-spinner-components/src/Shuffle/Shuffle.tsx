import React from 'react'

export interface Props {
  colors?: string[]
  bg?: string
  scale?: number
  speed?: number
  size?: number
}

const Shuffle = ({
    colors = ['black', 'blue', 'black'],
    bg = 'transparent',
    scale = 30
}: Props) => {
    console.log(colors.map(color => color))
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ background: bg }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
        {colors.map(color => 
                <rect
                fill={color}
                x="15"
                y="15"
                width={scale}
                height={scale}
                rx="3"
                ry="3"
            >
                <animate
                attributeName="x"
                dur="2s"
                repeatCount="indefinite"
                keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
                values="15;55;55;55;55;15;15;15;15"
                begin="-1.8333333333333333s"
                ></animate>
                <animate
                attributeName="y"
                dur="2s"
                repeatCount="indefinite"
                keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
                values="15;55;55;55;55;15;15;15;15"
                begin="-1.3333333333333333s"
                ></animate>
            </rect>
        )}
    </svg>
  )
}

export default Shuffle