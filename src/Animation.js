export const pageTransition = {
    hidden: {
        opacity: 0,
        y: '100%',
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            type: 'spring',
            stiffness: 50,
            delay: 1
        }
    },
    exit: {
        opacity: 0,
        y: '100%',
        transition: {
            duration: 2
        }
    }
}

export const logoAnim = {
    hidden: {
        x: '-100%',
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            type: 'spring',
            delay: .6,
        }
    },
}

export const navbarAnim = {
    hidden: {
        x: '100%',
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            type: 'spring',
            delay: .6,
        }
    }
}

export const fade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: .50,
            ease: 'anticipate',
            when: 'beforeChildren',
            type: 'spring'
        }
    }
}

export const menuAnim = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            duration: 1,
            ease: 'anticipate',
            staggerChildren: .25
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: .5
        }
    }
}

export const NavAnim = {
    hidden: {
        opacity: 0,
        scale: 1.2
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.2,
        }
    }
}