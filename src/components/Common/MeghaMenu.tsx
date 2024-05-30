import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import useMobileSize from "../../Hooks/useMobileSize";

interface MeghaMenuProps {
    item: any;
    level: any;
    setIsOpen: Function
    isOpen: any
}

const MeghaMenu: FunctionComponent<MeghaMenuProps> = ({ item, setIsOpen, isOpen }) => {
    const mobileSize = useMobileSize();

    return (
        <li className="mega-menu">
            <Link
                onClick={(e) => {
                    e.preventDefault();
                    const temp = isOpen.slice();
                    temp[0] = item.title !== temp[0] && item.title;
                    setIsOpen(temp);
                }}
                ref={"#javascript"}
                className={`nav-link menu-title ${item.title === isOpen[0] ? "active" : ""}`} to={""}            >
                {item.title ? item.title : ""}
                {mobileSize && (
                    <span className="according-menu">
                        {isOpen[0] === item.title ? "-" : "+"}
                    </span>
                )}
            </Link>
            <div
                className={`mega-menu-container menu-content ${item.title === isOpen[0] ? "d-block" : "d-none"
                    }`}
            >
                <div className="container">
                    <div className="row">
                        {item.children?.map((data: any, index: any) => (
                            <div className="col mega-box" key={index}>
                                {data.children?.map((item1: any, i: any) => (
                                    <div className="link-section" key={i}>
                                        <div
                                            className={`submenu-title ${isOpen[1] == item1.title ? "active" : ""
                                                }`}
                                        >
                                            <h5
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    const temp = isOpen.slice();
                                                    temp[1] = item1.title !== temp[1] && item1.title;
                                                    setIsOpen(temp);
                                                }}
                                            >
                                                {item1.title}
                                            </h5>
                                            {mobileSize && (
                                                <span className="according-menu">
                                                    {isOpen[1] === item1.title ? "-" : "+"}
                                                </span>
                                            )}
                                        </div>
                                        <div
                                            className={`submenu-content opensubmegamenu ${mobileSize &&
                                                (isOpen[1] == item1.title ? "d-block" : "d-none")
                                                }`}
                                        >
                                            <ul className="list">
                                                {item1.children?.map((child: any, i2: any) => (
                                                    <li key={i2}>
                                                        <Link ref={`${child.path}`} to={""}>{child?.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default MeghaMenu