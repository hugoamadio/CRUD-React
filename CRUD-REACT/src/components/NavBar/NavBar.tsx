import { Link } from "react-router-dom"
import HeaderStyled from "./HeaderStyled"
import navigation from "../../config/navigation"
import AbcIcon from '@mui/icons-material/Abc';

function NavBar(){
    return(
        <HeaderStyled>
            <AbcIcon style={{position: 'absolute', top: "-12px", left: '40px', fontSize: '140px'}}/>
            {navigation.map((item) => (
                <div>
                    <Link to={item.url}>{item.label}</Link>
                </div>
            ))}
        </HeaderStyled>
    )
}
export default NavBar