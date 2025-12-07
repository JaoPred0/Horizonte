import { motion, useMotionValue, useSpring } from "framer-motion";

export default function LogoMagnet() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // suaviza o movimento
    const springX = useSpring(x, { stiffness: 150, damping: 10 });
    const springY = useSpring(y, { stiffness: 150, damping: 10 });

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();

        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        x.set(offsetX * 0.15);
        y.set(offsetY * 0.15);
    }

    function reset() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className="flex items-center justify-center"
        >
            <motion.div
                style={{ x: springX, y: springY }}
                className="
          w-48 h-48
          md:w-56 md:h-56
          lg:w-64 lg:h-64
          rounded-full
          flex items-center justify-center
          select-none
        "
            >
                <div className="hover-3d">
                    {/* content */}
                    <figure className="max-w-100 rounded-2xl">
                        <img src="./logo.png" alt="3D card" />
                    </figure>
                    {/* 8 empty divs needed for the 3D effect */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </motion.div>
        </motion.div>
    );
}
