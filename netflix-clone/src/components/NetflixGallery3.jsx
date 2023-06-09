import { Component } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import styles from "../styles.css";

class NetflixGallery3 extends Component {
  state = {
    movies: [],
    isLoading: true, 
  };
  async componentDidMount() {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=a137661a&s=batman"
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data.Search, isLoading: false });
      } else {
        console.log("errore nel recupero dei dati");
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container fluid className="my-3">
        <Row className="g-3">
          <h2 className="mt-5 text-light">Batman</h2>
          {this.state.isLoading && !this.state.error && (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {this.state.movies.map((film, index) => (
            <Col xs={6} sm={4} md={2} key={`films-${index}`}>
              <img
                src={film.Poster}
                alt={film.Title}
                className="img-fluid rounded film-card"
                style={{
                  objectFit: "cover",
                  height: "250px",
                  width: "250px",
                  objectPosition: "top",
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default NetflixGallery3;