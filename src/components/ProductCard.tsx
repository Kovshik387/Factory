import { useNavigate } from "react-router-dom";
import { IDatabaseRecord } from "../services/Database";

interface ProductItemProps {
    product: IDatabaseRecord;
}
export default function ProductCard({product}: ProductItemProps) {
    const navigation = useNavigate();
    return (
        <div style={cardStyle}>

            {
                product.image ?
                    (
                        <img src={product.image} alt={product.name} style={imageStyle}/>
                    )
                    :
                    (
                        <div style={{
                            height: '240px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>Нет фото</div>
                    )
            }
            <div style={titleStyle}>{product.name}</div>
            <button style={buttonStyle} onClick={() => {navigation(`/product/${product.id}`)}}>Подробнее</button>
        </div>
    );
};

const titleStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
    height: "160px"
};

const imageStyle: React.CSSProperties = {
    height: '113px',
    objectFit: 'cover',
    marginBottom: '10px',
};

const buttonStyle: React.CSSProperties = {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
};

const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '0 0 1px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '200px',
    height: '240px',
    margin: '20px auto',
};