import {useHistory,useParams} from "react-router-dom";
import {IMAGES} from '../../data'
import {Image} from '../../components/Image'

export const Modal = () => {
    let history = useHistory();
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];
  
    if (!image) return null;
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          <h1>{image.title}</h1>
          <Image color={image.color} />
          <button style={{fontSize: 34}}
          type="button" 
          onClick={back}>
            х
          </button>
        </div>
      </div>
    );
  }