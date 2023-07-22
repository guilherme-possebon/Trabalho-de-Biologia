import Spline from '@splinetool/react-spline'
import styles from '../styles/styles.module.css'
import Image from 'next/image'
import { useEffect } from 'react'

export default function WhatIs() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="h-[3700px]">
      <div className={styles.BgWrap}>
        <Image alt="travel" src="/WhatIs-texture.jpg" fill quality={100} />
      </div>
      <div className={`${styles.containerKissingBugInfos}`}>
        {/* -------------------------Meio------------------------- */}
        <div className={`${styles.Meio} sticky h-[450px] top-0`}>
          <Spline scene="https://prod.spline.design/Z-RiSwU5A72Mv7dl/scene.splinecode" />
        </div>
        {/* -------------------------Coluna 1------------------------- */}

        <article className={`${styles.Coluna1Row2}`}>
          <div className="hidden BackGroundRow">
            <h1 className="text-center">O que é Doença de Chagas?</h1>
            <p className="p-answers">
              A Doença de Chagas é uma infecção parasitária transmitida pelo
              bicho-barbeiro que pode apresentar curso clínico bifásico, aguda e
              crônica. É endêmica em 21 países das Américas, com incidência de
              30 mil casos novos por ano, 14.000 mortes/ano e 8.000
              recém-nascidos infectados durante a gestação.
            </p>
          </div>
        </article>

        <article className={`${styles.Coluna1Row6}`}>
          <div className="hidden BackGroundRow">
            <h1 className="text-center">Agente Etiológico</h1>
            <p className="p-answers">
              É o protozoário flagelado <em>Trypanosoma cruzi</em>. No sangue de
              vertebrados, apresenta-se na forma infectante tripomastigota e,
              nos tecidos, na forma amastigota. Já nos insetos, ocorrem várias
              maturações, destacando-se a forma infectante, que são as formas
              encontrada nas fezes e urina do inseto.
            </p>
          </div>
        </article>
        <article className={`${styles.Coluna1Row10}`}>
          <div className="hidden BackGroundRow">
            <h1 className="text-center">
              Qual a forma evolutiva da doença de Chagas?
            </h1>
            <p className="p-answers">
              Suas formas evolutivas são amastigota, tripomastigota e
              epimastigota. Por exemplo, no sangue dos vertebrados, o{' '}
              <em>T. cruzi</em> se apresenta sob a forma de tripomastigota, que
              é extremamente móvel, e, nos tecidos, como amastigotas. No tubo
              digestivo dos vetores ocorre a transformação do parasito, dando
              origem às formas infectantes presentes nas fezes do inseto. A
              partir disso, é possível entender a transmissão da Doença de
              Chagas e prevenir a doença.
            </p>
          </div>
        </article>

        {/* -------------------------Coluna 2------------------------- */}

        <article className={`${styles.Coluna2Row4}`}>
          <div className="hidden BackGroundRow">
            <h1 className="text-center">Vetores</h1>
            <p className="p-answers">
              Os vetores da tal doença são os triatomíneos <em>Triatominae</em>,
              mais conhecido como “bicho-barbeiro”. São insetos da ordem
              Hemiptera, como percevejos, cigarras, pulgões e etc. O Museu de
              Zoologia da USP afirma que existem aproximadamente 89 mil espécies
              dessa ordem. Existem inúmeras espécies de triatomíneos espalhados
              por todo país e cada um tem um tamanho e cor diferente. Enquanto
              algumas espécies variam entre 7 mm a 8 mm, algumas podem chegar
              até 38 mm. A cor pode variar entre preto com listras laranjas,
              amarelo com listras pretas, amarelo escuro entre outros. Afirma-se
              que existem mais 62 espécies de triatomíneos no Brasil.
            </p>
          </div>
        </article>

        <article className={`${styles.Coluna2Row8}`}>
          <div className="hidden BackGroundRow">
            <h1 className="text-center">Estado evolutivo</h1>
            <p className="p-answers">
              A doença apresenta curso clínico bifásico, aguda e crônica, sendo
              que a fase aguda, muitas vezes sem sintomas, pode evoluir para
              fase crônica. A gravidade dos casos pode estar relacionada à cepa
              infectante, a via de transmissão e também a associação com outras
              patologias concomitantes.
            </p>
          </div>
        </article>
        <article className={`${styles.Coluna2Row13}`}>
          <div className="hidden BackGroundRow">
            <h1 className="text-center">Ciclo de Vida</h1>
            <p className="p-answers">
              O ciclo de vida do <em>T. cruzi</em> inicia quando o barbeiro, ao
              se alimentar do hospedeiro vertebrado, elimina suas fezes e urina,
              onde podem estar presentes as formas tripomastigotas. Os parasitas
              tripomastigotas penetram na pele e infectam as células do
              hospedeiro, onde transformam-se para a forma amastigota. Quando as
              células estão repletas de parasitos, eles novamente mudam para a
              forma tripomastigotas. Por estarem com grande quantidade de
              parasitos, as células se rompem e os protozoários atingem a
              corrente sanguínea, atingindo outros órgãos. Nessa fase, se o
              hospedeiro vertebrado for picado pelo barbeiro, os protozoários
              serão transmitidos ao inseto. No intestino do barbeiro, mudam sua
              forma para epimastigotas, onde multiplicam-se e tornam-se
              novamente tripomastigotas, as formas infectantes aos vertebrados.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
