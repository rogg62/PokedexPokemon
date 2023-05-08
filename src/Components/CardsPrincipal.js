import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({img, title, info}) {
  return (
    <Card sx={{ width: '30%', height:"400px" }}>
      <CardActionArea>
        <CardMedia component="img" height="190" image={img} alt=""/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
