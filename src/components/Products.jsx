import "./Products.css";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function Products({ filteredProducts, productFunc, loading }) {
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
        
          <div className="p-5 text-center bg-image shop-pic head">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100 head">
                <div className="container-fluid product-wrap">
                  {filteredProducts.map((item) => (
                    <div key={item.id}>
                      <Link to="/details">
                        <img
                          src={item.image}
                          className="rounded-3 img-fluid prdct m-4 "
                          alt={item.title}
                          onClick={() => productFunc(item.id)}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </>
      )}
    </>
  );
}

export default Products;

