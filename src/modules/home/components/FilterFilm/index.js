import { Box, Button, Divider, Grid, Paper } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import useStyles from "./styles";
import SimplePopover from "../../../../components/Popover";

export default function FilterFilm() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenContentFilter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseContentFilter = () => {
    setAnchorEl(null);
  };

  return (
    <Paper elevation={3} className={classes.container}>
      <Grid alignItems="center" container>
        <Box onClick={handleOpenContentFilter} className={classes.itemFilter}>
          <Box className={classes.nameMovie}>
            Vì anh vẫn tin - I still believe
          </Box>
          <ExpandMoreIcon color="secondary" />
        </Box>

        {/* //Popover */}
        <SimplePopover
          anchorEl={anchorEl}
          handleCloseContentFilter={handleCloseContentFilter}
        />

        <Divider orientation="vertical" flexItem />
        <Box onClick={handleOpenContentFilter} className={classes.itemFilter}>
          <Box className={classes.nameCinema}> Rạp </Box>
          <ExpandMoreIcon color="secondary" />
        </Box>

        <Divider orientation="vertical" flexItem />
        <Box onClick={handleOpenContentFilter} className={classes.itemFilter}>
          <Box className={classes.dayMovie}> Ngày </Box>
          <ExpandMoreIcon color="secondary" />
        </Box>

        <Divider orientation="vertical" flexItem />
        <Box onClick={handleOpenContentFilter} className={classes.itemFilter}>
          <Box className={classes.timeMovie}> Suất chiếu </Box>
          <ExpandMoreIcon color="secondary" />
        </Box>

        <Divider orientation="vertical" flexItem />
        <Box>
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            color="primary"
          >
            Mua vé ngay
          </Button>
        </Box>
      </Grid>
    </Paper>
  );
}
