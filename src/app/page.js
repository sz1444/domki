"use client";

import { useState } from 'react';
import { Atrractions } from './components/Atrractions/Atrractions'
import { Container } from './components/Container/Container'
import { Cotagges } from './components/Cottages/Cottages'
import { Hero } from './components/Hero/Hero'
import { SectionPage } from './components/SectionPage/SectionPage'
import { ModalContext } from './contexts/ModalContext';
import { ModalReservation } from './components/ModalReservation/ModalReservation';

export default function Home() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={[isReservationModalOpen, setIsReservationModalOpen]}>    
      <main className="font-extralight">
        <Hero/>
        <div className="bg-slate-100"> 
          <Container>
            <SectionPage
              header="Domki"
              subheader="Towarzyszy nam pragnienie, aby stawać zawsze na wysokości zadania i spełniać oczekiwania gości już od momentu ich przybycia. Nieustanna dbałość o komfortowe warunki pobytu oraz rozwój."
            >
              <Cotagges />
            </SectionPage>
          </Container>
        </div>

        <Container>
          <SectionPage
            header="Odpoczywaj komfortowo"
            subheader="Towarzyszy nam pragnienie, aby stawać zawsze na wysokości zadania i spełniać oczekiwania gości już od momentu ich przybycia. Nieustanna dbałość o komfortowe warunki pobytu oraz rozwój."
          >
            <Atrractions />
          </SectionPage>
        </Container>
      </main>
    
      <ModalReservation />
    </ModalContext.Provider>
  )
}
