import { Box, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import cn from "classnames";

function PaginationComp(props) {
  const { infoPagination } = props;
  const { currentPage, totalPages } = infoPagination;

  const classes = useStyles();

  const handleChangePage = (value) => {
    props.handleChangePage(value);
  };

  const renderPageNumber = () => {
    const arrPage = [];
    for (let index = 0; index < totalPages; index++) {
      arrPage.push(index + 1);
    }

    if (arrPage && arrPage.length > 0) {
      return arrPage.map((item) => {
        return (
          <Box
            onClick={() => {
              handleChangePage(item);
            }}
            key={item}
            className={cn(
              classes.pageItems,
              currentPage === item && classes.active
            )}
          >
            {item}
          </Box>
        );
      });
    }
  };

  return (
    <Box marginTop={1}>
      <Button
        onClick={() => {
          handleChangePage(currentPage - 1);
        }}
        variant="contained"
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      {renderPageNumber()}

      <Button
        onClick={() => {
          handleChangePage(currentPage + 1);
        }}
        variant="contained"
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </Box>
  );
}
export default PaginationComp;
