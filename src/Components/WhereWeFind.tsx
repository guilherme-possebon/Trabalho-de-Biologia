import Image from 'next/image'
import { useState } from 'react'
import {
  DivWhereWeFind,
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
  Component6,
  Component7,
  Component8,
  Component9,
  Component10,
  Component11,
  Component12,
  Component13,
  Component14
} from './DivWhereWeFind'

export default function WhereWeFind() {
  const [currentComponent, setCurrentComponent] = useState<string>('')

  const handleClick = (componentName: string) => {
    setCurrentComponent(componentName)
  }
  const renderComponent = (componentName: string) => {
    switch (componentName) {
      case 'component1':
        return Component1()
      case 'component2':
        return Component2()
      case 'component3':
        return Component3()
      case 'component4':
        return Component4()
      case 'component5':
        return Component5()
      case 'component6':
        return Component6()
      case 'component7':
        return Component7()
      case 'component8':
        return Component8()
      case 'component9':
        return Component9()
      case 'component10':
        return Component10()
      case 'component11':
        return Component11()
      case 'component12':
        return Component12()
      case 'component13':
        return Component13()
      case 'component14':
        return Component14()
      default:
        return Component1()
    }
  }
  const widthImages = 40
  const heightImages = 60
  return (
    <section className="h-screen m-1">
      <div className="where-we-found-container">
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component1')}
            className="button-component"
          >
            <Image
              src="/Triatoma_infestans.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Triatoma infestans"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component2')}
            className="button-component"
          >
            <Image
              src="/Panstrongylus_megistus.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Panstrongylus megistus"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component3')}
            className="button-component"
          >
            <Image
              src="/Triatoma_brasiliensis.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Triatoma brasiliensis"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component4')}
            className="button-component"
          >
            <Image
              src="/Triatoma_maculata.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Triatoma maculata"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component5')}
            className="button-component"
          >
            <Image
              src="/Triatoma_pseudomaculata.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Triatoma pseudomaculata"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component6')}
            className="button-component"
          >
            <Image
              src="/Triatoma_rubrovaria.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Triatoma rubrovaria"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component7')}
            className="button-component"
          >
            <Image
              src="/Triatoma_sordida.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Triatoma sordida"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component8')}
            className="button-component"
          >
            <Image
              src="/Triatoma_tibiamaculata.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Triatoma tibiamaculata"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component9')}
            className="button-component"
          >
            <Image
              src="/Triatoma_vitticeps.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Triatoma vitticeps"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component10')}
            className="button-component"
          >
            <Image
              src="/Panstrongylus_geniculatus.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Panstrongylus geniculatus"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component11')}
            className="button-component"
          >
            <Image
              src="/Panstrongylus_lutzi.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Panstrongylus lutzi"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component12')}
            className="button-component"
          >
            <Image
              src="/Rhodnius_neglectus.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Rhodnius neglectus"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component13')}
            className="button-component"
          >
            <Image
              src="/Rhodnius_pictipes.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Rhodnius pictipes"
            />
          </button>
        </DivWhereWeFind>
        <DivWhereWeFind>
          <button
            onClick={() => handleClick('component14')}
            className="button-component"
          >
            <Image
              src="/Rhodnius_robustus.png"
              width={widthImages}
              height={heightImages}
              alt="Imagem do inceto: Rhodnius robustus"
            />
          </button>
        </DivWhereWeFind>
      </div>
      <div className="component-render">
        {currentComponent === '' && renderComponent('component1')}
        {currentComponent === 'component1' && renderComponent('component1')}
        {currentComponent === 'component2' && renderComponent('component2')}
        {currentComponent === 'component3' && renderComponent('component3')}
        {currentComponent === 'component4' && renderComponent('component4')}
        {currentComponent === 'component5' && renderComponent('component5')}
        {currentComponent === 'component6' && renderComponent('component6')}
        {currentComponent === 'component7' && renderComponent('component7')}
        {currentComponent === 'component8' && renderComponent('component8')}
        {currentComponent === 'component9' && renderComponent('component9')}
        {currentComponent === 'component10' && renderComponent('component10')}
        {currentComponent === 'component11' && renderComponent('component11')}
        {currentComponent === 'component12' && renderComponent('component12')}
        {currentComponent === 'component13' && renderComponent('component13')}
        {currentComponent === 'component14' && renderComponent('component14')}
      </div>
    </section>
  )
}
