import { Button, Card } from "react-bootstrap";
import useToggle from "../hooks/Toggler";
import { useNavigate } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";








function OrgCard({ organization, onDonate }) {

    const [isFavorite, toggleIsFavorite] = useToggle();

    const navigate = useNavigate();

    return (

        <Card className="saveMatch">

            <Card.Body>
                <div className="text-end">
                    <button className="heartButton" onClick={toggleIsFavorite}>
                        {isFavorite ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </div>
                <Card.Img className="cardImage" variant="top" src={organization.img} />
                <Card.Title>{organization.orgName}</Card.Title>
                <Card.Text>
                    {organization.location}
                </Card.Text>

                <div className="d-flex flex-row">
                    <Button
                        className="orgCardButton w-100 m-1"
                        onClick={() => navigate("/nonprofitwebpage")}
                    >
                        View
                    </Button>
                    <Button
                        className="orgCardButton w-100 m-1"
                        onClick={() => onDonate(organization)}

                    >
                        Donate Now
                    </Button>


                </div>
            </Card.Body>
        </Card>


    );
}

export default OrgCard;
