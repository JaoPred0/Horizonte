import React from 'react'
import Orb from './Orb'

export const OrbBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute inset-0 w-full h-full scale-150 sm:scale-125 md:scale-110">
                <Orb
                    hoverIntensity={1.5}
                    rotateOnHover
                    hue={0}
                    forceHoverState={false}
                    backgroundColor="#0F172A"
                />
            </div>
            {/* Overlay gradiente melhorado */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-[#020109]/60 to-[#020109]/90"></div>

            {/* Partículas flutuantes */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float-slow"></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-float-slower"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-medium"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-float-fast"></div>
            </div>
        </div>
    )
}
export default OrbBackground;