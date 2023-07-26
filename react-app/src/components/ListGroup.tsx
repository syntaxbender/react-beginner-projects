import { MouseEvent, useState } from "react";

interface Props {
    items: any[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items,heading, onSelectItem}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    let className = (index:number) =>
        selectedIndex === index
            ? "list-group-item active"
            : "list-group-item"
    const message = items.length === 0&& <p>No items found.</p>;
    const handleClick= (event: MouseEvent,index:number,item:string) => {
        setSelectedIndex(index);
        onSelectItem(item);
    }
    return (
        <>
            <h1>{heading}</h1>
            {message}
            <ul className="list-group">
                {items.map( (item,index) => 
                    <li key={index} data-key={index} className={className(index)} onClick={event=>handleClick(event,index,item)}>{item}</li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;