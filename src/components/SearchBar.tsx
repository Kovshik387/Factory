import { Stack } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"
import { useMediaPredicate } from "react-media-hook";

interface SearchProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchProps) {
    const biggerThan920 = useMediaPredicate("(min-width: 920px)");
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };
    return (
        <div style={{
            borderColor: '#000000',
            borderBottom: '1px solid',
            marginLeft: '10px'
        }}>
            <Stack direction="horizontal" >
                <Search color='#000' width={20} height={25} />
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
    color: '#000000',
    backgroundColor: 'transparent'
}

