
interface Menu {
    subMenus?: Array<MenuItem>,
    menuItems?: Array<MenuItem>,
}

interface MenuItem {
    name: string,
    icon?: string,
    imgUrl?: string,
    path: string,
}


export {
    Menu,
    MenuItem
}