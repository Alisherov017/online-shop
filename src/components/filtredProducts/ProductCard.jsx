import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  return (
    <Card className=" w-96">
      <CardHeader color="blue" className="relative h-96">
        <img src={img} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" className="mb-2">
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{price}$</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          {colors?.map((color, index) => {
            return (
              <i
                className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                key={index}
                style={{ backgroundColor: color }}
              ></i>
            );
          })}
        </Typography>
      </CardFooter>
    </Card>
    // <div>123654</div>
  );
};

export default ProductCard;
