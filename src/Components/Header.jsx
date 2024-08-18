import {Link,NavLink} from "react-router-dom"

function Header() {
    return (
        <>
        <section className="text-white bg_primary p-[20px]">
            <div className="container flex justify-between items-center flex-wrap gap-[20px] sm:gap-[0px]">
                <div className="mx-auto sm:mx-[0]">
                    <div className="font-bold text-[30px] leading-[30px]">
                        <Link to="/">Movies</Link>
                    </div>
                </div>
                <div className="ml-[80px] pt-[10px]">Made with &#10084; by haku</div>
                <ul className="flex items-center gap-[20px] sm:gap-[30pw]">
                    <li className="hover:opacity-[0.85] duration-[0.2s]">
                        <NavLink to="/" >Watch List</NavLink>
                    </li>
                    <li className="hover:opacity-[0.85] duration-[0.2s]">
                        <NavLink to="/watched">Watched</NavLink>
                    </li>
                    <li className="bg-[#4CACBC] rounded-[6px] font-semibold hover:opacity-[0.85] duration-[0.2s]">
                        <NavLink to="/add" className="px-[10px] py-[3px] block">ADD</NavLink>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Header