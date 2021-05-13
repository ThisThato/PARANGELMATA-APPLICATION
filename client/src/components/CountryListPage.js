import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Table, Container } from "react-bootstrap";
import { ListCountries } from "../actions/countryActions";

const CountryListPage = () => {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList);
  const { countries } = countryList;

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
        <Col>
          <Table stripped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Country Name</th>
                <th>Country Code</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country) => (
                <tr>
                  <td>{country["Country Name"]}</td>
                  <td>{country["Country Code"]}</td>
                  <td>{country["2010"]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CountryListPage;
