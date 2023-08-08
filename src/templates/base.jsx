import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function Base({ children }) {
    return (
        <>
            <div className="grid grid-cols-1 grid-rows-[66px_auto_100px] w-full h-screen">
                <NavBar />
                {children}
                <Footer />
            </div>
        </>
    );
}
