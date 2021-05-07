import {Switch,Route,useLocation} from "react-router-dom";
import {Gallery} from '../../components/Gallery'
import {ImageView} from '../../components/ImageView'
import {Modal} from '../../components/Modal'
import {Home} from '../../components/Home'



export const ModalSwitch = () => {
    let location = useLocation();

    let background = location.state && location.state.background;
  
    return (
      <div>
        <Switch location={background || location}>
          <Route exact path="/" children={<Home />} />
          <Route path="/gallery" children={<Gallery />} />
          <Route path="/img/:id" children={<ImageView />} />
        </Switch>
  
        
        {background && <Route path="/img/:id" children={<Modal />} />}
      </div>
    );
  }