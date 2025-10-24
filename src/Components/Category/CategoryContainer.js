import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import clothe from "../../images/clothe.png"; // fallback image

const CategoryContainer = ({ categories = [] }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2">كل التصنيفات</div>

      <Row className="my-2 d-flex justify-content-between">
        {categories && categories.length > 0 ? (
          categories.map((cat, index) => (
            <CategoryCard
              key={cat._id || index}
              title={cat.name}
              img={cat.image || clothe}
              background="#F4DBA4"
            />
          ))
        ) : (
          <>
            {/* Fallback static cards if no data */}
            <CategoryCard
              title="أجهزة منزلية"
              img={clothe}
              background="#F4DBA4"
            />
            <CategoryCard
              title="إلكترونيات"
              img={clothe}
              background="#0034FF"
            />
            <CategoryCard title="ملابس" img={clothe} background="#FF6262" />
          </>
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
