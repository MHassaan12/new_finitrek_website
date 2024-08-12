import React, { useState } from 'react';
import styles from '../../Assets/css/Common.module.css'

const data = [
    {
        id: 1,
        name: 'Luggage',
        children: [
            {
                id: 2,
                name: 'Hand Luggage (56 x 37 x 25 cm)',
                children: [
                    { id: 3, name: '1' },
                    { id: 4, name: '2' },
                    { id: 5, name: '3' },
                    { id: 6, name: '4' },
                    { id: 7, name: '5' },
                    { id: 8, name: '6' },
                    { id: 9, name: '7' },
                    { id: 10, name: '8' },
                    { id: 11, name: '9' },
                    { id: 12, name: '10' },
                    { id: 13, name: '11' },
                    { id: 14, name: '12' },
                    { id: 15, name: '13' },
                    { id: 16, name: '14' },
                    { id: 17, name: '15' },
                    { id: 18, name: '16' },
                    { id: 19, name: '17' },
                    { id: 20, name: '18' },
                    { id: 21, name: '19' },


                ],
            },
            {
                id: 22,
                name: 'Suitcase (78 x 50 x 32 cm)',
                children: [
                    { id: 23, name: '1' },
                    { id: 24, name: '2' },
                    { id: 25, name: '3' },
                    { id: 26, name: '4' },
                    { id: 27, name: '5' },
                    { id: 28, name: '6' },
                    { id: 29, name: '7' },
                    { id: 30, name: '8' },
                    { id: 31, name: '9' },
                    { id: 32, name: '10' },
                    { id: 33, name: '11' },
                    { id: 34, name: '12' },


                ],
            },
        ],
    },

];

interface Props {
    style: string
    setValue: any
    value: any
}

interface ExpandedItems {
    [key: number]: boolean;
}

const SelectTree: React.FC<Props> = ({ style, value, setValue }) => {
    const [selectedItem, setSelectedItem] = useState(value);
    const [show, setShow] = useState(false);
    const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});

    const toggleExpanded = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: number) => {
        e.stopPropagation();
        setExpandedItems((prev: any) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleItemClick = (item1: string, item2: string, item3: string) => {
        setSelectedItem(`${item3} X ${item2}`);
        setValue(`${item3} X ${item2}`);
        setExpandedItems({});
        setShow(false);
    };

    return (
        <div className={styles.luggageInput}>
            <div className={styles.luggageInput}>
                <input
                    className={style}
                    type="text"
                    placeholder="Select"
                    value={selectedItem}
                    readOnly
                    onClick={() => setShow((prev) => !prev)}
                />
            </div>
            {show &&
                <div className={styles.list}>
                    <ul className={styles.ul} >
                        {data.map((item) => (
                            <li
                                key={item.id}
                                onClick={(e) => toggleExpanded(e, item.id)}
                            >
                                <span style={{ cursor: 'pointer', fontWeight: 'bold', marginRight: '5px' }}>{expandedItems[item.id] ? '-' : '+'}</span>
                                {item.name}
                                {item.children.length > 0 && (
                                    <ul
                                        className={styles.ul}
                                        style={{
                                            display: expandedItems[item.id] ? 'block' : 'none',
                                        }}
                                    >
                                        {item.children.map((child) => (
                                            <li
                                                key={child.id}
                                                onClick={(e) => toggleExpanded(e, child.id)}
                                            >
                                                <span style={{ cursor: 'pointer', fontWeight: 'bold', marginRight: '5px' }}>{expandedItems[child.id] ? '-' : '+'}</span>
                                                {child.name}
                                                {child.children.length > 0 && (
                                                    <ul
                                                        className={styles.ul}
                                                        style={{
                                                            display: expandedItems[child.id] ? 'block' : 'none',
                                                        }}
                                                    >
                                                        {child.children.map((grandChild) => (
                                                            <li
                                                                key={grandChild.id}
                                                                style={{ cursor: 'pointer', paddingLeft: '5px' }}
                                                                onClick={() => handleItemClick(item.name, child.name, grandChild.name)}
                                                            >
                                                                {grandChild.name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
};

export default SelectTree;