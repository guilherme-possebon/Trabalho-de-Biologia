import { ReactNode } from 'react'
import Image from 'next/image'

type LayoutProp = {
  children: ReactNode
}

export function DivWhereWeFind({ children }: LayoutProp) {
  return <div className="container-images">{children}</div>
}

const widthConst = 800
const heightConst = 800

export const Component1 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Triatoma</em>{' '} <em>infestans</em>{' '}
        <a
          href="https://pt.wikipedia.org/wiki/Johann_Christoph_Friedrich_Klug"
          target="_blank"
        >
          Klug
        </a>
        , 1835
      </h1>
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
export const Component2 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Panstrongylus{' '}</em> <em>megistus</em>{' '}
        <a
          href="https://pt.wikipedia.org/wiki/Hermann_Burmeister"
          target="_blank"
        >
          Burmeister
        </a>
        , 1835
      </h1>
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
export const Component3 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Triatoma{' '}</em> <em>brasiliensis</em>{' '}
        <a href="https://pt.wikipedia.org/wiki/Artur_Neiva" target="_blank">
          Neiva
        </a>
        , 1911
      </h1>
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
export const Component4 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Triatoma{' '}</em> <em>maculata</em>{' '}
        <a
          href="https://en.wikipedia.org/wiki/Wilhelm_Ferdinand_Erichson"
          target="_blank"
        >
          Erichson
        </a>
        , 1848
      </h1>
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
export const Component5 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Triatoma{' '}</em> <em>pseudomaculata</em>{' '}
        <a
          href="https://www.scielo.br/j/rsbmt/a/NVc679MGdWZgmvHhqCKXtXS/"
          target="_blank"
        >
          Correia & Espínola
        </a>
        , 1964
      </h1>
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
export const Component6 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Triatoma{' '}</em> <em>rubrovaria</em>{' '}
        <a
          href="https://pt.wikipedia.org/wiki/%C3%89mile_Blanchard"
          target="_blank"
        >
          Blanchard
        </a>
        , 1843
      </h1>
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
export const Component7 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Triatoma{' '}</em> <em>sordida</em>{' '}
        <a href="https://en.wikipedia.org/wiki/Carl_St%C3%A5l" target="_blank">
          Stål
        </a>
        , 1859
      </h1>
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
export const Component8 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Triatoma tibiamaculata</em> Pinto, 1926
      </h1>
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
export const Component9 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Triatoma vitticeps</em>{' '}
        <a href="https://en.wikipedia.org/wiki/Carl_St%C3%A5l" target="_blank">
          Stål
        </a>
        , 1859
      </h1>
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
export const Component10 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Panstrongylus geniculatus</em>{' '}
        <a
          href="https://en.wikipedia.org/wiki/Pierre_Andr%C3%A9_Latreille"
          target="_blank"
        >
          Latreille
        </a>
        , 1811
      </h1>
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
export const Component11 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Panstrongylus lutzi</em>{' '}
        <a href="https://pt.wikipedia.org/wiki/Artur_Neiva" target="_blank">
          Neiva
        </a>{' '}
        & Pinto, 1923
      </h1>
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
export const Component12 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Rhodnius neglectus</em> Lent, 1954
      </h1>
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
export const Component13 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Rhodnius pictipes</em>{' '}
        <a href="https://en.wikipedia.org/wiki/Carl_St%C3%A5l" target="_blank">
          Stål
        </a>
        , 1872
      </h1>
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
export const Component14 = () => {
  return (
    <>
      <h1 className="name-of-bug">
        <em>Rhodnius robustus</em> Larrousse, 1927
      </h1>
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
