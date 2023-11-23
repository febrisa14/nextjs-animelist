import Link from "next/link";

const Header = ({ title, link, children }) => {
    return (
        <div className="px-4 py-6 max-w-7xl mx-auto space-y-3">
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl text-color-primary">{title}</h2>
                {link && (
                    <Link className="underline text-blue-500 text-sm text-color-primary" href={link}>Lihat Semua</Link>
                )}
            </div>
            {children}
        </div>
    );
}

export default Header;