const Layout = ({children}:any) => {
    return (
        <>
            <h1>Header</h1>
            {children}
            <h2>Footer</h2>
        </>
    )
}

export default Layout;