import './style.css';
import style from './custom.module.css';
function StyleType(){
    return(
        <div>
            <h2 className="heading">Style Type 1</h2>
            <h2 style={{color: "#61dafb"}}>Style Type 2</h2> {/* This is inline css */}
            <h2 className={style.title}>Style Type 3</h2> {/* This is nodule css */}
        </div>
    );
}
export default StyleType;