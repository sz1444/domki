import { Container } from "../components/Container/Container";
import { Gallery } from "../components/Gallery/Gallery";
import { H2 } from "../components/Header/H2";
import { Modal } from "../components/Modal/Modal";

export default function GalleryPage() {
    return (
        <div className="mt-20">
            <H2 className="p-16 pb-16 bg-slate-100 -lime-600 text-center">
                <Container>Galeria</Container>
            </H2>
            <Gallery />
        </div>
    )
}