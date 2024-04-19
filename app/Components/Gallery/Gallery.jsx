import Styles from './Gallery.module.scss'
import { GalleryItem } from '../GalleryItem/GalleryItem'

export const Gallery = (props) => {
  return (
      <div className={Styles["gallery"]}>
          {props.data.map((photo) => (
              <GalleryItem
                  key={photo.id}
                  photo={photo}
                  onClick={props.onClick}
              />
          ))}
      </div>
  );
};