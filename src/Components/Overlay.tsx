import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState
} from 'react'

const Section = (props: {
  right?: boolean
  children: ReactFragment
  opacity: number
}) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? 'items-end' : 'items-start'
      }`}
      style={{
        opacity: props.opacity
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
        </div>
      </div>
    </section>
  )
}

export function Overlay() {
  const scroll = useScroll()
  const [opacityFirstSection, setOpacityFirstSection] = useState(1)
  const [opacitySecondSection, setOpacitySecondSection] = useState(2)
  const [opacityLastSection, setOpacityLastSection] = useState(3)

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3))
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3))
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3))
  })
  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-serif text-2xl">Hello World</h1>
          <p className="mt-3">Welcome to my beatuful</p>
          <p className="leading-9">Know:</p>
          <ul>
            <li>How to code</li>
            <li>How to learn</li>
            <li>How to deliver</li>
          </ul>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-serif text-2xl">Hello World</h1>
          <p className="mt-3">Welcome to my beatuful</p>
          <p className="leading-9">Know:</p>
          <ul>
            <li>How to code</li>
            <li>How to learn</li>
            <li>How to deliver</li>
          </ul>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-serif text-2xl">Hello World</h1>
          <p className="mt-3">Welcome to my beatuful</p>
          <p className="leading-9">Know:</p>
          <ul>
            <li>How to code</li>
            <li>How to learn</li>
            <li>How to deliver</li>
          </ul>
        </Section>
      </div>
    </Scroll>
  )
}
