import React, { useState, useEffect } from "react";
import {
  auth,
  db,
  collection,
  query,
  where,
  onSnapshot,
} from "../firebase/firebase";
import { Spinner, Card, Button } from "react-bootstrap";
function Pending() {
  const [loader, setloader] = useState(true);
  const [state, setstate] = useState("");
  var data;
  useEffect(() => {
    console.log("YAHA Hn m");
    const q = query(
      collection(db, "NeedyUSERAndMANAGER"),
      where("registrationType", "==", "user")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // const cities = [];
      querySnapshot.forEach((doc) => {
        //   cities.push(doc.data().name);
        console.log(doc.data());
        data = [];
        data.push(doc.data());
        setstate(data);
        console.log("data check", state);
      });
      // console.log("Current cities in CA: ", cities.join(", "));
    });
  }, []);

  return (
    <div>
      <>
        {loader ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          data.map((data) => {
            <>
              <Card>
                <Card.Header>{data.fname}</Card.Header>
                <Card.Body>
                  <Card.Title>{data.email}</Card.Title>
                  <Card.Text></Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </>;
          })
        )}
      </>
    </div>
  );
}

export default Pending;
