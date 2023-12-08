import { Atrractions } from './components/Atrractions/Atrractions'
import { Container } from './components/Container/Container'
import { Cotagges } from './components/Cottages/Cottages'
import { Hero } from './components/Hero/Hero'
import { SectionPage } from './components/SectionPage/SectionPage'

export default function Home() {
  return (
      <main className="font-extralight">
        <Hero/>
        <Container>
          <SectionPage
            header="Odpoczywaj komfortowo"
            subheader="Towarzyszy nam pragnienie, aby stawać zawsze na wysokości zadania i spełniać oczekiwania gości już od momentu ich przybycia. Nieustanna dbałość o komfortowe warunki pobytu oraz rozwój."
          >
            <Atrractions />
          </SectionPage>

          <SectionPage
            header="Domki"
            subheader="Towarzyszy nam pragnienie, aby stawać zawsze na wysokości zadania i spełniać oczekiwania gości już od momentu ich przybycia. Nieustanna dbałość o komfortowe warunki pobytu oraz rozwój."
          >
            <Cotagges />
          </SectionPage>
        </Container>
      </main>
  )
}
