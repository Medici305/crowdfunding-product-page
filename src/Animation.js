export const slide = {
    hide: {
        opacity: 0,
        x: '-100%',
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        x: 500,
        transition: {
            duration: 2
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