import { useEffect, useRef, useState } from 'react'

export const NameCard = ({ nameObj, onLike, onDiscard, isTop }) => {
    const SWIPE_THRESHOLD = 120
    const [translateX, setTranslateX] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [isLeaving, setIsLeaving] = useState(false)
    const startXRef = useRef(null)
    const elRef = useRef(null)

    useEffect(() => {
        // reset when name changes
        setTranslateX(0)
        setIsDragging(false)
        setIsLeaving(false)
    }, [nameObj])

    const handlePointerDown = (e) => {
        if (!isTop) return
        startXRef.current = e.clientX || e.touches?.[0]?.clientX
        setIsDragging(true)
        elRef.current?.setPointerCapture?.(e.pointerId)
    }

    const handlePointerMove = (e) => {
        if (!isTop || !isDragging) return
        const currentX = e.clientX || e.touches?.[0]?.clientX
        const dx = currentX - startXRef.current
        setTranslateX(dx)
    }

    const triggerAction = (toRight) => {
        setIsLeaving(true)
        setTranslateX(toRight ? 800 : -800)
        setTimeout(() => {
            if (toRight) onLike(nameObj)
            else onDiscard(nameObj)
            // cleanup handled by parent
        }, 300)
    }

    const handlePointerUp = (e) => {
        if (!isTop) return
        setIsDragging(false)
        if (Math.abs(translateX) > SWIPE_THRESHOLD) {
            triggerAction(translateX > 0)
        } else {
            // volver al centro
            setTranslateX(0)
        }
    }

    const likeOpacity = Math.max(0, Math.min(1, translateX / SWIPE_THRESHOLD))
    const dislikeOpacity = Math.max(0, Math.min(1, -translateX / SWIPE_THRESHOLD))

    return (
        <div
            ref={elRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            className={`card absolute left-1/2 -translate-x-1/2 w-full max-w-xs rounded-3xl p-8 bg-white/95 shadow-2xl flex flex-col items-center justify-center text-center`}
            style={{
                transform: `translateX(${translateX}px) rotate(${translateX / 18}deg) ${isLeaving ? 'scale(0.98)' : 'scale(1)'} `,
                transition: isDragging ? 'none' : 'transform 300ms ease',
                touchAction: 'pan-y'
            }}
        >
            <div className="absolute inset-0 rounded-3xl pointer-events-none">
                <div
                    className="overlay-like absolute left-4 top-4 px-3 py-1 rounded-full text-sm font-bold text-white"
                    style={{ opacity: likeOpacity }}
                >
                    ❤️ ME GUSTA
                </div>

                <div
                    className="overlay-dislike absolute right-4 top-4 px-3 py-1 rounded-full text-sm font-bold text-white"
                    style={{ opacity: dislikeOpacity }}
                >
                    ❌ DESCARTAR
                </div>
            </div>

            <h2 className="text-5xl font-extrabold leading-none select-none">{nameObj.name}</h2>

            <p className="mt-4 text-xs text-gray-500">Desliza a la derecha para guardar, a la izquierda para descartar</p>
        </div>
    )
}

export default NameCard
