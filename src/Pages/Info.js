import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import id from "../Assets/id/id.jpg";
import idSO from "../Assets/id/idSO.jpg";

const Info = () => {
  return (
    <CardDeck
      className="text-justify container"
      style={{
        paddingTop: "3vh",
        paddingBottom: "12vh",
        margin: "0 auto",
      }}
    >
      <Card>
        <Card.Img
          id="id"
          style={{
            borderRadius: "44% 8%",
            border: "7px double grey",
            filter: "drop-shadow(0 0 1.55rem grey)",
          }}
          variant="top"
          src={id}
        />
        <Card.Body>
          <Card.Text>
            Right in the heart of Sombor city, this delightful apartment that
            can host up to four people will be the perfect place to relax and
            see the sites. You will have your own private entrance, living room
            to chill and a nice comfortable Queen size bed & an extra sofa bed
            for two. There is also a fully functional kitchen (fridge, kettle,
            hob & dining table). We have a lovely garden where you can relax any
            time of the day, either on one of the seated areas on the veranda or
            on the lush lawn.
          </Card.Text>
          <hr />
          <Card.Text className="text-secondary font-weight-bold text-center">
            You have one life, which turns up many challenges - I believe in
            tackling those challenges head on!
          </Card.Text>
          <hr />
        </Card.Body>
        <Card.Footer>
          <Card.Text className="text-info text-center font-weight-bold mb-1">
            Host:
          </Card.Text>
          <Card.Text className="text-info text-center">
            Dragan Milosević
          </Card.Text>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          id="id"
          style={{
            borderRadius: "8% 44%",
            border: "7px double grey",
            filter: "drop-shadow(0 0 1.75rem grey)",
          }}
          variant="top"
          src={idSO}
        />
        <Card.Body>
          <Card.Text>
            My home town is Sombor - Serbia, which is a gorgeous little cafe/art
            society. After a day of hard work, there is nothing more than I love
            to enjoy is cycling along our canal, going for a swim in the Danube,
            sipping coffee at the many cafes and dining in a fine restaurant. If
            you come to Sombor, it really is a great place to relax - the pace
            is so slow that time just stops, which if you come from a fast paced
            city - Sombor is what you need to recharge your batteries. That
            doesn't mean there isn't anything to do, as you can have quite the
            adventure with: horse riding, boating, cycling, dancing, swimming,
            fishing, theatre - oh the list goes on... I also love to travel. I
            spent quite a few months in London, enjoyed visiting the many sights
            in Thailand, Greece, Spain, Germany - well the majority of countries
            in Europe.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text className="text-info text-center font-weight-bold mb-1">
            Host:
          </Card.Text>
          <Card.Text className="text-info text-center">SOMBOR</Card.Text>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default Info;
