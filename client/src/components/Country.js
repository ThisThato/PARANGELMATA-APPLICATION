import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Chart } from "react-google-charts";
import { ListCountries } from "../actions/countryActions";
import Loader from "./Loader";
import Message from "./Message";

const Country = ({ match }) => {
  const countryname = match.params.countryname;

  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList);
  const { loading, error, countries } = countryList;

  var data = [];

  data = [["Year", "LiveStock Production"]];

  const getYears = () => {
    var year = 2021;
    for (let k = 0; k < countries.length; k++) {
      //console.log(year + " = " + countries[k][year]);
      // console.log(countries[k]["Country Name"]);
      if (countries[k]["Country Name"] === countryname) {
        // data["Country Name"] = countryname;
        // data["Indicator Name"] = countries[k]["Indicator Name"];
        // data["Country Code"] = countries[k]["Country Code"];
        for (let i = 0; i < 20; i++) {
          //console.log(year + " = " + countries[k][year]);
          data.push([year, parseInt(countries[k][year])]);
          year--;
        }
        console.log(data["Country Code"]);
        return;
      }
    }
  };

  useEffect(() => {
    dispatch(ListCountries());
    getYears();
  }, [dispatch, getYears()]);

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
              {/* <h4>Country Code : {data["Country Code"]} </h4> */}
              <h5>Period : 2001 - 2020</h5>
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
          <Row>
            <Col>
              <Chart
                width={"100%"}
                height={"500px"}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
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
              <h3>Trend for the past 2 years</h3>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Country;
