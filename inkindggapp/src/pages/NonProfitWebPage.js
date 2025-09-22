
import useToggle from "../hooks/Toggler";
import WishListItemCard from "../components/WishListItemCard";
import { Modal, ModalBody, Button } from "react-bootstrap";
import { productArray } from "../ProductStore";


function NonProfitWebPage() {
    const [showWishList, setShowWishList] = useToggle();

    return (

        <>
            <div className="nonProfitWPTopContainer">
                <h1>Non Profit's Webpage</h1>
            </div>
            <div className="nonProfitWebPageButtonContainer">
                <Button className="nonProfitWPButtons">Donate</Button>
                <Button className="nonProfitWPButtons" onClick={setShowWishList}>In Kind</Button>
            </div>
            {showWishList && (
                <Modal
                    show={showWishList}
                    onHide={setShowWishList}
                >
                    <ModalBody>
                        {productArray.map((product) => (
                            <WishListItemCard key={product.id} product={product} />
                        ))}
                    </ModalBody>
                </Modal>
            )}

        </>
    )
}

export default NonProfitWebPage;