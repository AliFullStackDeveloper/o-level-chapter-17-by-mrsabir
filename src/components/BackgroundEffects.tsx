import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/lib/ThemeContext'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animFrameRef = useRef<number>(0)
  const { isDark } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const nodeCount = 28
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.6 + 0.2,
    }))

    const maxDist = 180

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const nodes = nodesRef.current
      const [r, g, b] = isDark ? [0, 212, 255] : [0, 140, 200]

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * (isDark ? 0.25 : 0.18)
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      nodes.forEach((node) => {
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4)
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${node.opacity * (isDark ? 0.8 : 0.5)})`)
        grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${node.opacity * (isDark ? 1 : 0.7)})`
        ctx.fill()
      })

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [isDark])

  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ transition: 'background 0.4s ease' }}>
      <div
        className="absolute inset-0"
        style={{ background: 'var(--orb-bg)', transition: 'background 0.4s ease' }}
      />
      <div
        className="absolute inset-0 cyber-grid opacity-100"
        style={{ backgroundSize: '50px 50px' }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse, rgba(0, 212, 255, 0.06) 0%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(0, 150, 255, 0.07) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse, rgba(139, 92, 246, 0.05) 0%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>
  )
}
