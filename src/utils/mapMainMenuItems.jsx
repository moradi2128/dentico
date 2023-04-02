import { v4 as uuid } from "uuid"
export const mainMaenuItems = (mainItems) => {
    return mainItems.map((menuItem) => ({
        id: uuid(),
        destination: menuItem.menuItems?.destination?.uri || null,
        label: menuItem?.menuItems?.label,
        subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
            id: uuid(),
            destination: subMenuItem.destination?.uri || null,
            label: subMenuItem.label,
        }))
    }))
}