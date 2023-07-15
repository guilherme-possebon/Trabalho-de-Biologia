import Spline from '@splinetool/react-spline'
import styles from '../styles/styles.module.css'
import { useEffect } from 'react'

export default function WhatIs() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry, 1111)
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))

    // Cleanup function to stop observing when component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="h-[3700px]">
      <section className={styles.containerKissingBugInfos}>
        {/* -------------------------Meio------------------------- */}
        <div className={`${styles.Meio} sticky h-[450px] top-0`}>
          <Spline scene="https://prod.spline.design/jHG2bQpdnLObdNYU/scene.splinecode" />
        </div>
        {/* -------------------------Coluna 1------------------------- */}

        <div className={styles.Coluna1Row2}>
          <h1 className="hidden text-center ">O que é Doença de Chagas?</h1>
          <p className="hidden p-answers">
            A Doença de Chagas é uma infecção parasitária transmitida pelo
            bicho-barbeiro que pode apresentar curso clínico bifásico, aguda e
            crônica. É endêmica em 21 países das Américas, com incidência de 30
            mil casos novos por ano, 14.000 mortes/ano e 8.000 recém-nascidos
            infectados durante a gestação.
          </p>
        </div>

        <div className={styles.Coluna1Row6}>
          <h1 className="hidden text-center">Agente Etiológico</h1>
          <p className="hidden p-answers">
            É o protozoário flagelado Trypanosoma cruzi. No sangue de
            vertebrados, apresenta-se na forma infectante tripomastigota e, nos
            tecidos, na forma amastigota. Já nos insetos, ocorrem várias
            maturações, destacando-se a forma infectante, que são as formas
            encontrada nas fezes e urina do inseto.
          </p>
        </div>
        <div className={styles.Coluna1Row10}>
          <h1 className="hidden text-center">
            Qual a forma evolutiva da doença de Chagas?
          </h1>
          <p className="hidden p-answers">
            Suas formas evolutivas são amastigota, tripomastigota e
            epimastigota. Por exemplo, no sangue dos vertebrados, o T. cruzi se
            apresenta sob a forma de tripomastigota, que é extremamente móvel,
            e, nos tecidos, como amastigotas. No tubo digestivo dos vetores
            ocorre a transformação do parasito, dando origem às formas
            infectantes presentes nas fezes do inseto. A partir disso, é
            possível entender a transmissão da DC e prevenir a doença.
          </p>
        </div>

        {/* -------------------------Coluna 2------------------------- */}

        <div className={styles.Coluna2Row4}>
          <h1 className="hidden text-center">Vetores</h1>
          <p className="hidden p-answers">
            Os vetores da tal doença são os triatomíneos Triatominae, mais
            conhecido como “bicho-barbeiro”. São insetos da ordem Hemiptera,
            como percevejos, cigarras, pulgões e etc. O Museu de Zoologia da USP
            afirma que existem aproximadamente 89 mil espécies dessa ordem.
            Existem inúmeras espécies de triatomíneos espalhados por todo país e
            cada um tem um tamanho e cor diferente. Enquanto algumas espécies
            variam entre 7 mm a 8 mm, algumas podem chegar até 38 mm. A cor pode
            variar entre preto com listras laranjas, amarelo com listras pretas,
            amarelo escuro entre outros. Afirma-se que existem mais 62 espécies
            de triatomíneos no Brasil.
          </p>
        </div>

        <div className={styles.Coluna2Row8}>
          <h1 className="hidden text-center">Estado evolutivo</h1>

          <p className="hidden p-answers">
            A doença apresenta curso clínico bifásico, aguda e crônica, sendo
            que a fase aguda, muitas vezes sem sintomas, pode evoluir para fase
            crônica. A gravidade dos casos pode estar relacionada à cepa
            infectante, a via de transmissão e também a associação com outras
            patologias concomitantes.
          </p>
        </div>
        <div className={styles.Coluna2Row13}>
          <h1 className="hidden text-center">Ciclo de Vida</h1>

          <p className="hidden p-answers">
            O ciclo de vida do T. cruzi inicia quando o barbeiro, ao se
            alimentar do hospedeiro vertebrado, elimina suas fezes e urina, onde
            podem estar presentes as formas tripomastigotas. Os parasitas
            tripomastigotas penetram na pele e infectam as células do
            hospedeiro, onde transformam-se para a forma amastigota. Quando as
            células estão repletas de parasitos, eles novamente mudam para a
            forma tripomastigotas. Por estarem com grande quantidade de
            parasitos, as células se rompem e os protozoários atingem a corrente
            sanguínea, atingindo outros órgãos. Nessa fase, se o hospedeiro
            vertebrado for picado pelo barbeiro, os protozoários serão
            transmitidos ao inseto. No intestino do barbeiro, mudam sua forma
            para epimastigotas, onde multiplicam-se e tornam-se novamente
            tripomastigotas, as formas infectantes aos vertebrados.
          </p>
        </div>
      </section>
    </section>
  )
}
