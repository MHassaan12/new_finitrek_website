
import { ComponentElement, useEffect, useState } from 'react';
import styles from '../../Assets/css/Navbar.module.css';
import { get } from '../../utils/api';
import { createMenu } from '../../utils';
import { Link } from 'react-router-dom';

const Navbar: ComponentElement = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [blogMenu, setBlogMenu] = useState([]);
    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };
    useEffect(() => {
        get('/blog').then((result) => {
            if (result.data?.blogs?.data.length > 0) {
                const menu = createMenu(result.data.blogs.data);
                setBlogMenu(menu)
            }
        }).catch((error) => {

        })
    }, [])
    return (
        <>
            <ul className={styles.benefitItems} >
                <li onClick={() => setDropdownVisible((prev) => !prev)} onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    Popular Destinations
                </li>
                <li>
                    <Link to="/business-account">
                        Business Account
                    </Link>
                </li>
                <li>
                    Operator Signup
                </li>
                <li>
                    Help?
                </li>
            </ul>
            {isDropdownVisible && <div className={`${styles.megamenu__content} `} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {
                    blogMenu.map((item) => (
                        <div className={styles.megamenu__column}>
                            <h3>{item.title}</h3>
                            {
                                item.children.length > 0 && item.children.map((child) => (
                                    <Link to={child.path}>{child.title}</Link>
                                ))
                            }
                        </div>
                    ))
                }

            </div>}
        </>
    )
}

export default Navbar