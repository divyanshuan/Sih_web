import "../styles/erdiagram.css";
import Erimg from "../../assets/er.jpeg"
function Erdiagram() {
  return (
    <div>
      <div className="digdetail">
        <h1>ER-Diagarm</h1>
      </div>
      <p className="detail ">
        ER Model, when conceptualized into diagrams, gives a good overview of
        entity-relationship, which is easier to understand. ER diagrams can be
        mapped to relational schema, that is, it is possible to create
        relational schema using ER diagram. We cannot import all the ER
        constraints into relational model, but an approximate schema can be
        generated. There are several processes and algorithms available to
        convert ER Diagrams into Relational Schema. Some of them are automated
        and some of them are manual. We may focus here on the mapping diagram
        contents to relational basics.
      </p>
      <div className="list">
        <p className=" head2">ER diagrams mainly</p>
        <ul>
          <li className="list_item">comprise of Entity</li>
          <li className="list_item">
            its attributes Relationship, which is association among entities.
          </li>
        </ul>
      </div>
      <div className="imageput">
        <img src={Erimg} alt="erdigramimahe" />
      </div>
    </div>
  );
}

export default Erdiagram;
