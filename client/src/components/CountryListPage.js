import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Table, Container, Button } from "react-bootstrap";
import { ListCountries } from "../actions/countryActions";
import Loader from "./Loader";
import Message from "./Message";

const CountryListPage = () => {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList);
  const { loading, error, countries } = countryList;

  useEffect(() => {
    dispatch(ListCountries());
    // console.log(getData(20, 2010));
  }, [dispatch]);

  // const getYears = () => {
  //   var year = 2019;

  //   for (let k = 0; k < countries.length; k++) {
  //     //console.log(year + " = " + countries[k][year]);
  //     console.log(countries[k]["Country Name"]);
  //     for (let i = 0; i < 60; i++) {
  //       console.log(year + " = " + countries[k][year]);
  //       year--;
  //       if (year === 1959) {
  //         year = 2019;
  //       }
  //     }
  //   }
  // };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Livestock Per Country</h2>
        </Col>
        <Col>
          <Button>List Years</Button>
        </Col>
      </Row>
      <Row className="align-items-center mt-4">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Col>
            <Table bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>Country Name</th>
                  <th>Country Code</th>
                  <th>Info</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {countries &&
                  countries.map((country) => (
                    <tr key={country["Country Name"]}>
                      <td>{country["Country Name"]}</td>
                      <td>{country["Country Code"]}</td>
                      <td>{country["1998"]}</td>
                      <td>{country["1998"]}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CountryListPage;
