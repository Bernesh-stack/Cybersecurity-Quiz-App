import React from 'react'

type ShinyTextProps = {
  children: React.ReactNode
  className?: string
}

const ShinyText: React.FC<ShinyTextProps> = ({ children, className = '' }) => {
  return (
    <>
      <style>
        {`
          @keyframes shine {
            0% {
              background-position: 200% center;
            }
            100% {
              background-position: -200% center;
            }
          }

          .shiny-text {
            background: linear-gradient(90deg, #ffffff, #888888, #ffffff);
            background-size: 200% auto;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: shine 2s linear infinite;
          }
        `}
      </style>

      <p
        className={`shiny-text text-base font-normal inline-block relative ${className}`}
      >
        {children}
      </p>
    </>
  )
}

export default ShinyText
