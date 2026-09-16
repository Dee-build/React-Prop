import React from "react"; 

export default function Layout({ children }) {
    return (
        <>
            <div
                className="flex justify-between bg-green-400 p-5 text-white"
                >
                    <div>Logo</div>
                    <nav>
                        <ul className="flex gap-5">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                        </ul>
                    </nav>
            </div>
            {children}
        
            <footer>
                <div className="bg-green-400 py-5 mt-10 text-white">Made by Dev</div>
            </footer>
        </>
    );
}

