import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { useState } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Slide() {
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
  return (
    <section className="h-screen m-1">
      <Swiper
        slidesPerView={14}
        spaceBetween={10}
        className="border-2 rounded-md"
      >
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component1')}>
              <Image
                src="/Triatoma_infestans.png"
                fill
                alt="Imagem do inceto: Triatoma infestans"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component2')}>
              <Image
                src="/Panstrongylus_megistus.png"
                fill
                alt="Imagem do inceto: Panstrongylus megistus"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component3')}>
              <Image
                src="/Triatoma_brasiliensis.png"
                fill
                alt="Imagem do inceto: Triatoma brasiliensis"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component4')}>
              <Image
                src="/Triatoma_maculata.png"
                fill
                alt="Imagem do inceto: Triatoma maculata"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component5')}>
              <Image
                src="/Triatoma_pseudomaculata.png"
                fill
                alt="Imagem do inceto: Triatoma pseudomaculata"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component6')}>
              <Image
                src="/Triatoma_rubrovaria.png"
                fill
                alt="Imagem do inceto: Triatoma rubrovaria"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component7')}>
              <Image
                src="/Triatoma_sordida.png"
                fill
                alt="Imagem do inceto: Triatoma sordida"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component8')}>
              <Image
                src="/Triatoma_tibiamaculata.png"
                fill
                alt="Imagem do inceto: Triatoma tibiamaculata"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component9')}>
              <Image
                src="/Triatoma_vitticeps.png"
                fill
                alt="Imagem do inceto: Triatoma vitticeps"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component10')}>
              <Image
                src="/Panstrongylus_geniculatus.png"
                fill
                alt="Imagem do inceto: Panstrongylus geniculatus"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component11')}>
              <Image
                src="/Panstrongylus_lutzi.png"
                fill
                alt="Imagem do inceto: Panstrongylus lutzi"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component12')}>
              <Image
                src="/Rhodnius_neglectus.png"
                fill
                alt="Imagem do inceto: Rhodnius neglectus"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component13')}>
              <Image
                src="/Rhodnius_pictipes.png"
                fill
                alt="Imagem do inceto: Rhodnius pictipes"
              />
            </button>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <button onClick={() => handleClick('component14')}>
              <Image
                src="/Rhodnius_robustus.png"
                fill
                alt="Imagem do inceto: Rhodnius robustus"
              />
            </button>
          </>
        </SwiperSlide>
      </Swiper>
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

const widthConst = 800
const heightConst = 800

const Component1 = () => {
  return (
    <>
      <h1 className="name-of-bug">Triatoma infestans</h1>
      <div className="components">
        <Image
          src="/triatoma_infestansF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Triatoma infestans' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 21 a 29 mm.
          <br />
          Domiciliado ainda possui pequenos focos residuais no Rio Grande do Sul
          e Bahia.
          <br />
          Risco de reintrodução da espécie no Paraná.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component2 = () => {
  return (
    <>
      <h1 className="name-of-bug">Panstrongylus megistus</h1>
      <div className="components">
        <Image
          src="/Panstrongylus_megistusF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Panstrongylus megistus' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 26 a 38 mm.
          <br />
          Possui potencial para domiciliação.
          <br />
          Presente em peridomicílios e na área silvestre.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component3 = () => {
  return (
    <>
      <h1 className="name-of-bug">Triatoma brasiliensis</h1>
      <div className="components">
        <Image
          src="/Triatoma_brasiliensisF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Triatoma brasiliensis' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 22 a 25,5 mm.
          <br />
          Domicílio, peridomicílio e silvestre.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component4 = () => {
  return (
    <>
      <h1 className="name-of-bug">Triatoma maculata</h1>
      <div className="components">
        <Image
          src="/Triatoma_maculataF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Triatoma maculata' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 16,5 a 22 mm.
          <br />
          Silvestre &#40;ocos de árvores, ninhos, palmeiras&#41;.
          <br />
          Frequentemente em peridomicílio e eventualmente em domicílio.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component5 = () => {
  return (
    <>
      <h1 className="name-of-bug">Triatoma pseudomaculata</h1>
      <div className="components">
        <Image
          src="/Triatoma_pseudomaculataF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Triatoma pseudomaculata' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 17 a 20 mm.
          <br />
          Silvestre &#40;casca de árvores, refúgios de roedores e
          marsupiais&#41;.
          <br />
          Peridomicílio &#40;currais, galinheiros&#41; e ocasionalmente em
          domicílio.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component6 = () => {
  return (
    <>
      <h1 className="name-of-bug">Triatoma rubrovaria</h1>
      <div className="components">
        <Image
          src="/Triatoma_rubrovariaF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Triatoma rubrovaria' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 21 a 25 mm.
          <br />
          Silvestre &#40;entre pedras&#41; de peridomicílio e domicílio.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component7 = () => {
  return (
    <>
      <h1 className="name-of-bug">Triatoma sordida</h1>
      <div className="components">
        <Image
          src="/Triatoma_sordidaF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Triatoma sordida' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 14 a 20 mm.
          <br />
          Silvestre, peridomicílio &#40;galinheiros&#41; e domicílio.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component8 = () => {
  return (
    <>
      <h1 className="name-of-bug">Triatoma tibiamaculata</h1>
      <div className="components">
        <Image
          src="/Triatoma_tibiamaculataF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Triatoma tibiamaculata' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 29 a 33 mm.
          <br />
          Silvestre &#40;refúgios e ninhos de marsupiais&#41;.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component9 = () => {
  return (
    <>
      <h1 className="name-of-bug">Triatoma vitticeps</h1>
      <div className="components">
        <Image
          src="/Triatoma_vitticepsF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Triatoma vitticeps' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 27,5 a 38 mm.
          <br />
          Silvestre &#40;refúgio de marsupiais e roedores&#41;.
          <br />
          Peridomicílio &#40;galinheiros, estábulos e currais&#41; e domicílio.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2015.
          </span>
        </p>
      </div>
    </>
  )
}
const Component10 = () => {
  return (
    <>
      <h1 className="name-of-bug">Panstrongylus geniculatus</h1>
      <div className="components">
        <Image
          src="/Panstrongylus_geniculatusF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Panstrongylus geniculatus' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 17,5 a 20,5 mm.
          <br />
          Predominantemente silvestre &#40;palmeiras e ninhos&#41;,
          peridomicílio e domicílio.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component11 = () => {
  return (
    <>
      <h1 className="name-of-bug">Panstrongylus lutzi</h1>
      <div className="components">
        <Image
          src="/Panstrongylus_lutziF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Panstrongylus lutzi' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 24 a 29 mm.
          <br />
          Silvestre &#40;tocas de tatus, rochas habitadas por mocós&#41;
          peridomicílio &#40;galinheiros&#41; e domicílio.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component12 = () => {
  return (
    <>
      <h1 className="name-of-bug">Rhodnius neglectus</h1>
      <div className="components">
        <Image
          src="/Rhodnius_neglectusF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Rhodnius neglectus' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 22 a 29,5 mm.
          <br />
          Silvestre &#40;refúgios de marsupiais, morcegos e roedores; palmeiras;
          troncos e casca de árvores&#41;.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component13 = () => {
  return (
    <>
      <h1 className="name-of-bug">Rhodnius pictipes</h1>
      <div className="components">
        <Image
          src="/Rhodnius_pictipesF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Rhodnius pictipes' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 18 a 22 mm.
          <br />
          Silvestre &#40;palmeiras e bromélias&#41; e domicílio
          &#40;invasor&#41;.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
const Component14 = () => {
  return (
    <>
      <h1 className="name-of-bug">Rhodnius robustus</h1>
      <div className="components">
        <Image
          src="/Rhodnius_robustusF.png"
          width={widthConst}
          height={heightConst}
          alt="Imagem do inceto 'Rhodnius robustus' junto com o mapa do Brasil"
        />
        <p>
          Tamanho de 20 a 26 mm.
          <br />
          Silvestre &#40;palmeiras&#41;, peridomicílio e eventualmente em
          domicílio.
          <br />
          <span className="text-gray-400">
            Fonte: Adaptado de FIOCRUZ – Instituto Oswaldo Cruz, 2014.
          </span>
        </p>
      </div>
    </>
  )
}
