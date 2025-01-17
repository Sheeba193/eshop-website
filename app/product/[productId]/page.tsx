import Container from "@/app/components/Container";
import {product} from "@/utils/product";
import ProductDetails from "./ProductDetails";

interface Iprams {
    productId? : string
}

const Product = ({params} : {params : IPrams}) => {
    console.log('params', params);
    
    return  ( 
        <Container className= "p-8">
            <ProductDetails product= {product} />
        </Container>
     );
};
 
export default Product;