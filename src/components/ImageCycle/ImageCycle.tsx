import { ImageList, ImageListItem } from "@mui/material";
import "./styles.css";
import { images } from "./util";

const ImageCycle = ({ show = "" }) => {
  return (
    <ImageList>
      {images.map((item) => {
        const sx =
          show === item.alt ? { position: "absolute", top: "20%" } : undefined;
        return (
          <ImageListItem className="imgs" key={item.img} sx={sx}>
            <img
              className={`${item.className} ${show === item.alt && "show"}`}
              src={item.img}
              alt={item.alt}
              loading="lazy"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export { ImageCycle };
