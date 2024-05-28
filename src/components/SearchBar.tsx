import { useState } from "react"
import { Stack } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"

interface SearchProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchProps) {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };
    return (
        <div style={{
            borderColor: '#000',
            borderBottom: '1px solid',
            marginLeft: '10px'
        }}>
            <Stack direction="horizontal" gap={2}>
                <Search color='#000' width={10} height={20} />
                <input placeholder="Поиск" style={searchStyle}
                    onChange={onChangeHandler} />
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
    backgroundColor: 'transparent'
}

