import React from "react";
import { Button } from "./LoadMore.styled";

export const LoadMore = ({ handlePage }) => {
  return (
    <Button type="button" onClick={handlePage}>
      Load More
    </Button>
  );
};
