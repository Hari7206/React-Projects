import { useState } from "react";
import data from "./data";
import "./style.css";

export default function MyAccordion() {
    const [selected, setSelected] = useState(null);
    const [selectMultiple, setselectMultiple] = useState(false)
    const [multiple, setMultiple] = useState([]);

    function handleSelect(id) {
        setSelected(selected === id ? null : id);
    }

    function handleMultiple(id) {
        let cpyItem = [...multiple];

        let findINdex = cpyItem.indexOf(id)

        if (findINdex === -1) {
            cpyItem.push(id)
        }
        else {
            cpyItem.splice(findINdex, 1);
        }

        setMultiple(cpyItem)
        console.log(findINdex, multiple);
    }

    return (
        <div className="wrapper">
            <button onClick={() => setselectMultiple(!selectMultiple)}>
                Select Multiple item
            </button>
            <div className="item">

                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div key={dataItem.id}>

                            <div
                                className="heading"
                                onClick={selectMultiple ?
                                    () => handleMultiple(dataItem.id)
                                    :
                                    () => handleSelect(dataItem.id)}
                            >
                                <h3 className="question">{dataItem.title}</h3>
                                <span>{selected === dataItem.id ? "👀" : "+"}</span>
                            </div>
                            {
                                selectMultiple
                                    ? multiple.indexOf(dataItem.id) !== -1 && (
                                        <div className="content">{dataItem.content}</div>
                                    )
                                    : selected === dataItem.id && (
                                        <div className="content">{dataItem.content}</div>
                                    )
                            }


                            {/* {selected === dataItem.id || multiple.indexOf(dataItem.id !== -1)  ? (
                <div className="content">{dataItem.content}</div>
              ) : null} */}
                        </div>
                    ))
                ) : (
                    <div>There is no data</div>
                )}
            </div>
        </div>
    );
}
