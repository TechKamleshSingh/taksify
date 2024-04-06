import { FC, ReactNode } from "react";

interface ContainerProps {
    children?: ReactNode
}

const MainLayout: FC<ContainerProps> = ({ children }) => {
    return (
        <>
            <main className="flex flex-col items-center justify-center pb-5 w-full">
                <h1 className='font-bold text-6xl font-Lobster underline decoration-sky-500 text-red-500 decoration-dotted'>Taskify</h1>
            </main>
            {children}
        </>
    )
}

export default MainLayout;