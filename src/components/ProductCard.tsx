import { useNavigate } from "react-router-dom";
import { IDatabaseRecord } from "../services/Database";
import { useMediaPredicate } from "react-media-hook";

interface ProductItemProps {
    product: IDatabaseRecord;
}

export default function ProductCard({ product }: ProductItemProps) {
    const navigation = useNavigate();
    const biggerThan500 = useMediaPredicate("(min-width: 500px)");
    return (
        <div style={cardStyle(biggerThan500)}>

            {
                product.image ?
                    (
                        <img src={product.image} alt={product.name} style={imageStyle} />
                    )
                    :
                    (
                        <div style={noImageStyle}>Нет фото</div>
                    )
            }
            <div style={titleStyle}>{product.name}</div>
            <button style={buttonStyle} onClick={() => { navigation(`/product/${product.id}`) }}>Подробнее</button>
        </div>
    );
}

const titleStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
    height: "40px", // высота заголовка
    fontWeight: "bold"
};

const imageStyle: React.CSSProperties = {
    height: '120px',
    objectFit: 'cover',
    marginBottom: '10px',
};

const noImageStyle: React.CSSProperties = {
    height: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    color: "000000",
    fontSize: "24px",
    width: '100%',
};

const buttonStyle: React.CSSProperties = {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
};

const cardStyle = (biggerThan400: boolean): React.CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '0 0 1px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: biggerThan400 ? '200px' : "100px",
    height: '280px', // высота карточки
    margin: '20px auto',
    marginBottom: "20px"
});
