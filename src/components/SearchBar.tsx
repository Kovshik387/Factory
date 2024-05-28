import { useState } from "react"
import { Stack } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"

export default function SearchBar() {
    const [searchItem, setSearch] = useState("");

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <Stack direction="horizontal" gap={2}>
                <Search color="black"/>
                <input placeholder="Поиск" style={searchStyle} value={searchItem} onChange={onChangeHandler}></input>
                <hr style={{ marginLeft: "45px" }}></hr>
            </Stack>
        </>
    )
}

const searchStyle: React.CSSProperties = {
    border: "none",
    outline: "none",
    textAlign: "left",
    flex: "1",
    fontSize: "16px",
    background: "rgba(255, 255, 255, 0.1)"
}

