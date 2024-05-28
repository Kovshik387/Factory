import { useState } from "react"
import { Stack } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"

export default function SearchBar() {
    const [searchItem, setSearch] = useState("");

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return (
    <div style={{
        borderColor: '#000',
        borderBottom: '1px solid',
        marginLeft: '10px'
    }}>
        <Stack direction="horizontal" gap={2}>
            <Search color='#000' width={30} height={30}/>
            <input placeholder="Поиск" style={searchStyle} value={searchItem} 
                onChange={onChangeHandler}/>
        </Stack>
    </div>
    )
}

const searchStyle: React.CSSProperties = {
    border: "none",
    outline: "none",
    textAlign: "left",
    flex: "1",
    fontSize: "16px",
    color: '#000',
    background: "rgba(255, 255, 255, 0.1)"
}

