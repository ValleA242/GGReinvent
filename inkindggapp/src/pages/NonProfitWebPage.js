
import useToggle from "../hooks/Toggler";
import WishListItemCard from "../components/WishListItemCard";
import { Modal, ModalBody, Button } from "react-bootstrap";
import { productArray } from "../ProductStore";


function NonProfitWebPage() {
    const [showWishList, setShowWishList] = useToggle();

    return (

        <>
            <Button>Donate</Button>
            <Button onClick={setShowWishList}>In Kind</Button>

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