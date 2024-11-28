
export function NavbarButton({props}: {props: string} ) {
  return (
    <li >
    <button className="border-0 hover:bg-blue-500 px-10 rounded-xl text-center">
    {props}
    </button>
    </li>
  )
}
