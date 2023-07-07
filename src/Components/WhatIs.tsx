// import Image from 'next/image'

import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

// export default function WhatIs() {
//   return (
//     <section className="h-screen">
//       <h1 className="h1color text-center">O que é doença de Chagas?</h1>
//       <div className="h-[90vh] grid">
//         <div className="what-is-infos">
//           <Image
//             src="/Triatoma_infestans.png"
//             width={250}
//             height={250}
//             alt="Imagem do inceto: Triatoma infestans"
//           />
//           <p className="pcolor w-[30rem] text-xl">
//             A <span className="font-bold">Doença de Chagas</span> é uma infecção
//             parasitária transmitida pelo bicho-barbeiro que pode apresentar
//             curso clínico bifásico, aguda e crônica. É endêmica em 21 países das
//             Américas, com incidência de 30 mil casos novos por ano, 14.000
//             mortes/ano e 8.000 recém-nascidos infectados durante a gestação.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

export default function WhatIs() {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3]
      }}
    >
      <Experience />
    </Canvas>
  )
}
