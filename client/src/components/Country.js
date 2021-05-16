import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Table, Container, Button, Form } from "react-bootstrap";
import { Chart } from "react-google-charts";
import { ListCountries } from "../actions/countryActions";
import Loader from "./Loader";
import Message from "./Message";

const Country = ({ match }) => {
  const countryname = match.params.countryname;

  const [period, setPeriod] = useState(0);

  var n = 3;

  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList);
  const { loading, error, countries } = countryList;

  var data = [];

  data = [["Year", "LiveStock Production"]];

  const getYears = () => {
    var year = 2018;
    if (period === 0) setPeriod(parseInt(60));

    for (let k = 0; k < countries.length; k++) {
      if (countries[k]["Country Name"] === countryname) {
        for (let i = 0; i <= period; i++) {
          data.push([parseInt(year), parseInt(countries[k][year])]);
          year--;
        }
        console.log(data);
        return;
      }
    }
  };

  useEffect(() => {
    dispatch(ListCountries());
    getYears();
  }, [dispatch, getYears()]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row className="mt-4">
            <Col>
              <h2>Country Name: {countryname} </h2>
              <Form onSubmit={submitHandler} className="mt-3 mb-3">
                <Form.Group controlId="period">
                  <Form.Label>Select Period</Form.Label>
                  <Form.Control as="select" value={period} onChange={(e) => setPeriod(parseInt(e.target.value))} style={{ width: "8rem" }}>
                    <option value={2}>Past 2 Years</option>
                    <option value={5}>Past 5 Years</option>
                    <option value={10}>Past 10 Years</option>
                    <option value={20}>Past 20 Years</option>
                    <option value={60}>All Time</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Link to="/" style={{ float: "right", marginRight: "4rem", marginTop: "2rem" }}>
                <Button>
                  <i className="fas fa-arrow-left m-1"></i>
                  Go Back
                </Button>
              </Link>
            </Col>
          </Row>
          <Row style={{ marginBottom: "4rem" }}>
            <Col>
              <Chart
                width={"100%"}
                height={"500px"}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                  animation: {
                    startup: true,
                    easing: "linear",
                    duration: 1500,
                  },
                  hAxis: {
                    format: "",
                    title: "Time (years)",
                  },
                  vAxis: {
                    title: "Live Stock (millions)",
                  },
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Table bordered hover responsive className="table-sm  justify-center m-auto" style={{ width: "70%", textAlign: "center" }}>
                {data.map((value, index) => {
                  {
                    return value[0] === "Year" ? (
                      <thead>
                        <tr>
                          <th key={index}>{value[0]}</th>
                          <th key={index}>{value[1]}</th>
                        </tr>
                      </thead>
                    ) : (
                      <tbody>
                        <tr>
                          <td key={index}>{value[0]}</td>
                          <td key={index}>{value[1]}</td>
                        </tr>
                      </tbody>
                    );
                  }
                })}
              </Table>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Country;
