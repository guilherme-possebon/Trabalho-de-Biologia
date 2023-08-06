export default function TransmissionsRisks() {
  return (
    <>
      <section
        className="h-screen bg-white flex flex-col justify-evenly scroll-p-0"
        id="teste"
      >
        <h1 className="text-center">Formas de transmissão:</h1>
        <div className="flex gap-16 items-center">
          <div
            className="w-[50%] ml-4
        "
          >
            <ol className="list-disc pl-2 pt-4 list-inside">
              <li className="py-2">
                <span className="font-bold">Vetorial:</span> contato com fezes
                de triatomíneos infectados após o repasto/alimentação sanguínea.
                A ingestão de sangue no momento do repasto sanguíneo estimula a
                defecação e, dessa forma, o contato com as fezes.
              </li>
              <li className="py-2">
                <span className="font-bold">Oral:</span> ingestão de alimentos
                contaminados com parasitos provenientes de triatomíneos
                infectados ou suas excretas.
              </li>
              <li className="py-2">
                <span className="font-bold">Vertical:</span> ocorre pela passagem de parasitos de mulheres infectadas por <em>Trypanosoma</em> <em>cruzi</em> para seus bebês durante a gravidez ou o parto.
              </li>
              <li className="py-2">
                Transfusão de sangue ou transplante de órgãos de doadores
                infectados a receptores sadios.
              </li>
              <li className="py-2">
                <span className="font-bold">Acidental:</span> pelo contato da
                pele ferida ou de mucosas com material contaminado durante
                manipulação em laboratório ou na manipulação de caça.
              </li>
            </ol>
          </div>
          <div
            className="w-[50%] mr-4 flex flex-col justify-evenly h-full
        "
          >
            <p>
              O período de incubação da doença de Chagas, ou seja, o tempo que
              os sintomas começam a aparecer a partir da infecção, é dividido da
              seguinte forma:
            </p>
            <ol className="list-disc pl-2 pt-4 list-inside">
              <li className="py-2">
                <span className="font-bold">Transmissão vetorial</span> - de 4 a
                15 dias.
              </li>
              <li>
                <span className="font-bold">
                  Transmissão transfusional/transplante
                </span>{' '}
                - de 30 a 40 dias ou mais
              </li>
              <li className="py-2">
                <span className="font-bold">Transmissão oral</span> - de 3 a 22
                dias.
              </li>
              <li className="py-2">
                <span className="font-bold">Transmissão acidental</span> -
                aproximadamente, 20 dias.
              </li>
              <li className="py-2">
                <span className="font-bold">Transmissão vertical</span> - tempo
                indeterminado, a transmissão pode ocorrer em qualquer período da
                gestação ou durante o parto.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
