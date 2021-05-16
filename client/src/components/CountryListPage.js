import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Table, Container, Button, Badge } from "react-bootstrap";
import { ListCountries } from "../actions/countryActions";
import Loader from "./Loader";
import Message from "./Message";

const CountryListPage = () => {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList);
  const { loading, error, countries } = countryList;

  useEffect(() => {
    dispatch(ListCountries());
  }, [dispatch]);

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Livestock Per Country</h2>
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
                  <th>Increase / Dercrease (2016 - 2018)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {countries &&
                  countries.map((country) =>
                    country["Country Name"] === "South Africa" ||
                    country["Country Name"] === "Tanzania" ||
                    country["Country Name"] === "Zimbabwe" ||
                    country["Country Name"] === "Nigeria" ||
                    country["Country Name"] === "Brazil" ? (
                      <tr key={country["Country Name"]}>
                        <td>{country["Country Name"]}</td>

                        <td>
                          {country["2018"] - country["2016"] > 0 ? (
                            <>
                              <i className="fas fa-arrow-up m-3"></i>
                              {(((country["2018"] - country["2016"]) / (country["2018"] + country["2016"])) * 100).toFixed(2)} %
                            </>
                          ) : (
                            <>
                              <i className="fas fa-arrow-down m-3"></i>
                              {(((country["2018"] - country["2016"]) / (country["2018"] + country["2016"])) * 100).toFixed(2)} %
                            </>
                          )}
                        </td>
                        <td>
                          <Link to={`/country/${country["Country Name"]}`}>
                            <Button variant="dark" className="btn-md">
                              Details
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ) : null
                  )}
              </tbody>
            </Table>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CountryListPage;
