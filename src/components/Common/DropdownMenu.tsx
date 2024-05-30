import { FunctionComponent, Key } from "react";
import { Link } from "react-router-dom";
import useMobileSize from "../../Hooks/useMobileSize";

interface DropdownMenuProps {
    item: any;
    level: any;
    setIsOpen: Function
    isOpen: any
}


const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({ item, level, setIsOpen, isOpen }) => {
    const hasChildren = item.children && item.children.length > 0;
    const itemClass = `level${level}`;
    const subClasses = `${itemClass === "level0" ? "nav-submenu submenu-content" : itemClass === "level1" ? "nav-sub-childmenu level1" : itemClass === "level2" ? "nav-sub-childmenu submenu-content level2" : itemClass === "level3" ? "nav-sub-childmenu submenu-content level3" : ""}`;
    const mobileSize = useMobileSize();

    return (
        <li className={`${itemClass === "level0" ? "dropdown" : ""}`}>
            <Link
                onClick={(e) => {
                    if (item.type !== "link") { e.preventDefault(); }
                    const temp = isOpen.slice();
                    temp[level] = item.title !== temp[level] && item.title;
                    setIsOpen(temp);
                } }
                ref={item?.type !== "sub" ? `/${item?.path}` : "#js"}
                className={` ${hasChildren ? "nav-link menu-title " : ""} ${isOpen[level] === item.title ? " active" : ""} `} to={""}            >
                {item.title ? item.title : ""}
                {mobileSize && item.type === "sub" && (
                    <span className="according-menu">
                        {isOpen.includes(item.title) ? "-" : "+"}
                    </span>
                )}

            </Link>
            {hasChildren && (
                <ul
                    className={`${subClasses} ${isOpen[level] === item.title ? " d-block" : ""
                        } `}
                >
                    {item.children?.map((child: any, index: Key | null | undefined) => (
                        <DropdownMenu key={index} item={child} level={level + 1} setIsOpen={setIsOpen} isOpen={isOpen} />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default DropdownMenu;