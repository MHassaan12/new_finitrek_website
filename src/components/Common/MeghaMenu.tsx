import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import useMobileSize from "../../Hooks/useMobileSize";

const MeghaMenu: FunctionComponent = ({ item, setIsOpen, isOpen }) => {
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
                href={"#javascript"}
                className={`nav-link menu-title ${item.title === isOpen[0] ? "active" : ""
                    }`}
            >
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
                        {item.children?.map((data, index) => (
                            <div className="col mega-box" key={index}>
                                {data.children?.map((item1, i) => (
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
                                                {item1.children?.map((child, i2) => (
                                                    <li key={i2}>
                                                        <Link href={`${child.path}`}>{child?.title}</Link>
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