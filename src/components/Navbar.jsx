function Navbar({titulo1, titulo2, titulo3, titulo4, btnTitulo, widthSidebar}) {
    return (
        <aside className="sidebar-sticky sidebar justify-start" style={{ width: widthSidebar}}>
            <section className="sidebar-title items-center p-4">
                <button className="btn btn-solid" id="button-book">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" id="book">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                </button>
            </section>
            <section className="sidebar-content min-h-[20rem]">
                <nav className="menu rounded-md">
                    <section className="menu-section px-4">
                        <ul className="menu-items">
                            <li className="menu-item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="5" stroke="currentColor" className="w-4 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                <strong>
                                    <span>{titulo1}</span>
                                </strong>
                            </li>

                            <li className="menu-item">
                                <span>{titulo2}</span>
                            </li>
                            <li className="menu-item">
                                <span>{titulo3}</span>
                            </li>
                            <li className="menu-item">
                                <span>{titulo4}</span>
                            </li>
                        </ul>
                    </section>
                </nav>
                <section className="sidebar-btn">
                    <button className="btn btn-solid" id="button-create">
                        <span>{btnTitulo}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="5" stroke="currentColor" className="w-4 h-4" id="ion-t">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </section>
            </section>
        </aside>

    )
}

export default Navbar;