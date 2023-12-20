const variants = {
    bounce: {
        hidden: {
            x: 110,
            y: -200,
            opacity: 0,
            scale: 0
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1
        },
        exit: {
            x: 110,
            y: -190,
            opacity: 0,
            scale: 0
        },
        transition: {
            duration: 0.4,
            scale: {
                type: "spring",
                damping: 17,
            },
        },
    },
    card: {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: (index) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: index * 0.05,
                duration: 0.2,
                scale: {
                    delay: index * 0.05,
                    type: "spring",
                    damping: 18,
                    stiffness: 100,
                },
            }
        }),
        exit: {
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.5,
                scale: {
                    type: "spring",
                    damping: 17,
                },
            }
        },
        onHover: {
            boxShadow: "0 0 25px rgba(0, 0, 0, 0.15)",
            transition: {
                duration: 0.2,

            }
        },
        onTap: {
            scale: 0.8,
            transition: {
                duration: 0.1,
            }
        }
    }
}


export default variants