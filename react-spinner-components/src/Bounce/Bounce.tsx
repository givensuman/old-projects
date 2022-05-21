import React from 'react'

export interface Props {
  color?: string
  bg?: string
  radius?: number
  speed?: number
  size?: number
}

const Ball: React.FC<Props> = ({ color = 'black', bg = 'transparent', radius = 10, speed = 1, size = 200 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ backgroundColor: bg }}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="25"
        r={radius}
        fill={color}
      >
        <animate
          attributeName="cy"
          dur={speed > 0 ? `${1 / speed}s` : `1s`}
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
          keyTimes="0;0.5;1"
          values="23;77;23"
        ></animate>
      </circle>
    </svg>
  )
}

export default Ball
