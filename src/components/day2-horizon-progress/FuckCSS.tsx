import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function FuckCSS() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: scrollRef })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <motion.div
        style={{ scaleX: scaleX }}
        className="h-4 bg-green-400 origin-left fixed w-full"
      />
      <div className="h-1/2 w-1/2 m-auto bg-red-200  overflow-hidden">
        <div
          className="text-2xl font-light leading-loose h-full w-full px-4 font-mono overflow-y-scroll"
          ref={scrollRef}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit id expedita enim fugit quasi quas vel dicta, aut tempore
          voluptatum esse est blanditiis rem, odio quia. Facilis aliquam numquam
          blanditiis qui animi et voluptas est dicta quam repellat, error iste
          ex ducimus mollitia ab vel? Soluta repellat totam, deserunt eos,
          maxime nulla reiciendis quis debitis nostrum consequatur praesentium
          omnis consectetur, inventore odit quod delectus beatae atque molestias
          rem vero minima repellendus? Non eligendi impedit esse odio aliquam,
          commodi nisi quam quia eum obcaecati autem. Exercitationem dolores
          blanditiis recusandae, dolore veritatis excepturi ut non, expedita
          nihil praesentium quia veniam aliquam tenetur. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Ullam veritatis accusamus ex
          ducimus, perspiciatis iusto dolorem, dignissimos ipsum sapiente
          commodi quia optio quod? Magni inventore mollitia atque, praesentium
          voluptate sunt quia cupiditate, doloremque nihil culpa molestiae
          quibusdam sint ipsa adipisci doloribus quasi quaerat amet ex,
          assumenda enim quod minus accusamus suscipit repellendus. Labore sunt
          saepe quod consectetur doloribus optio in quidem veritatis, voluptates
          ducimus omnis nisi numquam voluptatibus eius officiis voluptate
          corrupti aliquid amet modi tenetur soluta, deserunt voluptatem neque.
          Cum optio accusantium quam recusandae, nulla laborum sequi rem ea quia
          soluta distinctio error similique quas pariatur laudantium, eaque
          nisi!
        </div>
      </div>
    </>
  )
}
