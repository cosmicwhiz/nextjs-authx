import Link from "next/link"

interface DropdownInterface {
    setToggleDropdown: any;
    signOut?: any;
}

const Dropdown = (props: DropdownInterface) => {
  return (
    <>
        <button type="button" onClick={() => props.setToggleDropdown(false)} className="dropdown_remover"></button>
        <div className="dropdown">
            <Link href="/profile" className="dropdown_link" onClick={() => props.setToggleDropdown(false)}>
                My Profile
            </Link>
            <Link href="" className="dropdown_link" onClick={
                () => {
                    props.setToggleDropdown(false)
                    props.signOut()
                }
            }>
                Sign Out
            </Link>
        </div>
    </>
  )
}

export default Dropdown